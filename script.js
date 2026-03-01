//EMAILJS INIT
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("kookDvy7kGgKMqao4");
    }
})();



//INFINITE SLIDER 
document.addEventListener('DOMContentLoaded', function() {
    createInfiniteSlider();
});

function createInfiniteSlider() {
    // Kontrollo nëse slider-i ekziston
    const sliderContainer = document.querySelector('.slider.container-fluid');
    if (!sliderContainer) return;
    
    // Teknologjitë për slider
    const technologies = [
        { icon: 'fa-brands fa-react', color: '#61DBFB' },
        { icon: 'fa-brands fa-js', color: '#F7DF1E' },
        { icon: 'fa-brands fa-html5', color: '#E34F26' },
        { icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
        { icon: 'fa-brands fa-node-js', color: '#339933' },
        { icon: 'fa-brands fa-npm', color: '#CB3837' },
        { icon: 'fa-brands fa-git-alt', color: '#F05032' },
        { icon: 'fa-solid fa-database', color: '#47A248' }
    ];
    
    // Krijo track-un
    const slideTrack = document.createElement('div');
    slideTrack.className = 'slide-track';
    
    // Shto ikonat 3 herë për smooth infinite scroll
    for (let repeat = 0; repeat < 3; repeat++) {
        technologies.forEach(tech => {
            const icon = document.createElement('i');
            icon.className = tech.icon;
            icon.style.transition = 'color 0.3s, transform 0.3s';
            
            // Shto hover efekt me JavaScript
            icon.addEventListener('mouseenter', function() {
                this.style.color = tech.color;
                this.style.transform = 'scale(1.2)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.color = '';
                this.style.transform = '';
            });
            
            slideTrack.appendChild(icon);
        });
    }
    
    // Pastro dhe shto track-un e ri
    sliderContainer.innerHTML = '';
    sliderContainer.appendChild(slideTrack);
    
    // Shto CSS për animacionin nëse nuk ekziston
    addSliderStyles();
}

function addSliderStyles() {
    // Kontrollo nëse stilet ekzistojnë
    if (document.getElementById('slider-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'slider-styles';
    style.textContent = `
        .slider {
            width: 100%;
            overflow: hidden;
            padding: 30px 0;
            position: relative;
        }
        
        .slider::before,
        .slider::after {
            content: "";
            position: absolute;
            top: 0;
            width: 100px;
            height: 100%;
            z-index: 2;
            pointer-events: none;
        }
        
        .slider::before {
            left: 0;
            background: linear-gradient(to right, #0a0a0a 0%, transparent 100%);
        }
        
        .slider::after {
            right: 0;
            background: linear-gradient(to left, #0a0a0a 0%, transparent 100%);
        }
        
        .slide-track {
            display: flex;
            width: max-content;
            animation: scroll 25s linear infinite;
        }
        
        .slide-track i {
            font-size: 50px;
            color: white;
            margin: 0 50px;
            transition: all 0.3s ease;
        }
        
        @keyframes scroll {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-33.33%);
            }
        }
        
        /* Pause animation on hover */
        .slider:hover .slide-track {
            animation-play-state: paused;
            cursor:pointer;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .slide-track i {
                font-size: 40px;
                margin: 0 30px;
            }
            
            .slider::before,
            .slider::after {
                width: 50px;
            }
        }
        
        @media (max-width: 480px) {
            .slide-track i {
                font-size: 30px;
                margin: 0 20px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

//TRANSLATIONS
const translations = {
    sq: {
        // Navigation
        home: "Faqja Kryesore",
        project: "Projektet",
        services: "Shërbimet",
        lang: "Gjuha",
        
        // Home section
        available: "në dispozicion për bashkpunim!",
        web_dev_part1: "Web Developing &",
        web_dev_part2: "FullStack Developers.",
        home_desc: "Ne dizenojme dhe zhvillojme eksperienca web të nivelit të lartë për kompani që vlerësojnë vëmendjen ndaj detajeve.",
        contact_me: "na kontakto",
        
        // Tech section
        tech_stack: "Teknologjitë Tona",
        tech_desc: "Punojme me teknologji moderne për të ndërtuar aplikacione web të shpejta, të shkallëzueshme dhe miqësore për përdoruesit. Nga zhvillimi frontend te arkitektura backend dhe databazat, fokusohemi në kod të pastër dhe performancë.",
        
        // Featured projects
        featured_projects: "projekte të zgjedhura",
        creativity_part1: "duke treguar kreativitet",
        creativity_part2: "dhe precizion.",
        featured_desc: "Një përzgjedhje e projekteve UX dhe web që nxjerrin në pah zgjidhjen e problemeve, strategjinë e dizajnit dhe agjilitetin full-stack në industri dhe audienca të ndryshme.",
        project1_title: "Kornizë E-Commerce Adaptive",
        project1_desc: "Eksperiencë blerjeje responsive me filtra dinamikë, komponentë modularë dhe UI të pastër.",
        project2_title: "Sistemi i Interface për Dashboard SaaS",
        project2_desc: "ndërtojme një interface të shkallëzueshëm me grafikë të personalizuar, mikro-ndërveprime dhe modalitet të errët/të çelët.",
        project3_title: "Rrjet Portfolio i Optimizuar për Mobile",
        project3_desc: "dizajnojme një rrjet të optimizuar për sjelljen e scroll-it në mobile, performancë të lartë me media.",
        project4_title: "Fluksi UX për Rezervime Restoranti",
        project4_desc: "thjeshtojme rezervimin e tavolinave me flukse përdoruesi, sinkronizim kalendari dhe mikro-kopje feedback-u.",
        all_projects: "të gjitha projektet",
        
        // Services
        my_services: "shërbimet tona",
        services_title_part1: "rrit Prezencën Tënde",
        services_title_part2: "Online me Ne",
        services_desc: "Krijimi i Website-eve dhe Aplikacioneve të Fokusuara te Përdoruesi për Eksperienca Dixhitale të Përshtatshme.",
        service1_title: "Dizajn dhe Zhvillim Website-sh",
        service1_desc: "Dizajn dhe zhvillim website-sh të personalizuara sipas markës dhe nevojave të biznesit tuaj.",
        service2_title: "Kërkim dhe Analizë Përdoruesi",
        service2_desc: "Kryej kërkime me përdorues për të kuptuar audiencën tuaj të synuar, nevojat dhe sjelljet e tyre.",
        service3_title: "Design UI/UX",
        service3_desc: "Design interface përdoruesi (UI) që janë tërheqëse vizualisht dhe në linjë me identitetin e markës suaj.",
        service4_title: "Zhvillim Full-Stack",
        service4_desc: "Sigurojme përputhshmëri ndër-shfletuesish dhe standarde të aksesueshmërisë.",
        service5_title: "Mirëmbajtja dhe Mbështetje",
        service5_desc: "Përditësime, rregullime, kopje rezervë, monitorim dhe përmirësime të vazhdueshme. Faqja juaj e internetit mbetet e sigurt, e shpejtë dhe e besueshme shumë kohë pas lançimit.",
        service6_title: "Dyqane E-commerce që shesin",
        service6_desc: "Faqe produktesh moderne + përfundim i lehtë i pagesave. Pagesa me Stripe, rrjedha e shportës, email-e porosish dhe një konfigurim administratori që është i lehtë për t’u menaxhuar.",
        
        // Metrics
        key_metrics: "Treguesit Kryesorë të Projekteve",
        metrics_title_part1: "Sukses i Matshëm nga",
        metrics_title_part2: "Dizajni i Mençur.",
        metrics_desc: "Një përmbledhje e rezultateve të performancës dhe ndikimit të fluksit të punës të arritura përmes strategjisë së shkallëzueshme UX dhe zhvillimit të menduar web.",
        metric1: "projekte të realizuara",
        metric2: "Review Mesatare nga Përdoruesit",
        metric3: "Përmirësim i Normës së Konvertimit",
        metric4: "Orë të Kursyera për Projekt",
        
        // Footer
        get_in_touch: "Na Kontaktoni",
        footer_title_part1: "Jemi Këtu për të Të",
        footer_title_part2: "Ndihmuar të Kesh Sukses.",
        contact_me_title: "Na Kontakto",
        full_name: "Emri i plotë *",
        email_address: "Adresa email *",
        phone_number: "Numri i telefonit *",
        subject: "Subjekti *",
        your_message: "Mesazhi juaj *",
        privacy_policy: "Duke dorëzuar këtë formular, pajtohem me politikën e privatësisë.",
        send_message: "Dërgo Mesazh",
        copyright: "© devbyland. Të gjitha të drejtat e rezervuara."
    },
    en: {
        // Navigation
        home: "home",
        project: "project",
        services: "services",
        lang: "Language",
        
        // Home section
        available: "available for collaboration !",
        web_dev_part1: "Web Developing &",
        web_dev_part2: "FullStack Developers.",
        home_desc: "We design and develop high-end web experiences for design-driven companies that value attention to detail.",
        contact_me: "contact Us",
        
        // Tech section
        tech_stack: "Our Tech Stack",
        tech_desc: "We work with modern technologies to build fast, scalable and user-friendly web applications. From frontend development to backend architecture and databases, I focus on clean code and performance.",
        
        // Featured projects
        featured_projects: "featured projects",
        creativity_part1: "showing creativity",
        creativity_part2: "and precision.",
        featured_desc: "A curated selection of UX and web builds that highlight problem-solving, design strategy, and full-stack agility across diverse industries and audiences.",
        project1_title: "Adaptive E-Commerce Framework",
        project1_desc: "Responsive shopping experience with dynamic filters, modular components, and clean UI.",
        project2_title: "SaaS Dashboard Interface System",
        project2_desc: "build a scalable interface with custom charts, microinteractions, and dark/light mode.",
        project3_title: "Mobile-First Portfolio Grid",
        project3_desc: "designed a grid layout optimized for mobile scroll behavior, media-heavy perfomance",
        project4_title: "Restaurant Booking UX Flow",
        project4_desc: "streamlined table booking with user flows, calendar sync, and feedback microcopy.",
        all_projects: "all projects",
        
        // Services
        my_services: "Our services",
        services_title_part1: "Elevate Your Online",
        services_title_part2: "Presence with us",
        services_desc: "Crafting User-Centric Websites and Applications for Seamless Digital Experiences.",
        service1_title: "Website Design and Development",
        service1_desc: "Custom website design and development tailored to your brand and business needs.",
        service2_title: "User Research and Analysis",
        service2_desc: "Conduct user research to understand your target audience, their needs, and behaviors.",
        service3_title: "UI/UX Design",
        service3_desc: "Design user interfaces (UI) that are visually appealing and in line with your brand identity.",
        service4_title: "Full-Stack Development",
        service4_desc: "Ensure cross-browser compatibility and accessibility standards are met.",
        service5_title: "Maintenance & Support",
        service5_desc: "Updates, fixes, backups, monitoring, and ongoing improvements. Your site stays secure, fast, and reliable long after launch.",
        service6_title: "E-commerce Stores That Sell",
        service6_desc: "Modern product pages + smooth checkout. Stripe payments, cart flows, order emails, and an admin setup that's easy to manage.",
        
        // Metrics
        key_metrics: "Key Project Metrics",
        metrics_title_part1: "Measurable Success",
        metrics_title_part2: "From Smart Design.",
        metrics_desc: "A snapshot of performance outcomes and workflow impact achieved through scalable UX strategy and thoughtful web development.",
        metric1: "projects delivered",
        metric2: "Average User Satisfaction",
        metric3: "Conversion Rate Improvement",
        metric4: "Time Saved Per Project",
        
        // Footer
        get_in_touch: "Get In Touch",
        footer_title_part1: "We're Here To Help",
        footer_title_part2: "You Succeed.",
        contact_me_title: "Contact Me",
        full_name: "Full name *",
        email_address: "Email address *",
        phone_number: "Phone number *",
        subject: "Subject *",
        your_message: "Your message *",
        privacy_policy: "By submitting this form, I agree to the privacy policy.",
        send_message: "Send Message",
        copyright: "© devbyland. All rights reserved."
    }
};

//LANGUAGE FUNCTIONS 
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    updateDropdownLabel(lang);
    translatePage(lang);
}

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

function updateDropdownLabel(lang) {
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        const flag = lang === 'sq' ? '' : '';
        const langText = lang === 'sq' ? 'Alb' : 'Eng';
        dropdown.innerHTML = ` ${flag} ${langText}`;
    }
}

//DROPDOWN SETUP 
let closeDropdownHandler = null;

function setupDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (!dropdown || !dropdownToggle) return;
    
    // Heq event listeners të vjetër duke zëvendësuar elementin
    const newDropdownToggle = dropdownToggle.cloneNode(true);
    dropdownToggle.parentNode.replaceChild(newDropdownToggle, dropdownToggle);
    
    if (window.innerWidth <= 768) {
        // Mobile: klik për toggle
        newDropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        
        // Mbyll dropdown-in kur klikon jashtë
        if (closeDropdownHandler) {
            document.removeEventListener('click', closeDropdownHandler);
        }
        
        closeDropdownHandler = function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        };
        
        document.addEventListener('click', closeDropdownHandler);
    } else {
        // Desktop: hover
        dropdown.classList.remove('active');
        if (closeDropdownHandler) {
            document.removeEventListener('click', closeDropdownHandler);
            closeDropdownHandler = null;
        }
    }
}



// COUNTER ANIMATION 
function initCounters() {
    const counters = document.querySelectorAll(".project-card h2");
    
    counters.forEach(counter => {
        // Ruaj vlerën origjinale
        const originalText = counter.innerText;
        const target = parseInt(originalText.replace(/\D/g, ''));
        
        if (isNaN(target)) return;
        
        let count = 0;
        const increment = target / 100;
        const hasPlus = originalText.includes('+');
        
        const updateCounter = () => {
            count += increment;
            if (count >= target) {
                counter.innerText = hasPlus ? target + "+" : target;
                clearInterval(interval);
            } else {
                counter.innerText = Math.floor(count);
            }
        };
        
        const interval = setInterval(updateCounter, 20);
    });
}

//  REVEAL ANIMATIONS 
function checkReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

//INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    // Gjuha
    const savedLang = localStorage.getItem('language') || 'en';
    changeLanguage(savedLang);
    
    // Elementet
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.navbari');
    const dropdown = document.querySelector('.dropdown');
    
    // Menu Toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            if (!navMenu.classList.contains('active') && dropdown) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    // Mbyll menunë kur klikon në link
    const navLinks = document.querySelectorAll('.nav-bar a:not(.dropdown-toggle a)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        });
    });
    
    // Setup dropdown
    setupDropdown();
    
    // Handle resize
    window.addEventListener('resize', function() {
        setupDropdown();
        
        if (window.innerWidth > 768) {
            if (navMenu) navMenu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            if (dropdown) dropdown.classList.remove('active');
        }
    });
    
    // Nis counters pas pak kohe që të shfaqen
    setTimeout(initCounters, 500);
});

  (function() {
        const form = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        form.addEventListener('submit', async function(e) {
            // Parandalojmë dërgimin klasik (që shkakton rifreskim ose ridrejtim)
            e.preventDefault();

            // Mbledhim të dhënat e formës
            const formData = new FormData(form);

            // Shtojmë një fushë _gotcha për të shmangur spam-in (Formspree e përdor)
            // Nëse nuk e dëshiron, mund ta heqësh, por Formspree rekomandon.
            formData.append('_gotcha', '');

            try {
                // Dërgojmë të dhënat te Formspree
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Sukses
                    formMessage.style.display = 'block';
                    formMessage.style.color = '#28a745'; // jeshile
                    formMessage.innerText = 'Thank You! Your message was sent with success.';
                    form.reset(); // pastron formën
                } else {
                    // Gabim nga serveri
                    const data = await response.json();
                    if (data.errors) {
                        formMessage.style.display = 'block';
                        formMessage.style.color = '#dc3545'; // kuqe
                        formMessage.innerText = data.errors.map(error => error.message).join(', ');
                    } else {
                        throw new Error('Problem në dërgim');
                    }
                }
            } catch (error) {
                // Gabim në rrjet ose tjetër
                formMessage.style.display = 'block';
                formMessage.style.color = '#dc3545';
                formMessage.innerText = 'Ndodhi një gabim. Provo përsëri më vonë.';
            }
        });
    })();

//  SCROLL EFFECTS 
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Reveal animations on scroll
window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);


// ==================== BACK TO TOP BUTTON ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - setting up back to top button');
    
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) {
        console.error('Back to top button not found!');
        return;
    }
    
    console.log('Back to top button found');
    
    // Shfaq/fshih button-in bazuar në scroll
    window.addEventListener('scroll', function() {
        console.log('Scroll position:', window.scrollY);
        
        if (window.scrollY > 300) {
            console.log('Adding show class');
            backToTopButton.classList.add('show');
        } else {
            console.log('Removing show class');
            backToTopButton.classList.remove('show');
        }
    });
    
    // Klikimi për të shkuar te navigacioni
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Button clicked - scrolling to top');
        
        // Shko te navigacioni (navbar)
        const navbar = document.getElementById('navbar');
        
        if (navbar) {
            console.log('Navbar found, scrolling to it');
            
            const navbarPosition = navbar.offsetTop;
            
            window.scrollTo({
                top: navbarPosition,
                behavior: 'smooth'
            });
        } else {
            console.log('Navbar not found, scrolling to top');
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
    
    // Testo nëse button-i është klikues
    backToTopButton.addEventListener('click', function() {
        console.log('Button clicked (second listener)');
    });
});

// Smooth scroll për butonin contact me
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('#contactBtn');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const footer = document.getElementById('footer');
            
            if (footer) {
                // Llogarit pozicionin duke marrë parasysh navbar-in
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const footerPosition = footer.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: footerPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

//ANIMATION
const elements = document.querySelectorAll(".fadeinleft");
const elements1 = document.querySelectorAll(".fade-in");
const elements2 = document.querySelectorAll(".fadeinright");
const elements3 = document.querySelectorAll(".fadeindown");
const elements4 = document.querySelectorAll(".fadeinup");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-left");
    }
  });
};
const callbacks1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
const callbacks2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-right");
    }
  });
};
const callbacks3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-down");
    }
  });
};
const callbacks4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-up");
    }
  });
};
let observer = new IntersectionObserver(callbacks, options);
let observer1 = new IntersectionObserver(callbacks1, options);
let observer2 = new IntersectionObserver(callbacks2, options);
let observer3 = new IntersectionObserver(callbacks3, options);
let observer4 = new IntersectionObserver(callbacks4, options);
elements.forEach((elements) => {
  observer.observe(elements);
});
elements1.forEach((elements1) => {
  observer1.observe(elements1);
});
elements2.forEach((elements2) => {
  observer2.observe(elements2);
});
elements3.forEach((elements3) => {
  observer3.observe(elements3);
});
elements4.forEach((elements4) => {
  observer4.observe(elements4);
});



$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  });