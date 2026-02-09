const TEST_DATA = {
  text: {
    easy: [
      "Bugun hava guzel ve bahcede yuruyus yapmak iyi geliyor. Kisa bir mola verdigimde zihnim daha iyi toparlaniyor. Sonra masaya donup planli sekilde calismaya devam ediyorum.",
      "Sabah kahvemi ictikten sonra gunluk planimi yaziyorum. Oncelik listesi olunca hangi isi ne zaman yapacagim netlesiyor. Boylece gun sonunda daha az stres hissediyorum.",
      "Kucuk adimlarla ilerlemek buyuk hedeflere ulasmayi kolaylastirir. Her gun duzenli tekrar yaptigimda konular daha iyi oturuyor. Zamanla guvenim artiyor ve hizim da gelisiyor."
    ],
    medium: [
      "Mahalledeki kutuphane sessiz oldugu icin odaklanmak daha kolay oluyor. Ozellikle zor konularda dikkat daginikligini azaltmak buyuk fark yaratiyor. Uzun sureli calisma seanslari bu ortamda daha verimli geciyor.",
      "Bir urunu gelistirirken net gereksinimler yazmak ekip ici iletisimi hizlandirir. Her adimin amaci acik oldugunda hatalar daha erken fark edilir. Bu yaklasim teslim tarihini korumayi ve kaliteyi artirmayi saglar.",
      "Duzenli tekrar yapmak yeni ogrendigimiz kavramlarin bellekte kalmasina yardim eder. Sadece okumak yerine kisa alistirmalarla pekistirme yapmak daha etkilidir. Bu yontem sinav ve proje sureclerinde kalici fayda saglar."
    ],
    hard: [
      "Arkadaslik yalnizca ortak ilgi alanlariyla degil zorluk anlarinda gosterilen guvenle derinlesir. Insanlar birbirine alan tanidiginda iletisim daha saglikli bir zemine oturur. Bu sayede uzun vadeli baglar daha dayanikli hale gelir.",
      "Mahalle kulturu kusaklar arasinda aktarilan degerlerle yasar. Ortak sorumluluk bilinci guclendiginde dayanisma duygusu da dogal olarak artar. Aidiyet hissi toplumsal guveni destekleyen en onemli unsurlardan biridir.",
      "Karmasik problemleri cozerken varsayimlari acikca yazmak kritik oneme sahiptir. Olculebilir kriterler belirlenmediginde alinan kararlar tartismali hale gelebilir. Sistematik degerlendirme sureci hem dogrulanabilir hem surdurulebilir sonuclar uretir."
    ]
  },
  mixed: {
    easy: [
      "Bugun 3 farkli gorevi tamamladim ve hepsini saat 18:00 olmadan bitirdim. Kisa molalar verdigimde odagim artti. Yarin icin 2 yeni hedef belirledim.",
      "Bu hafta 5 gun duzenli calisinca yazma hizim 12 puan artti. Her gun 15 dakika tekrar yaptim. Sonucta hata sayim belirgin sekilde azaldi.",
      "Sabah 08:30'da baslayip 2 saat odakli calistim. Sonra 20 dakikalik bir ara verdim. Gun sonunda toplam 4 isi sorunsuz tamamladim."
    ],
    medium: [
      "Ekip toplantisi 14:00'te basladi ve 45 dakika surdu. Ilk bolumde 3 kritik sorun listelendi, ikinci bolumde cozum adimlari netlesti. Her gorev icin teslim tarihi 7 gun icinde belirlendi.",
      "Proje panelinde bugun 27 kayit kontrol edildi ve 9 tanesi duzeltildi. Test senaryolarinin %84'u basarili sonuc verdi. Kalan maddeler icin yarina kadar ek plan cikarilacak.",
      "Aylik raporda 2025 Q4 verileri ile 2026 Q1 verileri karsilastirildi. Performans metrigi %11 artis gosterse de 2 alanda iyilestirme ihtiyaci goruldu. Ekip bu alanlar icin haftalik takip baslatacak."
    ],
    hard: [
      "Sistem 03:15'te gecici bir gecikme yasadi, ancak 11 dakika icinde dengeye dondu. Olay kayitlarinda 4 farkli baglanti hatasi ve 2 zaman asimi not edildi. Sonraki surumde otomatik toparlanma mekanizmasi etkinlestirilecek.",
      "Analiz raporunda 128 farkli islem adimi incelendi ve 17 noktada darboagaz tespit edildi. Islem suresini %22 azaltmak icin once kuyruklama stratejisi, sonra bellek kullanimi optimize edilecek. Bu planda her adim icin olculebilir KPI tanimlandi.",
      "Dagitim plani yapilirken 6 bolge, 24 rota ve 3 oncelik seviyesi birlikte degerlendirildi. Kaynaklar esit dagitilmadiginda toplam sure 94 dakikaya cikiyor, dengeli dagitimda ise 71 dakikaya dusuyor. Bu nedenle karar mekanizmasina dinamik agirliklandirma eklenecek."
    ]
  },
  numbers: {
    easy: [
      "12 45 78 90 34 67 89 21 56 43",
      "1 2 3 4 5 6 7 8 9 10",
      "33 44 55 66 77 88 99 11"
    ],
    medium: [
      "2024 1998 3401 7812 6543 9087 4312 7765",
      "98 172 305 499 602 713 845 999",
      "1200 4500 6789 3210 9876 5432"
    ],
    hard: [
      "91827 44109 77234 11890 66345 25007 38911",
      "10001 99999 54321 12345 86753 24680 13579",
      "40960 32768 16384 8192 4096 2048 1024"
    ]
  },
  emoji: {
    easy: [
      "😀 😃 😄 😁 😆 😅 😂 🤣",
      "🍎 🍌 🍇 🍓 🍒 🍍 🥝",
      "🚗 🚕 🚌 🚓 🚑 🚒 🚚"
    ],
    medium: [
      "🌍 🌎 🌏 🗺️ 🧭 🧱 🧪 ⚙️",
      "🎯 🧠 🧩 📚 ✍️ ⏱️ 📈 🛠️",
      "🌤️ ⛅ 🌦️ 🌧️ ⛈️ 🌩️ 🌨️"
    ],
    hard: [
      "🧬 ⚗️ 🔬 🧫 🛰️ 🧭 🧱 🧮 🧠",
      "🛡️ ⚖️ 🏛️ 📜 🧾 🧷 🧵 🧱 🧩",
      "🌪️ 🌊 🧊 🔥 🌋 🌌 ☄️ 🪐 🌠"
    ]
  }
};

const START_KEY = "typingTestStartUnix";
const HISTORY_KEY = "typingTestHistory";
const THEME_KEY = "typingTestTheme";
const HISTORY_LIMIT = 20;
const SIMPLE_WORDS = new Set(["a", "an", "the", "ve", "bir", "bu", "su", "o", "to", "of", "in"]);
const LINE_WINDOW_SIZE = 72;

const graphemeSegmenter =
  typeof Intl !== "undefined" && Intl.Segmenter
    ? new Intl.Segmenter("tr", { granularity: "grapheme" })
    : null;

const TEST_TYPE_LABEL = {
  text: "Metin",
  mixed: "Karisik",
  numbers: "Sayilar",
  emoji: "Emoji"
};

const DIFFICULTY_LABEL = {
  easy: "Kolay",
  medium: "Orta",
  hard: "Zor"
};

const elements = {
  testType: document.getElementById("testType"),
  difficulty: document.getElementById("difficulty"),
  themeMode: document.getElementById("themeMode"),
  lineMode: document.getElementById("lineMode"),
  startButton: document.getElementById("startButton"),
  stopButton: document.getElementById("stopButton"),
  typingInput: document.getElementById("typingInput"),
  display: document.getElementById("display"),
  elapsed: document.getElementById("elapsed"),
  wpm: document.getElementById("wpm"),
  accuracy: document.getElementById("accuracy"),
  weightedWpm: document.getElementById("weightedWpm"),
  result: document.getElementById("result"),
  clearHistory: document.getElementById("clearHistory"),
  historyBody: document.getElementById("historyBody"),
  historyEmpty: document.getElementById("historyEmpty"),
  historyTableWrap: document.getElementById("historyTableWrap")
};

const state = {
  targetText: "",
  targetGraphemes: [],
  activeTestType: "text",
  activeDifficulty: "easy",
  timerId: null,
  isRunning: false,
  elapsedSec: 0,
  hasEnded: false,
  history: []
};

function splitWords(value) {
  return value.trim().length ? value.trim().split(/\s+/) : [];
}

function splitGraphemes(value) {
  if (!value) return [];
  if (!graphemeSegmenter) return Array.from(value);
  return Array.from(graphemeSegmenter.segment(value), (item) => item.segment);
}

function normalizeWord(word) {
  return word
    .toLocaleLowerCase("tr-TR")
    .replace(/[.,!?;:()\[\]{}"']/g, "")
    .trim();
}

function getWordWeight(word) {
  const normalized = normalizeWord(word);
  if (!normalized) return 0;
  if (SIMPLE_WORDS.has(normalized) || normalized.length <= 2) return 0.5;
  if (normalized.length <= 5) return 1;
  if (normalized.length <= 8) return 1.4;
  return 1.8;
}

function calculateAccuracy(typedGraphemes, targetGraphemes) {
  if (!typedGraphemes.length) return 0;

  let correctChars = 0;
  for (let i = 0; i < typedGraphemes.length; i += 1) {
    if (typedGraphemes[i] === targetGraphemes[i]) correctChars += 1;
  }

  return (correctChars / typedGraphemes.length) * 100;
}

function calculateWpm(typed, elapsedSec) {
  if (elapsedSec <= 0) return 0;
  return (splitWords(typed).length / elapsedSec) * 60;
}

function calculateWeightedWpm(typed, target, elapsedSec) {
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

function formatSessionDate(isoDate) {
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

function pickRandomPrompt() {
  const type = elements.testType.value;
  const level = elements.difficulty.value;
  const pool = TEST_DATA[type][level];
  return pool[Math.floor(Math.random() * pool.length)];
}

function getCurrentWordRange(targetGraphemes, cursorIndex) {
  if (!targetGraphemes.length) return { start: 0, end: 0 };

  const safeCursor = Math.min(Math.max(cursorIndex, 0), targetGraphemes.length);

  let start = safeCursor;
  while (start > 0 && !/\s/.test(targetGraphemes[start - 1])) start -= 1;

  let end = safeCursor;
  while (end < targetGraphemes.length && !/\s/.test(targetGraphemes[end])) end += 1;

  return { start, end };
}

function getVisibleRange(totalLength, cursorIndex) {
  if (!elements.lineMode.checked) return { start: 0, end: totalLength };

  let start = Math.max(0, cursorIndex - Math.floor(LINE_WINDOW_SIZE * 0.25));
  let end = Math.min(totalLength, start + LINE_WINDOW_SIZE);

  if (end - start < LINE_WINDOW_SIZE) {
    start = Math.max(0, end - LINE_WINDOW_SIZE);
  }

  return { start, end };
}

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

function persistHistory() {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(state.history));
}

function renderHistory() {
  if (!state.history.length) {
    elements.historyEmpty.classList.remove("hidden");
    elements.historyTableWrap.classList.add("hidden");
    elements.historyBody.innerHTML = "";
    return;
  }

  elements.historyEmpty.classList.add("hidden");
  elements.historyTableWrap.classList.remove("hidden");

  elements.historyBody.innerHTML = state.history
    .map(
      (row) => `<tr>
        <td>${formatSessionDate(row.createdAt)}</td>
        <td>${row.testTypeLabel}</td>
        <td>${row.difficultyLabel}</td>
        <td>${row.completionSec ?? row.durationSec} sn</td>
        <td>${row.wpm}</td>
        <td>%${row.accuracy}</td>
        <td>${row.weightedWpm}</td>
      </tr>`
    )
    .join("");
}

function pushHistory(item) {
  state.history = [item, ...state.history].slice(0, HISTORY_LIMIT);
  persistHistory();
  renderHistory();
}

function clearHistory() {
  state.history = [];
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
}

function applyTheme(themeName) {
  const safeTheme = themeName === "neon" ? "neon" : "soft";
  document.body.classList.remove("theme-soft", "theme-neon");
  document.body.classList.add(`theme-${safeTheme}`);
  localStorage.setItem(THEME_KEY, safeTheme);
}

function setControlState(isRunning) {
  elements.startButton.disabled = isRunning;
  elements.stopButton.disabled = !isRunning;
  elements.testType.disabled = isRunning;
  elements.difficulty.disabled = isRunning;
}

function currentElapsedSec() {
  const startUnix = Number(localStorage.getItem(START_KEY) || "0");
  if (!startUnix) return 0;
  const nowUnix = Math.floor(Date.now() / 1000);
  return Math.max(0, nowUnix - startUnix);
}

function renderStats() {
  const typed = elements.typingInput.value;
  const typedGraphemes = splitGraphemes(typed);
  const elapsedSec = state.isRunning ? currentElapsedSec() : state.elapsedSec;
  if (state.isRunning) state.elapsedSec = elapsedSec;

  elements.elapsed.textContent = String(elapsedSec);
  elements.wpm.textContent = calculateWpm(typed, elapsedSec).toFixed(1);
  elements.accuracy.textContent = `${calculateAccuracy(typedGraphemes, state.targetGraphemes).toFixed(1)}%`;
  elements.weightedWpm.textContent = calculateWeightedWpm(typed, state.targetText, elapsedSec).toFixed(1);
}

function renderDisplay() {
  if (!state.targetGraphemes.length) {
    elements.display.textContent = "Baslat'a tiklayarak teste baslayin.";
    return;
  }

  elements.display.classList.toggle("line-view", elements.lineMode.checked);

  const typedGraphemes = splitGraphemes(elements.typingInput.value);
  const cursorIndex = typedGraphemes.length;
  const currentWord = getCurrentWordRange(state.targetGraphemes, cursorIndex);
  const visible = getVisibleRange(state.targetGraphemes.length, cursorIndex);

  let html = "";
  for (let i = visible.start; i < visible.end; i += 1) {
    const char = state.targetGraphemes[i];
    let className = "char";

    if (i >= currentWord.start && i < currentWord.end) {
      className += " current-word";
    }

    if (i < typedGraphemes.length) {
      className += typedGraphemes[i] === char ? " correct" : " incorrect";
    } else if (i === typedGraphemes.length) {
      className += " current";
    }

    const safeChar = char === " " ? "&nbsp;" : escapeHtml(char);
    html += `<span class="${className}">${safeChar}</span>`;
  }

  elements.display.innerHTML = html;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function startTest() {
  if (state.isRunning) return;

  state.targetText = pickRandomPrompt();
  state.targetGraphemes = splitGraphemes(state.targetText);
  state.activeTestType = elements.testType.value;
  state.activeDifficulty = elements.difficulty.value;
  state.elapsedSec = 0;
  state.hasEnded = false;
  state.isRunning = true;

  localStorage.setItem(START_KEY, String(Math.floor(Date.now() / 1000)));

  elements.typingInput.value = "";
  elements.typingInput.disabled = false;
  elements.typingInput.focus();
  elements.result.textContent = "Test basladi. Yazmaya devam et.";
  setControlState(true);

  clearInterval(state.timerId);
  state.timerId = setInterval(renderStats, 100);

  renderDisplay();
  renderStats();
}

function endTest(reason = "completed") {
  if (state.hasEnded) return;
  state.hasEnded = true;

  const elapsedFromClock = currentElapsedSec();

  state.isRunning = false;
  clearInterval(state.timerId);
  setControlState(false);

  elements.typingInput.disabled = true;

  const typed = elements.typingInput.value;
  const typedGraphemes = splitGraphemes(typed);
  const elapsedSec = Math.max(1, elapsedFromClock || state.elapsedSec);
  state.elapsedSec = elapsedSec;

  const finalWpm = calculateWpm(typed, elapsedSec).toFixed(1);
  const finalAccuracy = calculateAccuracy(typedGraphemes, state.targetGraphemes).toFixed(1);
  const finalWeighted = calculateWeightedWpm(typed, state.targetText, elapsedSec).toFixed(1);

  const reasonLabel = reason === "stopped" ? "Test durduruldu." : "Test tamamlandi.";
  elements.result.textContent = `${reasonLabel} Tamamlama: ${elapsedSec} sn | WPM: ${finalWpm} | Dogruluk: %${finalAccuracy} | Weighted WPM: ${finalWeighted}`;

  pushHistory({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    testTypeLabel: TEST_TYPE_LABEL[state.activeTestType],
    difficultyLabel: DIFFICULTY_LABEL[state.activeDifficulty],
    completionSec: elapsedSec,
    wpm: finalWpm,
    accuracy: finalAccuracy,
    weightedWpm: finalWeighted
  });

  localStorage.removeItem(START_KEY);

  renderDisplay();
  renderStats();
}

function handleInput() {
  if (!state.isRunning) return;

  renderDisplay();
  renderStats();

  if (splitGraphemes(elements.typingInput.value).length >= state.targetGraphemes.length) {
    endTest();
  }
}

function handleStop() {
  if (!state.isRunning) return;
  endTest("stopped");
}

function init() {
  state.history = readHistory();
  const savedTheme = localStorage.getItem(THEME_KEY) || "soft";
  elements.themeMode.value = savedTheme === "neon" ? "neon" : "soft";
  applyTheme(elements.themeMode.value);

  elements.startButton.addEventListener("click", startTest);
  elements.stopButton.addEventListener("click", handleStop);
  elements.typingInput.addEventListener("input", handleInput);
  elements.lineMode.addEventListener("change", renderDisplay);
  elements.themeMode.addEventListener("change", (event) => applyTheme(event.target.value));
  elements.clearHistory.addEventListener("click", clearHistory);

  setControlState(false);
  renderHistory();
  renderDisplay();
  elements.result.textContent = "";
}

init();
