window.addEventListener('resize', e => {
    console.log((e.target as Window).screen.availWidth);
});

const header = document.querySelector('header') as HTMLHeadElement;

document.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
})