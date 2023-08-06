const menuHamburguer = document.getElementById('menu-btn');
const menuList = document.getElementById('nav');

menuHamburguer.addEventListener('click', ()=>{
    menuList.classList.toggle('close');
})

const images = document.querySelectorAll('.animation')

function triggerAnimation(entries) {
    entries.forEach(entry => {
        const image = entry.target.querySelector('img');

        image.classList.toggle('unset', entry.isIntersecting );
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

const observer = new IntersectionObserver( triggerAnimation, options );

images.forEach( image =>{
observer.observe(image)

})

// Scroll Reveal Animation

const sr = ScrollReveal({
    distance:'60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.hero__text, .hero__title, .section__title`, {delay: 300})
sr.reveal(`.hero__img`, { delay: 900, origin: 'top'});
sr.reveal(`.spec__text, .descount__text`, { origin: 'left', interval: 100 });
sr.reveal(`.spec__img, .descount__img`, { origin: 'right', interval: 100 });
sr.reveal(`.case__img`, { origin: 'top', interval: 200 });
sr.reveal(`.case__text`);
sr.reveal(`.product__card, .footer__effect`, { origin: 'top', interval: 100 })
sr.reveal(`.footer__name`, { origin: 'top', interval: 200 })






