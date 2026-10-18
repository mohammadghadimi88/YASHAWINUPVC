// فعال‌سازی انیمیشن‌های صفحه (AOS)
AOS.init({
    duration: 1000,
    once: true
});

// منوی همبرگری موبایل
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// بستن منو با کلیک روی لینک‌ها در حالت موبایل
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// فرم تماس (جلوگیری از ارسال پیش‌فرض و نمایش پیام موفقیت)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('پیام شما با موفقیت ارسال شد!');
    contactForm.reset();
});
