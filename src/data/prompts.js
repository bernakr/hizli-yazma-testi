export const TEST_DATA = {
  text: {
    easy: [
      "Bugun hava guzel ve bahcede yuruyus yapmak iyi geliyor.",
      "Sabah kahvemi ictikten sonra planimi yazip ise basliyorum.",
      "Kucuk adimlarla ilerlemek buyuk hedeflere ulasmayi kolaylastirir."
    ],
    medium: [
      "Mahalledeki kutuphane sessiz oldugu icin odaklanmak ve uzun sure calismak daha kolay oluyor.",
      "Bir urunu gelistirirken net gereksinimler yazmak, ekip ici iletisimi hizlandirir ve hata oranini azaltir.",
      "Duzenli tekrar yapmak, yeni ogrendigimiz kavramlarin uzun sureli bellekte kalmasina yardim eder."
    ],
    hard: [
      "Arkadaslik, yalnizca ortak ilgi alanlariyla degil, zorluk anlarinda gosterilen guven ve sorumlulukla derinlesir.",
      "Mahalle kulturu, kusaklar arasinda aktarilan degerler sayesinde dayanisma ve aidiyet duygusunu guclendirir.",
      "Karmasik problemleri cozerken varsayimlari acikca yazmak, dogrulanabilir ve surdurulebilir kararlar alinmasini saglar."
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

export function pickRandomPrompt(type, level) {
  const pool = TEST_DATA[type]?.[level] ?? TEST_DATA.text.easy;
  return pool[Math.floor(Math.random() * pool.length)];
}
