// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.5)';
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger lines
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Hero Animations
const heroTl = gsap.timeline();

heroTl.from('.badge-pill', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
})
    .from('.block-reveal', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    }, '-=0.4')
    .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.trust-strip', {
        opacity: 0,
        duration: 1
    }, '-=0.4');

// Scroll Animations
// Stats
gsap.from('.stagger-card', {
    scrollTrigger: {
        trigger: '#authority',
        start: 'top 90%' // Trigger earlier
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Counter Animation
const counters = document.querySelectorAll('.counters');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const isPercentage = counter.innerText.includes('Top');

    gsap.to(counter, {
        scrollTrigger: {
            trigger: counter,
            start: 'top 90%'
        },
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        onUpdate: function () {
            if (isPercentage) {
                counter.innerHTML = 'Top ' + Math.ceil(this.targets()[0].innerHTML) + '%';
            } else {
                counter.innerHTML = Math.ceil(this.targets()[0].innerHTML) + '+';
            }
        }
    });
});

// About Section Animations
gsap.from('.about-header-main', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%'
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-text-block', {
    scrollTrigger: {
        trigger: '.about-grid-modern',
        start: 'top 80%'
    },
    x: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.from('.about-visual-block', {
    scrollTrigger: {
        trigger: '.about-grid-modern',
        start: 'top 80%'
    },
    x: 30,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
});

// Services - Slide In Animation
// Left Cards (Odd)
gsap.utils.toArray('.service-left').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%'
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// Right Cards (Even)
gsap.utils.toArray('.service-right').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%'
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// Process Steps
gsap.from('.process-step', {
    scrollTrigger: {
        trigger: '#process',
        start: 'top 85%'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: 'back.out(1.7)'
});

// Packages
gsap.from('.package-card', {
    scrollTrigger: {
        trigger: '#packages',
        start: 'top 85%'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Testimonial Carousel Logic Removed (Gallery Implementation)

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
