// hamburger menu
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    setTimeout(() => {
        sidebar.style.transform = "translateX(0)";
    }, 10);
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = "translateX(100%)";
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 300);
}

// banner slider
const bannerSlider = new Swiper('.banner-slider', {
    loop: false,
    speed: 1000,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});

// card

// Sample JSON data
const jsonData = [
    {
        "title": "Top 20",
        "description": "Ranked among the best global universities.",
        "image": "./assets/images/card-img.png"
    },
    {
        "title": "Top 10",
        "description": "Globally for graduate employability.",
        "image": "./assets/images/card-img.png"
    },
    {
        "title": "95%",
        "description": "Of graduates are employed or in further study 15 months after graduation.",
        "image": "./assets/images/card-img.png"
    }
];

const container = document.getElementById('card-container');

// Loop JSON and create cards
jsonData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card-wrap');

    card.innerHTML = `
       <div class="card"><img src="${item.image}" alt="${item.title}"></div>
        <div class="card-content">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
      `;
    container.appendChild(card);
});

// Why Choose Aberdeen
const jsonDatabox = [
    {
        "title": "UK Degree in India",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
        "image": "./assets/images/card-1.png"
    },
    {
        "title": "UK Degree in India",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
        "image": "./assets/images/card-1.png"
    },
    {
        "title": "UK Degree in India",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
        "image": "./assets/images/card-1.png"
    },
    {
        "title": "UK Degree in India",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
        "image": "./assets/images/card-1.png"
    },
    {
        "title": "UK Degree in India",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
        "image": "./assets/images/card-1.png"
    },
    {
        "title": "UK Degree in India",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
        "image": "./assets/images/card-1.png"
    }
];

const containerwhychoose = document.getElementById('why-choose-card');

// Loop JSON and create cards
jsonDatabox.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card-wrap-box');

    card.innerHTML = `
       <div class="card"><img src="${item.image}" alt="${item.title}"></div>
        <div class="card-content">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
      `;
    containerwhychoose.appendChild(card);
});

// our-programmes

const ourprogrammesDatabox = [
    {
        "title": "Undergraduate Programmes",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
        "image": "./assets/images/Programmes-1.png"
    },
    {
        "title": "Postgraduate Programmes",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
        "image": "./assets/images/Programmes-2.png"
    }
];


const containerurprogramme = document.getElementById('our-programmes-container');

// Loop JSON and create cards
ourprogrammesDatabox.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card-wrap-box');

    card.innerHTML = `
       <div class="card"><img src="${item.image}" alt="${item.title}"></div>
        <div class="card-content">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <a href="#" class="see-more-btn">
            <span>See More</span>
            <span class="arrow-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path d="M17.1094 8.51562L10.8594 14.7656C10.3906 15.2734 9.57031 15.2734 9.10156 14.7656C8.59375 14.2969 8.59375 13.4766 9.10156 13.0078L13.2031 8.86719H1.25C0.546875 8.86719 0 8.32031 0 7.61719C0 6.95312 0.546875 6.36719 1.25 6.36719H13.2031L9.10156 2.26562C8.59375 1.79688 8.59375 0.976562 9.10156 0.507812C9.57031 0 10.3906 0 10.8594 0.507812L17.1094 6.75781C17.6172 7.22656 17.6172 8.04688 17.1094 8.51562Z" fill="#FBCB3B"></path>
              </svg>
            </span>
         </a>
        </div>
      `;
    containerurprogramme.appendChild(card);
});

// Students Life at Aberdeen
const LifejsonDatabox = [
    {
        "title": "Global Scholars Program",
        "description": "The Global Scholars Program supports students through financial aid, mentorship, and a global alumni network.",
        "image": "./assets/images/card-img.png"
    },
    {
        "title": "Global Scholars Program",
        "description": "The Global Scholars Program supports students through financial aid, mentorship, and a global alumni network.",
        "image": "./assets/images/card-1.png"
    },
    {
        "title": "Global Scholars Program",
        "description": "The Global Scholars Program supports students through financial aid, mentorship, and a global alumni network.",
        "image": "./assets/images/Scholars.png"
    },
    {
        "title": "Global Scholars Program",
        "description": "The Global Scholars Program supports students through financial aid, mentorship, and a global alumni network.",
        "image": "./assets/images/Programmes-1.png"
    }
];

const containerLife = document.getElementById('Life-card');

// Loop JSON and create cards
LifejsonDatabox.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card-wrap-box');

    card.innerHTML = `
       <div class="card"><img src="${item.image}" alt="${item.title}"></div>
        <div class="card-content">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
      `;
    containerLife.appendChild(card);
});

// scrool top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});