# WILLS PWA v10.8.7.1 — PREMIUM BRAND UI REFINEMENT

Tanggal: 14 September 2026

## Tujuan
Refinement visual launcher GitHub Wills Coffee agar terasa lebih premium, clean, mobile-first, dan lebih kuat sebagai aplikasi brand Wills — bukan dashboard admin template.

## Yang berubah
- Home hierarchy baru: Kasir + Owner sebagai akses utama.
- Finance + HR dibuat lebih ringkas.
- Investor menjadi akses khusus full-width.
- Hero merah Wills dibuat lebih bersih dan editorial.
- Panel putih besar / card berlapis dikurangi.
- Outlet list dibuat satu kolom yang lebih tenang dan mudah dipindai di HP.
- Status `System Online` sekarang ikut berubah menjadi `System Offline` saat koneksi putus.
- Cache Service Worker dinaikkan ke v10.8.7.1.

## Yang TIDAK berubah
- `config.js` / seluruh URL Apps Script produksi.
- Routing Kasir, Owner, Finance, HR, dan Investor.
- Daftar 5 outlet.
- Owner All Outlet.
- Investor 1/2/3 dan Investor 1 All Outlet.
- Backend Apps Script, Google Sheets, transaksi, Revenue, Arus Kas, HPP, Finance ledger, HR ledger.

## File yang perlu replace di GitHub
1. `index.html`
2. `sw.js`
3. `VERSION.txt`
4. `README_UPDATE.md`
5. `STATIC_QA.json`
6. `SHA256.json`

`config.js` disertakan sebagai referensi canonical dan tidak diubah.

Status: STATIC QA only. Live production tetap perlu test setelah update GitHub.
