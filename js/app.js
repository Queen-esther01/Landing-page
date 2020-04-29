/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list')
let lists = navbar.children
let allSections = document.getElementsByTagName('section')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
for (let sections of allSections){
    let sectionId = sections.id
    let createList = document.createElement('li');
    let createLink = document.createElement('a');
    let headingTexts = sections.firstElementChild.firstElementChild.textContent;
    createLink.textContent = headingTexts;
    createLink.setAttribute('href',`#` + sectionId);
    createList.append(createLink)
    navbar.append(createList);
    console.log(sectionId)
}


for (let list of lists){
    list.style.cssText = 'padding: 8px; font-weight: bold'
    list.classList.add('menu__link')
    console.log(list)
}
console.log(navbar.children)


// Scroll to section on link click

// Set sections as active
const windowWidth = window.innerWidth;
const windowheight = window.innerHeight;
const fallbackWidth = document.documentElement.clientWidth;
const fallbackHeight = document.documentElement.clientHeight;
const sectionOne = document.getElementById('section1');

window.addEventListener('scroll', listenForScroll = () =>{
    for(section of allSections){
        const sectionBounding = section.getBoundingClientRect();
        if(sectionBounding.top >= 0 &&
           sectionBounding.left >= 0 &&
           sectionBounding.right <= (windowWidth || fallbackWidth) &&
           sectionBounding.bottom >= (windowheight || fallbackHeight)){
            section.classList.add('your-active-class');
            section.style.cssText = 'border: 1px solid white; box-shadow: 0.5px 14px 14px 10px grey'
            console.log(section)
        }
        else{
            console.log('failed')
            section.classList.remove('your-active-class');
            section.style.cssText = 'border: none'
        }
    }
})


