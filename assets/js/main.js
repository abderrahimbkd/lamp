/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close');

    //   *****MENU SHOW******
    // ***VALIDATE IF CONSTANT EXISTS***

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

        //   *****MENU HIDDEN******
    // ***VALIDATE IF CONSTANT EXISTS***

    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
      });
    }


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav--link');

const linkAction = () => {

    const navMenu = document.getElementById('nav-menu')

    // ****When we click on each nav--link , we remove the show-menu*****
    
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click' , linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader= () => {
    const header = document.getElementById('header')

    // ***When the scroll is greater than 50 viewport height , add the bg-header class to the header tag****


    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')

}

window.addEventListener('scroll' , scrollHeader)


/*=============== SWIPER POPULAR ===============*/

const popularSwiper = new Swiper(".popular--content", {
  // Optional parameters
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  brealpoints:{
    768: {
        centeredSlides: false,
    }
  }
});


/*=============== CHOOSE FAQ ===============*/

const faqItems = document.querySelectorAll('.choose--faq-item')

    // **** 1- select each item ****

faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.choose--faq-header')

    // **** 2- select each button ****
    faqHeader.addEventListener('click', ()=>{

        // ***7- Select the current faq-open class ****

        const openItem = document.querySelectorAll('faq-open')
        
        // *** 5- Call the ToggleItem Function *****

        toggleItem(item)

        // ****8- Remove the faq-open class from other items ****

        if(openItem && openItem != item){
            toggleItem(openItem)
        }
    })
})

//    **** 3- Create function to display the content ****

const toggleItem = (item) => {

    // ***** 3.1-Select each faq content****

    const faqContent = item.querySelector('.choose--faq-content')

    // **** 6-If the same item contains the faq-open class, remove****

    if(item.classList.contains('faq-open')){

        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    }
    else {

      // ***** 4.1 Add max-height to the content and add the faq-open class *****

      faqContent.style.height = faqContent.scrollHeight + "px";

      item.classList.add("faq-open");
    }


} 



/*=============== SHOW SCROLL UP ===============*/ 

const scroolUp = () => {
    const scroolUp = document.getElementById('scroll-up')

    // ****when the scroll is higher than 350vh add scrool-show to the tag with the scrollup class****

    this.scrollY >= 350
      ? scroolUp.classList.add("show-scroll")
      : scroolUp.classList.remove("show-scroll");
}
window.addEventListener('scroll', scroolUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive =() => {

    const scrollY =window.pageYOffset

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight,
              sectionTop=current.offsetTop - 58 ,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelectorAll('.nav--menu a[href*=' + sectionId +']')

              if(scrollY > sectionTop  &&  scrollY <= sectionTop + sectionHeight){

                sectionClass.classList.add('active-link')

              }else{

                sectionClass.classList.remove("active-link");

              }
    })

}
/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button');
const darkTheme=   'dark-theme'
const iconTheme = 'ri-sun-line'
    
    // ****** Previously selected topic (if user selected)****

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // *** we obtain the current theme that the interface has by validating the dark-theme class********

    const getcurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getcurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    //    *****  we validate if the user previously chose the topic ***

    if(selectedTheme){

        // ***if the validation is fulfilled we ask what the issue was to know if we activated or desactivated th dark ****

        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }

    // ****activate / desactivate the theme manually with the button ***
    themeButton.addEventListener('click', () => {

        // ****add or remove the dark / icon them****

        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        // *** we save the theme and the current icon that user choose***

        localStorage.setItem('selected-theme', getcurrentTheme())
        localStorage.setItem('selected-icon', getcurrentIcon())

    }) 

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({

    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true/// animations repeat
})

sr.reveal(`.home--content, .popular--container,.products--container,.join--bg,.footer-container`)
sr.reveal(`.home--image`, {origin:'bottom'})
sr.reveal(`.choose--image , .features--image`,  {origin:'left'})
sr.reveal(`.choose--content,.features--content`, { origin: "right" });