const SIMPLE_WORDS = new Set(["a", "an", "the", "ve", "bir", "bu", "su", "o", "to", "of", "in"]);

const graphemeSegmenter =
  typeof Intl !== "undefined" && Intl.Segmenter
    ? new Intl.Segmenter("tr", { granularity: "grapheme" })
    : null;

export const LINE_WINDOW_SIZE = 72;

export function splitWords(value) {
  return value.trim().length ? value.trim().split(/\s+/) : [];
}

export function splitGraphemes(value) {
  if (!value) return [];
  if (!graphemeSegmenter) return Array.from(value);
  return Array.from(graphemeSegmenter.segment(value), (item) => item.segment);
}

export function normalizeWord(word) {
  return word
    .toLocaleLowerCase("tr-TR")
    .replace(/[.,!?;:()\[\]{}"']/g, "")
    .trim();
}

export function getWordWeight(word) {
  const normalized = normalizeWord(word);

  if (!normalized) return 0;
  if (SIMPLE_WORDS.has(normalized) || normalized.length <= 2) return 0.5;
  if (normalized.length <= 5) return 1;
  if (normalized.length <= 8) return 1.4;
  return 1.8;
}

export function calculateAccuracy(typedGraphemes, targetGraphemes) {
  if (!typedGraphemes.length) return 0;

  let correctChars = 0;
  for (let i = 0; i < typedGraphemes.length; i += 1) {
    if (typedGraphemes[i] === targetGraphemes[i]) correctChars += 1;
  }

  return (correctChars / typedGraphemes.length) * 100;
}

export function calculateWpm(typed, elapsedSec) {
  if (elapsedSec <= 0) return 0;
  return (splitWords(typed).length / elapsedSec) * 60;
}

export function calculateWeightedWpm(typed, target, elapsedSec) {
  if (elapsedSec <= 0) return 0;

  const typedWords = splitWords(typed).map(normalizeWord);
  const targetWords = splitWords(target);
  const targetNormalized = targetWords.map(normalizeWord);
  const length = Math.min(typedWords.length, targetWords.length);

  let weightedCorrectCount = 0;
  for (let i = 0; i < length; i += 1) {
    if (typedWords[i] === targetNormalized[i] && typedWords[i]) {
      weightedCorrectCount += getWordWeight(targetWords[i]);
    }
  }

  return (weightedCorrectCount / elapsedSec) * 60;
}

export function getCurrentWordRange(targetGraphemes, cursorIndex) {
  if (!targetGraphemes.length) return { start: 0, end: 0 };

  const safeCursor = Math.min(Math.max(cursorIndex, 0), targetGraphemes.length);

  let start = safeCursor;
  while (start > 0 && !/\s/.test(targetGraphemes[start - 1])) start -= 1;

  let end = safeCursor;
  while (end < targetGraphemes.length && !/\s/.test(targetGraphemes[end])) end += 1;

  return { start, end };
}

export function getVisibleRange(totalLength, cursorIndex, lineMode, windowSize = LINE_WINDOW_SIZE) {
  if (!lineMode) return { start: 0, end: totalLength };

  let start = Math.max(0, cursorIndex - Math.floor(windowSize * 0.25));
  let end = Math.min(totalLength, start + windowSize);

  if (end - start < windowSize) {
    start = Math.max(0, end - windowSize);
  }

  return { start, end };
}

export function formatSessionDate(isoDate) {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(date);
}
