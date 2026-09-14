# WILLS PWA — v10.8.7.2 Centered Brand + Featured Owner

Tanggal: 14 September 2026

## Fokus update PWA launcher
- Logo Wills diperbesar dan dipusatkan pada hero.
- Hero hanya menampilkan logo Wills + tulisan `Operational System`.
- Teks `Wills Command Center`, `Satu pintu untuk operasional Wills`, deskripsi, dan meta hero dihapus.
- Background dibuat lebih hidup dengan layer gradient, wave, dan aksen coffee-bean ringan berbasis CSS.
- Owner menjadi kartu utama berwarna gelap/full-width.
- Investor tetap tersedia sebagai kartu akses biasa, sehingga tidak ada fitur yang hilang.
- Kasir, Finance, HR, Investor, dan Owner tetap memakai route production existing.
- Status System Online / Offline tetap dinamis.
- Viewer iframe, tombol Back/Home/Reload, offline state, install prompt, dan service worker tetap dipertahankan.

## File GitHub yang perlu direplace
1. `index.html`
2. `sw.js`
3. `VERSION.txt`
4. `README_UPDATE.md`
5. `STATIC_QA.json`
6. `SHA256.json`

`config.js` ikut disertakan sebagai referensi tetapi isinya TIDAK diubah dari v10.8.7.1.

## Penting — Owner All Outlet
Login dan dashboard `Owner All Outlet` bukan bagian dari HTML GitHub PWA. PWA hanya membuka deployment Apps Script Owner All Outlet melalui iframe (`ownerAllOutletUrl`). Karena source HTML Apps Script Owner All Outlet terbaru belum tersedia di paket/repo yang ditemukan, v10.8.7.2 ini TIDAK mengubah isi login/dashboard internal tersebut.

Revisi Owner All Outlet yang masih harus diterapkan saat source Apps Script terbarunya tersedia:
- kartu login: logo Wills + `Akses Owner`, hapus paragraf penjelasan;
- tombol Masuk menampilkan spinner hanya saat request loading;
- icon W pada sidebar dashboard diganti logo Wills tajam;
- Revenue per Jam diperjelas, termasuk label jam/tabel/chart bagian bawah.

## Safety
Build ini tidak mengubah transaksi, stok, HPP, Revenue, Arus Kas, Finance ledger, HR ledger, password, atau spreadsheet outlet.
