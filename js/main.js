const navButton = document.querySelector('.nav__button');
const navMenu = document.querySelector('.nav__container');
const tabButttons = document.querySelectorAll('.features__tab');
const linkDesayuno = document.querySelector('a[href="#desayuno"]');
const linkProceso = document.querySelector('a[href="#proceso"]');
const linkNosotros = document.querySelector('a[href="#nosotros"]');
const linkContacto = document.querySelector('a[href="#about"]');
const desayunoSection = document.getElementById("desayuno");
const cotizacionSection = document.getElementById("cotiz");
const nosotrosSection = document.getElementById("presentacion");
const contactoSection = document.getElementById("cont");

linkContacto.addEventListener('click', () => {
    contactoSection.scrollIntoView({ behavior: 'smooth' });
});

linkDesayuno.addEventListener('click', () => {
    desayunoSection.scrollIntoView({ behavior: 'smooth' });
});

  
linkProceso.addEventListener('click', () => {
    cotizacionSection.scrollIntoView({ behavior: 'smooth' });
});

linkNosotros.addEventListener('click', () => {
    nosotrosSection.scrollIntoView({ behavior: 'smooth' });
});



navButton.addEventListener('click', ()=>{
    
    const navLogo = document.querySelector('.nav__logo');

    navMenu.classList.toggle('nav__container--active');

    if(navMenu.classList.contains('nav__container--active')){

        navLogo.setAttribute('src', './images/logo-bookmark-white.svg');
        navButton.setAttribute('src', '././images/icon-close.svg');

    }else{

        navLogo.setAttribute('src', './images/logo-bookmark.svg');
        navButton.setAttribute('src', '././images/icon-hamburger.svg');

    }

});

const removeActiveElements = (selector)=>{
    const elementsActive = document.querySelectorAll(`.${selector}`);

    if(elementsActive.length){

        elementsActive.forEach(elementActive =>{
            elementActive.classList.remove(selector);
        });

    }
}

tabButttons.forEach(tabButton =>{
    tabButton.addEventListener('click', (e)=>{
        e.preventDefault();

        if(!tabButton.classList.contains('features__tab--active')){
            
            const articleNumber = tabButton.getAttribute('data-article');

            const articleShow = document.querySelector(`.features__article:nth-of-type(${articleNumber})`);

            console.log(articleNumber);

            removeActiveElements('features__article--active');
            removeActiveElements('features__tab--active');


            articleShow.classList.add('features__article--active');
            tabButton.classList.add('features__tab--active');

        }
    })
});



