# WILLS PWA — v10.8.7.0 Premium Command Center

Tanggal: 13 September 2026

## Fokus update
- Desain PWA shell / launcher saja.
- Tampilan Android mobile-first, lebih premium, futuristik, clean, dan ringan.
- Identitas tetap Wills merah-putih, tanpa mengubah route atau backend.
- Home menampilkan Kasir, Owner, Finance, HR, dan Investor.
- Kasir/Owner tetap memilih 5 outlet yang sama.
- Finance & HR tetap menuju Master Core.
- Owner All Outlet dan Investor tetap memakai URL existing.
- Navigasi viewer, Back, Home, reload, offline, install prompt tetap dipertahankan.

## File yang diganti di GitHub PWA
1. `index.html`
2. `config.js` (isinya tetap memakai URL production yang sekarang)
3. `sw.js`

Asset icon lama tetap dipakai: `icon-192.png`, `icon-512.png`, `favicon.png`, `manifest.webmanifest`. Tidak perlu diganti bila sudah ada di repo.

## Cara pasang
Upload/replace 3 file di root GitHub PWA, commit ke branch production/main yang dipakai, lalu buka ulang PWA. Bila desain lama masih muncul, tutup PWA lalu buka lagi atau clear site cache satu kali.

## Catatan keamanan
Build ini tidak menyentuh transaksi, HPP, stok, Revenue, Arus Kas, periode, Finance ledger, HR ledger, atau spreadsheet outlet. Ini adalah UI shell / navigation refresh.
