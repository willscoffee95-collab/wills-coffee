# PWA Kasir Resume — v10.9.4 (05 November 2026)

## Apa yang diubah (launcher GitHub)
- `index.html` sekarang membuat satu iframe Kasir per outlet yang **baru dimuat ketika dibuka**.
- Saat beralih ke beranda, Owner, Finance, HR, Investor, atau outlet lain, iframe Kasir disembunyikan **tanpa `src=about:blank`**.
- Masuk kembali ke Kasir outlet yang sama selama halaman PWA masih hidup memakai iframe sebelumnya (tanpa reload dan tanpa reset UI/keranjang).
- ID outlet Kasir terakhir saja disimpan di `localStorage` agar pada pembukaan PWA berikutnya bisa membuka URL Kasir outlet terakhir. Tidak menyimpan PIN/token/keranjang di GitHub.
- Ketika pengguna menekan Muat Ulang, iframe memang dimuat ulang sesuai tombolnya.
- `sw.js` cache dibump. Endpoint `config.js` dan Google Apps Script tidak diubah.

## Batasan yang harus diuji sebelum merge
Penting: iframe beda origin (`script.google.com` / `googleusercontent.com`). Launcher tidak dapat membaca status shift atau keranjang dari dalam iframe.

1. **Berpindah menu tanpa menutup PWA**: posisi Kasir dipertahankan selama dokumen iframe masih hidup.
2. **Menutup PWA sepenuhnya**: memuat ulang dokumen Kasir outlet terakhir. Pemulihan layar transaksi/keranjang persis seperti sebelumnya **bergantung pada kemampuan Apps Script Kasir**; GitHub saja tidak cukup.
3. **Shift ditutup/logout**: agar penanda outlet diselesaikan dan iframe dibuang tepat saat event, aplikasi Kasir (di Apps Script) harus mengirim sinyal dari dalam iframe:
   - `window.parent.postMessage({type:'WILLS_PWA_CASHIER_SHIFT_CLOSED'}, '*');`
   - atau `window.parent.postMessage({type:'WILLS_PWA_CASHIER_LOGOUT'}, '*');`
   - alternatif `window.parent.postMessage({type:'WILLS_PWA_CASHIER_STATUS', status:'CLOSED'}, '*');`
   Launcher hanya menerima sinyal itu dari iframe Kasir yang terdaftar dan origin Google Apps Script yang dipercaya. Implementasi sinyal di Apps Script **belum termasuk PR ini**.
4. Logout saat PWA tidak terbuka/shift ditutup lewat perangkat lain juga memerlukan validasi status backend saat pemuatan ulang. Tanpa backend, launcher hanya tahu outlet terakhir, bukan status shift terkini.
5. `wills-kasir-cipaisan` adalah PWA terpisah yang langsung membungkus Apps Script Kasir; perubahan menu lintas fitur ini hanya di PWA utama `wills-coffee`.

## Uji manual sebelum diterapkan ke produksi
- Buka Kasir RB, isi keranjang **tanpa bayar**, kembali ke beranda, buka Kasir RB; UI dan keranjang mesti tetap ada.
- Dari Kasir, buka Finance/Owner, kembali ke Kasir outlet yang sama; tidak boleh reload.
- Buka Kasir lain dan kembali ke RB; masing-masing disimpan terpisah selama PWA aktif.
- Tekan Muat Ulang; pastikan proses reload manual benar-benar terjadi.
- Tutup shift/logout setelah sinyal backend dipasang; buka Kasir lagi, mesti muncul layar awal.
- Tutup aplikasi sepenuhnya dan buka kembali; audit apakah Apps Script memulihkan shift dan draft; jika belum, implementasikan di Apps Script dahulu.
- Cek tidak ada request posting transaksi ganda, mutasi stok, atau dampak ke Finance/Investor.

**Status**: Branch uji. Jangan merge sebagai solusi 'shift closed resets' penuh sebelum event backend dan skenario iOS/Android diverifikasi.
