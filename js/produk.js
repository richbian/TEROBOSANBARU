/* ---------- Data produk ----------
   harga: angka tanpa titik, atau null jika belum ditampilkan
   grosir, minGrosir: opsional
   foto: cukup nama file + ekstensi, mis. 'paku.jpe' (otomatis dicari di folder img/)
   Harga di bawah masih contoh, ganti dengan harga toko. */

var HARGA_DIPERBARUI = '21 November 2026';
var WA_NOMOR = '6282338881919';
var FOLDER_FOTO = 'img/';

/* foto: gambar yang dipakai di kotak kategori. ikon hanya cadangan kalau foto gagal dimuat. */
var KATEGORI = [
    { nama: 'Semen',    ikon: 'fa-cubes',        foto: 'produk-semen-gresik.jpg' },
    { nama: 'Besi',     ikon: 'fa-grip-lines',   foto: 'produk-besi-10mm.jpg' },
    { nama: 'Cat',      ikon: 'fa-paint-roller', foto: 'produk-cat-avitex.jpg' },
    { nama: 'Pipa',     ikon: 'fa-tint',         foto: 'produk-pipa-pvc.jpg' },
    { nama: 'Material', ikon: 'fa-boxes',        foto: 'bata-merah.jpe' },
    { nama: 'Kayu',     ikon: 'fa-layer-group',  foto: 'kayu-kaso.jpg' },
    { nama: 'Keramik',  ikon: 'fa-border-all',   foto: 'keramik-lantai-40x40.jpe' },
    { nama: 'Listrik',  ikon: 'fa-bolt',         foto: 'lampu-led.jpe' },
    { nama: 'Perkakas', ikon: 'fa-tools',        foto: 'palu.jpe' }
];

var PRODUK = [
    { nama: 'Semen Gresik 50 kg',              kat: 'Semen',    satuan: 'Sak',    harga: 62000,  grosir: 60000, minGrosir: 20, foto: 'produk-semen-gresik.jpg' },
    { nama: 'Semen Tiga Roda 50 kg',           kat: 'Semen',    satuan: 'Sak',    harga: 63000,  grosir: 61000, minGrosir: 20, foto: 'produk-semen-tiga-roda.jpg' },
    { nama: 'Semen Perekat Keramik',           kat: 'Semen',    satuan: 'Sak',    harga: 85000,  foto: 'foto-semen-perekat-keramik.webp' },
    { nama: 'Besi Beton Polos 10 mm',          kat: 'Besi',     satuan: 'Batang', harga: 62000,  grosir: 60000, minGrosir: 10, foto: 'produk-besi-10mm.jpg' },
    { nama: 'Besi Beton Polos 12 mm',          kat: 'Besi',     satuan: 'Batang', harga: 92000,  grosir: 89000, minGrosir: 10, foto: 'produk-besi-12mm.jpg' },
    { nama: 'Besi Hollow',                     kat: 'Besi',     satuan: 'Batang', harga: 48000,  foto: 'besi-hollow.webp' },
    { nama: 'Kawat Bendrat',                   kat: 'Besi',     satuan: 'Roll',   harga: 340000, foto: 'kawat-bendrat.jpg' },
    { nama: 'Paku (berbagai ukuran)',          kat: 'Besi',     satuan: 'Kg',     harga: 22000,  foto: 'paku.jpe' },
    { nama: 'Cat Tembok Putih 5 kg (Avitex)',  kat: 'Cat',      satuan: 'Kaleng', harga: 135000, foto: 'produk-cat-avitex.jpg' },
    { nama: 'Cat Kayu dan Besi',               kat: 'Cat',      satuan: 'Kaleng', harga: 58000,  foto: 'cat-kayu-dan-besi.jpe' },
    { nama: 'Thinner',                         kat: 'Cat',      satuan: 'Liter',  harga: 28000,  foto: 'thinner.jpe' },
    { nama: 'Pipa PVC 3 inci (Rucika Tipe D)', kat: 'Pipa',     satuan: 'Batang', harga: 125000, foto: 'produk-pipa-pvc.jpg' },
    { nama: 'Pipa PVC 1/2 inci',               kat: 'Pipa',     satuan: 'Batang', harga: 24000,  foto: 'pipa-pvc-1.2inc.jpe' },
    { nama: 'Sok dan Knee PVC',                kat: 'Pipa',     satuan: 'Biji',   harga: null,   foto: 'sok-dan-knee-pvc.jpe' },
    { nama: 'Kran Air',                        kat: 'Pipa',     satuan: 'Biji',   harga: 18000,  foto: 'kran-air.jpe' },
    { nama: 'Pasir Pasang',                    kat: 'Material', satuan: 'Kubik',  harga: 280000, foto: 'pasir-pasang.jpe' },
    { nama: 'Batu Split',                      kat: 'Material', satuan: 'Kubik',  harga: 330000, foto: 'batu-split.jpe' },
    { nama: 'Bata Merah',                      kat: 'Material', satuan: 'Biji',   harga: 900,    grosir: 800, minGrosir: 500, foto: 'bata-merah.jpe' },
    { nama: 'Batako',                          kat: 'Material', satuan: 'Biji',   harga: 3500,   foto: 'batako.jpe' },
    { nama: 'Triplek 9 mm',                    kat: 'Kayu',     satuan: 'Lembar', harga: 135000, foto: 'triplek-9mm.jpe' },
    { nama: 'Kayu Kaso',                       kat: 'Kayu',     satuan: 'Batang', harga: 38000,  foto: 'kayu-kaso.jpg' },
    { nama: 'Keramik Lantai 40x40',            kat: 'Keramik',  satuan: 'Dus',    harga: 68000,  foto: 'keramik-lantai-40x40.jpe' },
    { nama: 'Kabel Listrik',                   kat: 'Listrik',  satuan: 'Roll',   harga: null,   foto: 'kabel-listrik.jpe' },
    { nama: 'Lampu LED',                       kat: 'Listrik',  satuan: 'Biji',   harga: 25000,  foto: 'lampu-led.jpe' },
    { nama: 'Saklar dan Stop Kontak',          kat: 'Listrik',  satuan: 'Biji',   harga: 15000,  foto: 'saklar-dan-stopkontak.jpe' },
    { nama: 'Palu',                            kat: 'Perkakas', satuan: 'Biji',   harga: 45000,  foto: 'palu.jpe' },
    { nama: 'Meteran',                         kat: 'Perkakas', satuan: 'Biji',   harga: 25000,  foto: 'meteran.jpe' },
    { nama: 'Sekop',                           kat: 'Perkakas', satuan: 'Biji',   harga: 55000,  foto: 'sekop.jpe' }
];


/* ---------- Pencarian & tampilan ---------- */
(function () {
    "use strict";

    var PAGE = 12;
    var state = { q: '', kat: '', sort: 'relevan', limit: PAGE };
    var $ = function (id) { return document.getElementById(id); };
    var el = {
        tiles: $('kat-grid'), q: $('pq'), clear: $('pclear'), sort: $('psort'),
        count: $('pcount'), filter: $('pfilter'), grid: $('pgrid'),
        empty: $('pempty'), more: $('pmore'), moreWrap: $('pmore-wrap'), hasil: $('hasil')
    };

    var ikonKat = {};
    KATEGORI.forEach(function (k) { ikonKat[k.nama] = k.ikon; });

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }
    function rp(n) { return 'Rp ' + n.toLocaleString('id-ID'); }

    // Alamat foto: kalau hanya nama file, otomatis ditambah folder img/
    // (kalau sudah ada "/" di dalamnya, dipakai apa adanya)
    function fotoSrc(foto) {
        return foto.indexOf('/') === -1 ? FOLDER_FOTO + foto : foto;
    }

    // Ekstensi cadangan: .jpe <-> .jpg (kalau nanti file di-rename)
    function fotoAlt(src) {
        if (/\.jpe$/i.test(src)) return src.replace(/\.jpe$/i, '.jpg');
        if (/\.jpg$/i.test(src)) return src.replace(/\.jpg$/i, '.jpe');
        if (/\.jpeg$/i.test(src)) return src.replace(/\.jpeg$/i, '.jpg');
        return '';
    }

    function buatTiles() {
        el.tiles.innerHTML = KATEGORI.map(function (k) {
            var n = PRODUK.filter(function (p) { return p.kat === k.nama; }).length;
            var isi = k.foto
                ? '<img src="' + esc(fotoSrc(k.foto)) + '" alt="' + esc(k.nama) + '" loading="lazy">'
                : '<i class="fa ' + k.ikon + '"></i>';
            return '<button type="button" class="kat-tile" data-kat="' + esc(k.nama) + '">' +
                '<span class="kat-box" data-ikon="' + k.ikon + '">' + isi + '</span>' +
                '<span class="kat-name">' + esc(k.nama) + '</span>' +
                '<span class="kat-n">' + n + ' produk</span></button>';
        }).join('');
    }

    function cari() {
        var tokens = state.q.toLowerCase().split(/\s+/).filter(Boolean);
        var hasil = [];
        PRODUK.forEach(function (p, i) {
            if (state.kat && p.kat !== state.kat) return;
            var hay = (p.nama + ' ' + p.kat).toLowerCase();
            var skor = 0;
            for (var t = 0; t < tokens.length; t++) {
                var pos = hay.indexOf(tokens[t]);
                if (pos < 0) return;
                skor += pos;
            }
            hasil.push({ p: p, i: i, skor: skor });
        });

        var ada = function (x) { return typeof x.p.harga === 'number'; };
        hasil.sort(function (a, b) {
            if (state.sort === 'nama') return a.p.nama.localeCompare(b.p.nama, 'id');
            if (state.sort === 'murah' || state.sort === 'mahal') {
                if (ada(a) !== ada(b)) return ada(a) ? -1 : 1;
                if (!ada(a)) return a.i - b.i;
                return state.sort === 'murah' ? a.p.harga - b.p.harga : b.p.harga - a.p.harga;
            }
            return (tokens.length ? a.skor - b.skor : 0) || a.i - b.i;
        });
        return hasil.map(function (x) { return x.p; });
    }

    function kartu(p, i, dari) {
        var anim = i >= dari;
        var ikon = ikonKat[p.kat] || 'fa-box';
        var foto = p.foto
            ? '<img src="' + esc(fotoSrc(p.foto)) + '" alt="' + esc(p.nama) + '" loading="lazy">'
            : '<i class="fa ' + ikon + '"></i>';
        var harga = typeof p.harga === 'number'
            ? '<div class="pprice">' + rp(p.harga) + ' <small>/ ' + esc(p.satuan) + '</small></div>'
            : '<div class="pprice pprice-ask">Hubungi untuk harga</div>';
        var grosir = typeof p.grosir === 'number'
            ? '<div class="pgrosir"><i class="fa fa-boxes me-1"></i>Grosir ' + rp(p.grosir) +
              (p.minGrosir ? ' (min. ' + p.minGrosir + ' ' + esc(p.satuan.toLowerCase()) + ')' : '') + '</div>'
            : '';
        var wa = 'https://wa.me/' + WA_NOMOR + '?text=' + encodeURIComponent(
            'Halo Toko Terobosan Baru Condong Catur, saya ingin menanyakan ketersediaan ' + p.nama + '.');

        return '<div class="col-6 col-md-4 col-lg-3 pcard' + (anim ? ' pop-in' : '') + '"' +
            (anim ? ' style="animation-delay:' + ((i - dari) * 0.05).toFixed(2) + 's"' : '') + '>' +
            '<div class="pcard-in">' +
            '<div class="pimg" data-ikon="' + ikon + '">' + foto + '</div>' +
            '<div class="pbody"><div class="pwrap">' +
            '<span class="pkat">' + esc(p.kat) + '</span>' +
            '<h3 class="pnama">' + esc(p.nama) + '</h3>' + harga + grosir + '</div>' +
            '<a class="btn btn-outline-primary btn-sm mt-3" href="' + wa + '" target="_blank" rel="noopener">' +
            '<i class="fab fa-whatsapp me-1"></i>Tanya stok</a></div></div></div>';
    }

    function render(dari) {
        var list = cari();
        var tampil = list.slice(0, state.limit);
        el.grid.innerHTML = tampil.map(function (p, i) { return kartu(p, i, dari); }).join('');
        el.count.textContent = list.length
            ? 'Menampilkan ' + tampil.length + ' dari ' + list.length + ' produk' : '';
        el.empty.hidden = list.length > 0;
        el.moreWrap.hidden = list.length <= state.limit;

        el.tiles.querySelectorAll('.kat-tile').forEach(function (t) {
            t.classList.toggle('active', t.getAttribute('data-kat') === state.kat);
        });
        el.clear.hidden = !state.q;

        var info = [];
        if (state.kat) info.push('Kategori: <strong>' + esc(state.kat) + '</strong>');
        if (state.q) info.push('Kata kunci: <strong>' + esc(state.q) + '</strong>');
        el.filter.hidden = !info.length;
        el.filter.innerHTML = info.join(' &middot; ') +
            (info.length ? ' <button type="button" id="preset">Hapus filter</button>' : '');

        try {
            var u = new URLSearchParams();
            if (state.q) u.set('q', state.q);
            if (state.kat) u.set('kat', state.kat);
            history.replaceState(null, '', u.toString() ? '?' + u.toString() : location.pathname);
        } catch (e) { /* abaikan */ }
    }

    function ulang() { state.limit = PAGE; render(0); }

    el.tiles.addEventListener('click', function (e) {
        var t = e.target.closest('.kat-tile');
        if (!t) return;
        var k = t.getAttribute('data-kat');
        state.kat = state.kat === k ? '' : k;
        ulang();
        if (state.kat) el.hasil.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    el.q.addEventListener('input', function () { state.q = el.q.value.trim(); ulang(); });
    el.clear.addEventListener('click', function () { el.q.value = ''; state.q = ''; ulang(); el.q.focus(); });
    el.sort.addEventListener('change', function () { state.sort = el.sort.value; ulang(); });
    el.more.addEventListener('click', function () { var dari = state.limit; state.limit += PAGE; render(dari); });
    el.filter.addEventListener('click', function (e) {
        if (e.target.id !== 'preset') return;
        state.q = ''; state.kat = ''; el.q.value = ''; ulang();
    });
    document.querySelectorAll('.psuggest [data-q]').forEach(function (b) {
        b.addEventListener('click', function () {
            state.q = b.getAttribute('data-q'); el.q.value = state.q; ulang();
            el.hasil.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Foto gagal dimuat -> coba ekstensi cadangan (.jpe <-> .jpg) sekali,
    // kalau tetap gagal tampilkan ikon kategori. Alamat yang gagal dicatat di Console (F12).
    el.grid.addEventListener('error', function (e) {
        var img = e.target;
        if (img.tagName !== 'IMG') return;
        console.warn('Foto gagal dimuat:', img.src);
        var alt = fotoAlt(img.getAttribute('src'));
        if (alt && !img.getAttribute('data-coba')) {
            img.setAttribute('data-coba', '1');
            img.src = alt;
            return;
        }
        var box = img.parentNode;
        box.innerHTML = '<i class="fa ' + box.getAttribute('data-ikon') + '"></i>';
    }, true);

    // Foto kategori gagal dimuat -> coba ekstensi cadangan, lalu ikon
    el.tiles.addEventListener('error', function (e) {
        var img = e.target;
        if (img.tagName !== 'IMG') return;
        console.warn('Foto kategori gagal dimuat:', img.src);
        var alt = fotoAlt(img.getAttribute('src'));
        if (alt && !img.getAttribute('data-coba')) {
            img.setAttribute('data-coba', '1');
            img.src = alt;
            return;
        }
        var box = img.parentNode;
        box.innerHTML = '<i class="fa ' + box.getAttribute('data-ikon') + '"></i>';
    }, true);

    $('pnote').textContent = 'Harga diperbarui ' + HARGA_DIPERBARUI +
        ' dan bisa berubah sewaktu-waktu. Cek harga dan stok terbaru lewat WhatsApp.';
    buatTiles();
    var params = new URLSearchParams(location.search);
    state.q = (params.get('q') || '').trim();
    var kat = params.get('kat') || '';
    state.kat = KATEGORI.some(function (k) { return k.nama === kat; }) ? kat : '';
    el.q.value = state.q;
    render(0);
})();

/* Header halaman Produk: kata berganti, angka berhitung, parallax, pintasan "/" dan reveal.
   Muat SETELAH produk.js (memakai variabel PRODUK, KATEGORI, HARGA_DIPERBARUI dari file itu). */
(function () {
    "use strict";

    var hero = document.getElementById('phero');
    if (!hero) return;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // tiap bagian jalan sendiri: error di satu bagian tidak mematikan yang lain
    function jalan(fn) { try { fn(); } catch (e) { console.error(e); } }

    /* 1. Kata di judul diketik bergantian ("Cari semen", "Cari besi", ...) */
    jalan(function () {
        var el = document.getElementById('phero-word');
        if (!el) return;
        var kata = ['semen', 'besi', 'cat', 'pipa', 'keramik', 'kayu', 'kabel', 'perkakas', 'pasir'];
        if (reduce) { el.textContent = kata[0]; return; }

        var i = 0, n = 0, hapus = false;
        function tik() {
            if (document.hidden) { setTimeout(tik, 600); return; }   // jeda saat tab tidak dilihat
            var w = kata[i];
            if (!hapus) {
                n++;
                el.textContent = w.slice(0, n);
                if (n === w.length) { hapus = true; setTimeout(tik, 1700); return; }
                setTimeout(tik, 95);
            } else {
                n--;
                el.textContent = w.slice(0, n);
                if (n === 0) { hapus = false; i = (i + 1) % kata.length; setTimeout(tik, 380); return; }
                setTimeout(tik, 45);
            }
        }
        el.textContent = '';
        setTimeout(tik, 900);
    });

    /* 2. Angka statistik (diambil otomatis dari data produk) */
    jalan(function () {
        if (typeof PRODUK === 'undefined' || typeof KATEGORI === 'undefined') return;
        var data = {
            produk: PRODUK.length,
            kategori: KATEGORI.length,
            grosir: PRODUK.filter(function (p) { return typeof p.grosir === 'number'; }).length
        };
        document.querySelectorAll('[data-stat]').forEach(function (el) {
            var target = data[el.getAttribute('data-stat')] || 0;
            if (reduce) { el.textContent = target; return; }
            setTimeout(function () {
                var mulai = null;
                function langkah(ts) {
                    if (mulai === null) mulai = ts;
                    var t = Math.min((ts - mulai) / 1400, 1);
                    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
                    if (t < 1) requestAnimationFrame(langkah);
                }
                requestAnimationFrame(langkah);
            }, 800);
        });
        var upd = document.getElementById('phero-upd');
        if (upd && typeof HARGA_DIPERBARUI !== 'undefined') upd.textContent = HARGA_DIPERBARUI;
    });

    /* 3. Ikon melayang ikut bergeser mengikuti mouse (parallax). Hanya di perangkat dengan mouse. */
    jalan(function () {
        if (reduce || !window.matchMedia('(hover: hover)').matches) return;
        var raf = 0, x = 0, y = 0;
        hero.addEventListener('mousemove', function (e) {
            var r = hero.getBoundingClientRect();
            x = (e.clientX - r.left) / r.width - 0.5;
            y = (e.clientY - r.top) / r.height - 0.5;
            if (!raf) raf = requestAnimationFrame(function () {
                hero.style.setProperty('--mx', x.toFixed(3));
                hero.style.setProperty('--my', y.toFixed(3));
                raf = 0;
            });
        });
        hero.addEventListener('mouseleave', function () {
            hero.style.setProperty('--mx', 0);
            hero.style.setProperty('--my', 0);
        });
    });

    /* 4. Tekan "/" di mana saja untuk langsung mengetik pencarian */
    jalan(function () {
        var q = document.getElementById('pq');
        if (!q) return;
        document.addEventListener('keydown', function (e) {
            if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
            var tag = (document.activeElement && document.activeElement.tagName) || '';
            if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
            e.preventDefault();
            q.focus();
            q.select();
        });
    });

    /* 5. Elemen ".reveal" muncul halus saat di-scroll */
    jalan(function () {
        var els = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            els.forEach(function (el) { el.classList.add('is-in'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
            });
        }, { threshold: 0.15 });
        els.forEach(function (el) { io.observe(el); });
    });
})();
