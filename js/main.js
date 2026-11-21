(function () {
    "use strict";

    var $id = function (id) { return document.getElementById(id); };
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hasIO = 'IntersectionObserver' in window;

    // tiap bagian jalan sendiri, error di satu bagian tidak mematikan yang lain
    function jalan(fn) { try { fn(); } catch (e) { console.error(e); } }

    // Spinner
    setTimeout(function () { var s = $id('spinner'); if (s) s.classList.remove('show'); }, 1);

    // Animasi scroll (WOW)
    jalan(function () { if (window.WOW) new WOW().init(); });

    // Navbar sticky + tombol ke atas
    jalan(function () {
        var stickies = document.querySelectorAll('.sticky-top');
        var toTop = document.querySelector('.back-to-top');
        function onScroll() {
            var lewat = window.scrollY > 300;
            stickies.forEach(function (s) {
                s.classList.toggle('shadow-sm', lewat);
                s.style.top = lewat ? '0px' : '-100px';
            });
            if (toTop) toTop.style.display = lewat ? 'flex' : 'none';
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        if (toTop) toTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Progress scroll
    jalan(function () {
        var bar = $id('scrollProgress');
        function update() {
            var h = document.documentElement.scrollHeight - window.innerHeight;
            var pct = h > 0 ? window.scrollY / h : 0;
            if (bar) bar.style.transform = 'scaleX(' + Math.min(Math.max(pct, 0), 1) + ')';
        }
        window.addEventListener('scroll', update, { passive: true });
        update();
    });

    // Reveal saat masuk layar
    jalan(function () {
        var els = document.querySelectorAll('.reveal, .section-title');
        if (!hasIO) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) {
                    en.target.classList.add('is-in');
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.2 });
        els.forEach(function (el) { io.observe(el); });
    });

    // Angka statistik
    jalan(function () {
        function hitung(el) {
            var target = parseInt(el.getAttribute('data-count'), 10) || 0;
            if (reduceMotion) { el.textContent = target; return; }
            var dur = 1600, start = null;
            function tick(ts) {
                if (start === null) start = ts;
                var t = Math.min((ts - start) / dur, 1);
                el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
                if (t < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }
        var els = document.querySelectorAll('[data-count]');
        if (!hasIO) { els.forEach(function (el) { el.textContent = el.getAttribute('data-count'); }); return; }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { hitung(en.target); io.unobserve(en.target); }
            });
        }, { threshold: 0.6 });
        els.forEach(function (el) { io.observe(el); });
    });

    // Status buka / tutup (07.00 – 21.00 WIB)
    jalan(function () {
        var OPEN = 7 * 60, CLOSE = 21 * 60;
        function menitWIB() {
            try {
                var h = 0, m = 0;
                new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false })
                    .formatToParts(new Date()).forEach(function (p) {
                        if (p.type === 'hour') h = parseInt(p.value, 10) % 24;
                        if (p.type === 'minute') m = parseInt(p.value, 10);
                    });
                return h * 60 + m;
            } catch (e) {
                var d = new Date();
                return d.getHours() * 60 + d.getMinutes();
            }
        }
        function update() {
            var now = menitWIB();
            var buka = now >= OPEN && now < CLOSE;
            var teks = buka ? 'Buka sekarang · tutup 21.00 WIB'
                : (now < OPEN ? 'Tutup · buka pukul 07.00 WIB' : 'Tutup · buka besok pukul 07.00 WIB');
            document.querySelectorAll('[data-open-status]').forEach(function (b) {
                b.classList.toggle('is-open', buka);
                b.classList.toggle('is-closed', !buka);
                b.querySelector('.status-text').textContent = teks;
            });
        }
        update();
        setInterval(update, 60000);
    });

    // Lightbox galeri
    jalan(function () {
        var lb = $id('lightbox');
        var items = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
        if (!lb || !items.length) return;
        var current = 0, lastFocus = null;

        function showAt(i) {
            current = (i + items.length) % items.length;
            var img = items[current].querySelector('img');
            var cap = items[current].querySelector('figcaption');
            var target = lb.querySelector('img');
            target.style.animation = 'none'; void target.offsetWidth; target.style.animation = '';
            target.src = img.getAttribute('src');
            target.alt = img.getAttribute('alt') || '';
            lb.querySelector('figcaption').textContent = cap ? cap.textContent : '';
        }
        function buka(i) {
            lastFocus = document.activeElement;
            showAt(i);
            lb.hidden = false;
            document.body.classList.add('lb-open');
            lb.querySelector('.lb-close').focus();
        }
        function tutup() {
            lb.hidden = true;
            document.body.classList.remove('lb-open');
            if (lastFocus) lastFocus.focus();
        }
        items.forEach(function (it, i) {
            it.addEventListener('click', function () { buka(i); });
            it.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); buka(i); }
            });
        });
        lb.querySelector('.lb-close').addEventListener('click', tutup);
        lb.querySelector('.lb-prev').addEventListener('click', function () { showAt(current - 1); });
        lb.querySelector('.lb-next').addEventListener('click', function () { showAt(current + 1); });
        lb.addEventListener('click', function (e) { if (e.target === lb) tutup(); });
        document.addEventListener('keydown', function (e) {
            if (lb.hidden) return;
            if (e.key === 'Escape') tutup();
            if (e.key === 'ArrowLeft') showAt(current - 1);
            if (e.key === 'ArrowRight') showAt(current + 1);
        });
    });

    // Menu aktif mengikuti scroll + menu mobile menutup sendiri
    jalan(function () {
        var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        var spyMap = { layanan: 'tentang', 'cara-belanja': 'galeri', saran: 'kontak' };
        var spyIds = ['beranda', 'tentang', 'struktur', 'layanan', 'keunggulan', 'galeri', 'cara-belanja', 'saran', 'kontak'];
        function spy() {
            var y = window.scrollY + 140, aktif = 'beranda';
            spyIds.forEach(function (id) {
                var el = $id(id);
                if (el && el.offsetTop <= y) aktif = spyMap[id] || id;
            });
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) aktif = 'kontak';
            navLinks.forEach(function (a) {
                a.classList.toggle('active', a.getAttribute('href') === '#' + aktif);
            });
        }
        window.addEventListener('scroll', spy, { passive: true });
        spy();

        var collapseEl = $id('navbarCollapse');
        navLinks.forEach(function (a) {
            a.addEventListener('click', function () {
                if (collapseEl && collapseEl.classList.contains('show') && window.bootstrap) {
                    var inst = window.bootstrap.Collapse.getInstance(collapseEl);
                    if (inst) inst.hide();
                }
            });
        });
    });

    // Form saran: tahan kirim selama email tujuan belum diisi
    jalan(function () {
        var form = $id('feedback-form');
        if (!form) return;
        form.addEventListener('submit', function (e) {
            if (form.action.indexOf('GANTI_DENGAN_EMAIL_TOKO') !== -1) {
                e.preventDefault();
                var n = $id('fb-note');
                n.textContent = 'Formulir belum aktif: email tujuan belum diatur.';
                n.style.display = 'block';
            }
        });
    });

    // Peta cabang
    jalan(function () {
        var tabs = document.querySelectorAll('.branch-btn');
        var frame = $id('map-iframe');
        if (!tabs.length || !frame) return;
        var openLink = $id('map-open');
        var addr = $id('map-address');
        tabs.forEach(function (t) {
            t.addEventListener('click', function () {
                tabs.forEach(function (b) { b.classList.toggle('active', b === t); });
                var q = encodeURIComponent(t.getAttribute('data-q'));
                frame.classList.add('is-loading');
                frame.src = 'https://www.google.com/maps?q=' + q + '&z=17&output=embed';
                openLink.href = 'https://www.google.com/maps/search/?api=1&query=' + q;
                addr.textContent = t.getAttribute('data-addr');
            });
        });
        frame.addEventListener('load', function () { frame.classList.remove('is-loading'); });
    });
})();