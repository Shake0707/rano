const sectionMain = document.querySelector('.section-main') as HTMLDivElement;
sectionMain.style.height = window.innerHeight + 'px';

const particleFrame = document.querySelector('.particles') as HTMLDivElement;
particleFrame.style.width = window.innerWidth + 'px';
particleFrame.style.height = window.innerHeight + 'px';

window.addEventListener('resize', e => {
    console.log((e.target as Window).screen.availWidth);
});

const header = document.querySelectorAll('header') as NodeListOf<HTMLDivElement>;

header.forEach(item => {
    document.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
})

const inMobileNav = document.querySelector('.inMobile_nav-frame') as HTMLDivElement;
const burgerBtn = document.querySelector('.burger_btn') as HTMLButtonElement;
const removeMenuBtn = document.querySelector('.removeMenu_btn') as HTMLButtonElement;

document.body.addEventListener('click', e => {
    if ((e.target as Element).classList.contains('inMobile_nav-frame')){
        inMobileNav.classList.remove('active')
    }
})

burgerBtn.addEventListener('click', () => {
    inMobileNav.classList.add('active');
});

removeMenuBtn.addEventListener('click', () => {
    inMobileNav.classList.remove('active');
});

const navItemLinks = document.querySelectorAll('.nav-item a');

navItemLinks.forEach(item => item.addEventListener('click', () => {
    inMobileNav.classList.remove('active');
}))