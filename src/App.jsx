import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ResultsHistory from "./components/ResultsHistory";
import { pickRandomPrompt } from "./data/prompts";
import {
  calculateAccuracy,
  calculateWeightedWpm,
  calculateWpm,
  getCurrentWordRange,
  getVisibleRange,
  splitGraphemes
} from "./lib/typing";

const START_KEY = "typingTestStartUnix";
const HISTORY_KEY = "typingTestHistory";
const HISTORY_LIMIT = 20;

const TEST_TYPE_LABEL = {
  text: "Metin",
  numbers: "Sayilar",
  emoji: "Emoji"
};

const DIFFICULTY_LABEL = {
  easy: "Kolay",
  medium: "Orta",
  hard: "Zor"
};

function readHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function App() {
  const [testType, setTestType] = useState("text");
  const [difficulty, setDifficulty] = useState("easy");
  const [durationSec, setDurationSec] = useState(60);
  const [lineMode, setLineMode] = useState(false);

  const [targetText, setTargetText] = useState("");
  const [typed, setTyped] = useState("");

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(() => readHistory());

  const inputRef = useRef(null);
  const hasEndedRef = useRef(false);

  const targetGraphemes = useMemo(() => splitGraphemes(targetText), [targetText]);
  const typedGraphemes = useMemo(() => splitGraphemes(typed), [typed]);
  const cursorIndex = typedGraphemes.length;

  const timeLeft = Math.max(0, durationSec - elapsedSec);
  const wpm = useMemo(() => calculateWpm(typed, elapsedSec), [typed, elapsedSec]);
  const accuracy = useMemo(
    () => calculateAccuracy(typedGraphemes, targetGraphemes),
    [typedGraphemes, targetGraphemes]
  );
  const weightedWpm = useMemo(
    () => calculateWeightedWpm(typed, targetText, elapsedSec),
    [typed, targetText, elapsedSec]
  );

  const saveHistory = useCallback((item) => {
    setHistory((prev) => {
      const next = [item, ...prev].slice(0, HISTORY_LIMIT);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const endTest = useCallback(
    (typedValue = typed, elapsedValue = elapsedSec) => {
      if (hasEndedRef.current) return;
      hasEndedRef.current = true;

      const safeElapsed = Math.max(1, Math.min(elapsedValue, durationSec));
      const safeTypedGraphemes = splitGraphemes(typedValue);

      setIsRunning(false);
      setElapsedSec(Math.min(elapsedValue, durationSec));
      localStorage.removeItem(START_KEY);

      const finalWpm = calculateWpm(typedValue, safeElapsed).toFixed(1);
      const finalAccuracy = calculateAccuracy(safeTypedGraphemes, targetGraphemes).toFixed(1);
      const finalWeighted = calculateWeightedWpm(typedValue, targetText, safeElapsed).toFixed(1);

      setResult(
        `Sure bitti. WPM: ${finalWpm} | Dogruluk: %${finalAccuracy} | Weighted WPM: ${finalWeighted}`
      );

      saveHistory({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
        testType,
        testTypeLabel: TEST_TYPE_LABEL[testType],
        difficulty,
        difficultyLabel: DIFFICULTY_LABEL[difficulty],
        durationSec,
        wpm: finalWpm,
        accuracy: finalAccuracy,
        weightedWpm: finalWeighted
      });
    },
    [typed, elapsedSec, durationSec, targetGraphemes, targetText, saveHistory, testType, difficulty]
  );

  const startTest = useCallback(() => {
    const nextText = pickRandomPrompt(testType, difficulty);
    const startUnix = Math.floor(Date.now() / 1000);

    localStorage.setItem(START_KEY, String(startUnix));
    hasEndedRef.current = false;

    setTargetText(nextText);
    setTyped("");
    setElapsedSec(0);
    setIsRunning(true);
    setResult("Test basladi. Yazmaya devam et.");

    window.setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0);
  }, [testType, difficulty]);

  useEffect(() => {
    if (!isRunning) return undefined;

    const intervalId = window.setInterval(() => {
      const startUnix = Number(localStorage.getItem(START_KEY) || "0");
      if (!startUnix) return;
      const nowUnix = Math.floor(Date.now() / 1000);
      setElapsedSec(Math.max(0, nowUnix - startUnix));
    }, 100);

    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (isRunning && elapsedSec >= durationSec) {
      endTest(typed, durationSec);
    }
  }, [durationSec, elapsedSec, endTest, isRunning, typed]);

  const onInputChange = (event) => {
    const nextValue = event.target.value;
    setTyped(nextValue);

    if (!isRunning) return;
    if (splitGraphemes(nextValue).length >= targetGraphemes.length) {
      endTest(nextValue, elapsedSec);
    }
  };

  const displayChars = useMemo(() => {
    if (!targetGraphemes.length) return [];

    const currentWord = getCurrentWordRange(targetGraphemes, cursorIndex);
    const visible = getVisibleRange(targetGraphemes.length, cursorIndex, lineMode);

    return targetGraphemes.slice(visible.start, visible.end).map((char, offset) => {
      const absoluteIndex = visible.start + offset;
      let className = "char";

      if (absoluteIndex >= currentWord.start && absoluteIndex < currentWord.end) {
        className += " current-word";
      }

      if (absoluteIndex < typedGraphemes.length) {
        className += typedGraphemes[absoluteIndex] === char ? " correct" : " incorrect";
      } else if (absoluteIndex === typedGraphemes.length) {
        className += " current";
      }

      return {
        key: `${absoluteIndex}-${char}`,
        char,
        className
      };
    });
  }, [targetGraphemes, typedGraphemes, cursorIndex, lineMode]);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  return (
    <main className="app">
      <section className="panel">
        <h1>Hizli Yazma Testi</h1>

        <div className="controls">
          <label>
            Test Turu
            <select value={testType} onChange={(e) => setTestType(e.target.value)} disabled={isRunning}>
              <option value="text">Sadece Metin</option>
              <option value="numbers">Sadece Sayilar</option>
              <option value="emoji">Sadece Emoji</option>
            </select>
          </label>

          <label>
            Zorluk
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} disabled={isRunning}>
              <option value="easy">Kolay</option>
              <option value="medium">Orta</option>
              <option value="hard">Zor</option>
            </select>
          </label>

          <label>
            Sure
            <select
              value={String(durationSec)}
              onChange={(e) => setDurationSec(Number(e.target.value))}
              disabled={isRunning}
            >
              <option value="30">30 sn</option>
              <option value="60">60 sn</option>
              <option value="120">120 sn</option>
            </select>
          </label>

          <label className="line-mode">
            <input type="checkbox" checked={lineMode} onChange={(e) => setLineMode(e.target.checked)} />
            Tek Satir Modu
          </label>

          <button type="button" onClick={startTest}>
            Baslat
          </button>
        </div>

        <div className="stats">
          <div className="stat-box">
            <span>Kalan</span>
            <strong>{timeLeft}</strong>
          </div>
          <div className="stat-box">
            <span>Gecen</span>
            <strong>{elapsedSec}</strong>
          </div>
          <div className="stat-box">
            <span>WPM</span>
            <strong>{wpm.toFixed(1)}</strong>
          </div>
          <div className="stat-box">
            <span>Dogruluk</span>
            <strong>{accuracy.toFixed(1)}%</strong>
          </div>
          <div className="stat-box">
            <span>Weighted WPM</span>
            <strong>{weightedWpm.toFixed(1)}</strong>
          </div>
        </div>

        <div className={`display ${lineMode ? "line-view" : ""}`} aria-live="polite">
          {!targetGraphemes.length && "Baslat'a tiklayarak teste baslayin."}
          {displayChars.map(({ key, className, char }) => (
            <span key={key} className={className}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <label className="input-label" htmlFor="typingInput">
          Metni yaz:
        </label>
        <textarea
          id="typingInput"
          ref={inputRef}
          rows="3"
          placeholder="Baslat'a tikladiktan sonra yazmaya basla..."
          disabled={!isRunning}
          value={typed}
          onChange={onInputChange}
        />

        <p className="result">{result}</p>
      </section>

      <ResultsHistory sessions={history} onClear={clearHistory} />
    </main>
  );
}

export default App;
