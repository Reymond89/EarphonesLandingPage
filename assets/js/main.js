const menuHamburguer = document.getElementById('menu-btn');
const menuList = document.getElementById('nav');
const links = document.querySelectorAll('.link');
const homeSection = document.querySelector('#home');
const specSection = document.querySelector('#spec');
const caseSection = document.querySelector('#case')
const productSection = document.querySelector('#product')


menuHamburguer.addEventListener('click', ()=>{
    menuList.classList.toggle('open');
})


links.forEach( link => link.addEventListener( 'click', ()=>{
    menuList.classList.toggle('open');
    links.forEach( otherlink => otherlink.classList.remove('active'));
    link.classList.add('active');
    menuList.classList.add('open');
    
}) )

function linkAction() {
    const menuList = document.getElementById('nav');
    menuList.classList.toggle('open')
}

links.forEach( link => link.addEventListener( 'click', linkAction) )

function handleClassActive(refSection, idSection) {

 const id = idSection.getAttribute('id')

    // Verifica si la parte superior de la sección está dentro del rango del scroll
if (refSection.top <= window.innerHeight * 0.01 && refSection.bottom >= window.innerHeight * 0.5) {

 links.forEach(element => {
     const href = element.getAttribute('href').slice(1)
     if (href === id ) {
         element.classList.add('active')
     }
 });

} else {
 links.forEach(element => {
    const href = element.getAttribute('href').slice(1)
    if (href === id ) {
 // Remueve la clase activa si la sección está fuera del rango
        element.classList.remove('active')
    }

});

}
}

// Agrega un event listener al evento "scroll"
window.addEventListener('scroll', function() {
    // Obtén la posición de la sección en relación con la ventana
    const refHome = homeSection.getBoundingClientRect();
    const refSpec = specSection.getBoundingClientRect();
    const refCase = caseSection.getBoundingClientRect();
    const refProduct = productSection.getBoundingClientRect();

    handleClassActive( refHome, homeSection )
    handleClassActive( refSpec, specSection )
    handleClassActive( refCase, caseSection )
    handleClassActive( refProduct, productSection )
    
});

    
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






