# WILLS PWA — v10.8.7.4 Exact Wills Logo

Tanggal: 14 September 2026

## Koreksi
- Logo lama yang keliru dihapus dari UI PWA.
- Sumber logo resmi sekarang adalah file `logo web.png` yang diberikan langsung oleh Owner.
- Bentuk, warna, tulisan Wills Coffee, dan outline logo tidak digambar ulang / tidak direcolor.
- Logo UI disimpan sebagai `wills-logo.png` dengan background transparan.
- Hero, splash, install card, serta kartu All Outlet memakai logo resmi yang sama.
- Favicon, icon 192, icon 512, serta maskable icon juga dibangun dari logo resmi yang sama pada canvas transparan.
- Tidak ada kotak merah/putih bawaan pada file logo.
- Routing, config production, Kasir, Owner, Finance, HR, Investor, dan semua URL tidak diubah.
- Service Worker cache dibump agar aset logo lama tidak tertahan.

## File baru/replace
- `wills-logo.png`
- `favicon.png`
- `icon-192.png`
- `icon-512.png`
- `icon-maskable-192.png`
- `icon-maskable-512.png`
- `index.html`
- `sw.js`
- `VERSION.txt`
- `README_UPDATE.md`
- `STATIC_QA.json`
- `SHA256.json`

`config.js` tidak berubah.
