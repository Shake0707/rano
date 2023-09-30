const header = document.querySelector('header') as HTMLHeadElement;

document.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        header.style.maxHeight = '0';
        header.style.transition = 'max-height 0.20s ease-out;';
    } else {
        header.style.maxHeight = '200px';
        header.style.transition = 'max-height 0.20s ease-in';
    }
})