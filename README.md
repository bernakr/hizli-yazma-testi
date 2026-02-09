# Hizli Yazma Testi

Zamanli yazma hizi olcum uygulamasi.

## Su an hatasiz calistirma yontemi (onerilen)

Bu surum bagimlilik gerektirmez.

1. `index.html` dosyasini tarayicida ac.
2. `Baslat` ile teste gir.

## Ozellikler

- Metin goruntuleme kutusu
- Kullanici girisi icin textarea
- Canli karakter vurgusu: yesil (dogru), kirmizi (yanlis)
- Mevcut kelimeye odak vurgusu
- `Baslat` dugmesiyle test baslatma
- `Durdur` dugmesiyle testi istenilen anda bitirme
- Sure siniri yok; metin bitene kadar test devam eder
- Sure bitiminde sonuc hesaplama: WPM, Dogruluk (%), Weighted WPM
- Test kayitlarinda `Tamamlama` suresi, secilen sure degil gercek bitirme suresidir

## Ekstra Ozellikler

- Zorluk secimi: `Kolay`, `Orta`, `Zor`
- Test turu secimi: Metin, Karisik (Metin + Rakam), Sayilar, Emoji
- Tema secimi: `Soft` ve `Neon Pop` (secilen tema kaydedilir)
- Tek satir modu (tam paragraf yerine kayan satir penceresi)
- Kelime agirliklandirma: basit kelimeler daha dusuk, uzun/zor kelimeler daha yuksek
- Emoji/birlesik karakterler icin grapheme tabanli dogrulama
- Son test gecmisi (LocalStorage) ve tablo gorunumu

## Gereksinim Eslesmesi

- Baslangic zamani Unix timestamp olarak `localStorage` icinde `typingTestStartUnix` anahtarina yazilir.
- Gecen sure `setInterval` ile guncellenir.
- Gecen sure hesaplamasi `simdiki zaman - baslangic zamani` seklindedir.

## Dosyalar

- `index.html`: Arayuz
- `style.css`: Stil
- `script.js`: Tum uygulama mantigi (sayaç, hesaplama, vurgu, gecmis)

## Not

- Klasorde ayrica React/Vite calismasi icin `src/`, `package.json` ve `vite.config.js` dosyalari da tutuluyor.
- Internet/DNS erisimi olan bir ortamda Vite ile devam etmek istersen tekrar etkinlestirebiliriz.
