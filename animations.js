/**
 * DIGI PARTNER — Premium Cinematic Animation Engine
 * Lenis smooth scroll + Custom cursor + Parallax + Section reveals
 */

(function () {
    'use strict';

    // ========================
    // 1. LENIS SMOOTH SCROLL
    // ========================
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                const mobileOverlay = document.getElementById('mobileOverlay');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    if (mobileOverlay) mobileOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
                lenis.scrollTo(target, { offset: -80 });
            }
        });
    });

    // ========================
    // 2. CUSTOM CURSOR
    // ========================
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (dot && ring && window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        });
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover enlargement
        const interactiveEls = document.querySelectorAll('a, button, .btn, .service-card, .portfolio-card, input, textarea, .testimonial-btn');
        interactiveEls.forEach((el) => {
            el.addEventListener('mouseenter', () => ring.classList.add('hover'));
            el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
        });

        // Magnetic effect on buttons
        document.querySelectorAll('.btn, .btn-primary, .btn-outline').forEach((btn) => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    // ========================
    // 3. HERO TEXT REVEAL
    // ========================
    function revealHero() {
        const lines = document.querySelectorAll('.hero-heading .line span');
        lines.forEach((span, i) => {
            setTimeout(() => span.classList.add('revealed'), 200 + i * 150);
        });
        setTimeout(() => {
            document.querySelector('.hero-sub')?.classList.add('revealed');
        }, 600);
        setTimeout(() => {
            document.querySelector('.hero-buttons')?.classList.add('revealed');
        }, 800);
        setTimeout(() => {
            document.querySelector('.hero-proof')?.classList.add('revealed');
        }, 1000);
    }
    // Trigger on load
    if (document.readyState === 'complete') revealHero();
    else window.addEventListener('load', revealHero);

    // ========================
    // 4. HERO PARALLAX + 3D TILT
    // ========================
    const heroSection = document.querySelector('.hero');
    const heroShapes = document.querySelectorAll('.hero-shape');
    if (heroSection && heroShapes.length && window.matchMedia('(hover: hover)').matches) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            heroShapes.forEach((shape, i) => {
                const speed = (i + 1) * 20;
                shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
            // Subtle 3D tilt on hero content
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
            }
        });
        heroSection.addEventListener('mouseleave', () => {
            heroShapes.forEach((shape) => { shape.style.transform = ''; });
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) heroContent.style.transform = '';
        });
    }

    // ========================
    // 5. SCROLL REVEAL OBSERVER
    // ========================
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .stagger-children');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach((el) => revealObserver.observe(el));

    // ========================
    // 6. PROCESS TIMELINE
    // ========================
    const processTimeline = document.querySelector('.process-timeline');
    if (processTimeline) {
        const procObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    procObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        procObserver.observe(processTimeline);
    }

    // ========================
    // 7. COUNT-UP ANIMATION
    // ========================
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (statNumbers.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseFloat(el.dataset.target);
                    const suffix = el.dataset.suffix || '';
                    const prefix = el.dataset.prefix || '';
                    const isDecimal = el.dataset.decimal === 'true';
                    const duration = 2200;
                    const start = performance.now();
                    function update(now) {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 4);
                        const current = isDecimal
                            ? (target * eased).toFixed(1)
                            : Math.floor(target * eased).toLocaleString('en-IN');
                        el.innerHTML = prefix + current + '<span class="accent">' + suffix + '</span>';
                        if (progress < 1) requestAnimationFrame(update);
                    }
                    requestAnimationFrame(update);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach((el) => counterObserver.observe(el));
    }

    // ========================
    // 8. TESTIMONIAL SLIDER
    // ========================
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dotsContainer = document.querySelector('.testimonial-dots');

    if (testimonialTrack && testimonialCards.length) {
        let currentSlide = 0;
        let slidesPerView = 3;
        let autoSlide;

        function updateSlidesPerView() {
            if (window.innerWidth < 768) slidesPerView = 1;
            else if (window.innerWidth < 1024) slidesPerView = 2;
            else slidesPerView = 3;
        }
        
        function updateDots() {
            if (!dotsContainer) return;
            const totalGroups = Math.ceil(testimonialCards.length / slidesPerView);
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalGroups; i++) {
                const dot = document.createElement('span');
                dot.className = 'testimonial-dot';
                if (i === Math.floor(currentSlide / slidesPerView)) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    stopAutoSlide();
                    goToSlide(i * slidesPerView);
                    startAutoSlide();
                });
                dotsContainer.appendChild(dot);
            }
        }

        function goToSlide(index) {
            updateSlidesPerView();
            const maxIndex = Math.max(0, testimonialCards.length - slidesPerView);
            currentSlide = Math.min(Math.max(0, index), maxIndex);
            
            // On mobile if it's 1 slide per view, we can just use 100/length
            // but for generic cases (100 / length) * index is correct
            const offset = (100 / testimonialCards.length) * currentSlide;
            testimonialTrack.style.transform = `translateX(-${offset}%)`;
            
            // Update active dot
            const dots = document.querySelectorAll('.testimonial-dot');
            const activeIndex = Math.floor(currentSlide / slidesPerView);
            dots.forEach((d, i) => d.classList.toggle('active', i === activeIndex));
        }

        function startAutoSlide() {
            autoSlide = setInterval(() => {
                const maxIndex = Math.max(0, testimonialCards.length - slidesPerView);
                if (currentSlide >= maxIndex) goToSlide(0);
                else goToSlide(currentSlide + slidesPerView);
            }, 5000); // Increased to 5s for better readability
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                goToSlide(currentSlide - slidesPerView);
                startAutoSlide();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                goToSlide(currentSlide + slidesPerView);
                startAutoSlide();
            });
        }

        // Initialize
        updateSlidesPerView();
        updateDots();
        startAutoSlide();

        // Pause on hover
        if (window.matchMedia('(hover: hover)').matches) {
            testimonialTrack.addEventListener('mouseenter', stopAutoSlide);
            testimonialTrack.addEventListener('mouseleave', startAutoSlide);
        }

        window.addEventListener('resize', () => {
            const oldSlidesPerView = slidesPerView;
            updateSlidesPerView();
            if (oldSlidesPerView !== slidesPerView) {
                updateDots();
            }
            goToSlide(currentSlide);
        });

        // ========================
        // MOBILE EXPANDABLE LOGIC
        // ========================
        const viewAllBtn = document.getElementById('viewAllTestimonialsBtn');
        const testimonialSlider = document.querySelector('.testimonial-slider');

        if (viewAllBtn && testimonialSlider) {
            // Function to handle layout based on screen size
            function handleMobileLayout() {
                if (window.innerWidth < 768) {
                    // Mobile: Start in collapsed list mode
                    testimonialSlider.classList.add('is-collapsed');
                    stopAutoSlide();
                } else {
                    // Desktop/Tablet: Always show as slider
                    testimonialSlider.classList.remove('is-collapsed');
                    startAutoSlide();
                }
            }

            // Initial check
            handleMobileLayout();

            viewAllBtn.addEventListener('click', () => {
                const isCollapsed = testimonialSlider.classList.contains('is-collapsed');
                if (isCollapsed) {
                    // Expand: show all as list
                    testimonialSlider.classList.remove('is-collapsed');
                    testimonialTrack.classList.add('is-list-mode');
                    viewAllBtn.innerHTML = 'Show Less <span class="material-icons">expand_less</span>';
                    stopAutoSlide();
                } else {
                    // Collapse: show only 2
                    testimonialSlider.classList.add('is-collapsed');
                    testimonialTrack.classList.remove('is-list-mode');
                    viewAllBtn.innerHTML = 'View All Reviews <span class="material-icons">expand_more</span>';
                }
            });

            // Re-check on resize
            window.addEventListener('resize', handleMobileLayout);
        }
    }

    // ========================
    // 9. NAVBAR SCROLL EFFECT
    // ========================
    const nav = document.querySelector('.site-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 30);
        }, { passive: true });
    }

    // ========================
    // 10. THEME TOGGLE
    // ========================
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleMobile = document.getElementById('themeToggleMobile');

    function applyTheme() {
        if (localStorage.theme === 'light') {
            document.body.classList.add('light-mode');
            document.documentElement.classList.remove('dark');
        } else {
            document.body.classList.remove('light-mode');
            document.documentElement.classList.add('dark');
        }
    }
    applyTheme();

    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.theme = isLight ? 'light' : 'dark';
        if (isLight) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

    // ========================
    // 11. MOBILE MENU
    // ========================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    function openMobileMenu() {
        mobileMenu?.classList.add('active');
        mobileOverlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        mobileMenu?.classList.remove('active');
        mobileOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    }
    mobileMenuBtn?.addEventListener('click', openMobileMenu);
    mobileMenuClose?.addEventListener('click', closeMobileMenu);
    mobileOverlay?.addEventListener('click', closeMobileMenu);

    // ========================
    // 12. CONTACT FORM
    // ========================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.btn-submit');
            submitBtn?.classList.add('sending');
            setTimeout(() => {
                submitBtn?.classList.remove('sending');
                contactForm.reset();
                // Force reset floating labels
                contactForm.querySelectorAll('input, textarea').forEach(el => {
                    el.dispatchEvent(new Event('blur'));
                });
                alert('Thank you! We\'ll get back to you shortly.');
            }, 1500);
        });
    }

    // ========================
    // 13. MAIN GRADIENT BLOB PARALLAX (throttled with rAF)
    // ========================
    const blobs = document.querySelectorAll('.gradient-blob');
    
    if (window.matchMedia('(hover: hover)').matches && blobs.length) {
        let scrollTicking = false;
        window.addEventListener('scroll', () => {
            if (!scrollTicking) {
                scrollTicking = true;
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    blobs.forEach((blob, i) => {
                        const speed = (i + 1) * 0.05;
                        blob.style.transform = `translateY(${scrollY * speed}px)`;
                    });
                    scrollTicking = false;
                });
            }
        }, { passive: true });
    }

})();
