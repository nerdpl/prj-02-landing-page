// Global Variables
const listOfSections = document.getElementsByTagName('section');

// Function creates menu items based on HTML elements with a tag 'section'.
function buildMenu () {
    const navMenu = document.getElementById('navbar__list');
    for (let i = 0; i < listOfSections.length; i++) {
        let item = listOfSections.item(i);
        // creates menu items as an unordered list
        let newMenuElement = document.createElement('li');
        // adds menu item name from the 'data-nav' attribute
        newMenuElement.textContent = listOfSections.item(i).dataset.nav; 
        // adds class and ID to enable CSS style
        newMenuElement.className = 'menu__link';
        newMenuElement.id = 'option' + (i + 1);
        navMenu.appendChild(newMenuElement);
    }
}

/* Function listens to the event 'scroll' and when one of the sections gets close to the top of the screen,
   it gets marked as 'active' also marking a corresponding menu option as 'active'. */
function setActive () {
    window.addEventListener('scroll', function(pos) {
        // sets a var with current window Y position
        let lastPos = window.scrollY;
        for (let i = 1; i <= listOfSections.length; i++) {
            // checks the distance between the sections and current window Y position
            if (((document.getElementById('section' + i).offsetTop - lastPos) > 0) && ((document.getElementById('section' + i).offsetTop - lastPos) < 250)) {
                // sets the section close to the window position as 'active' 
                document.getElementsByClassName('your-active-class').item(0).className = '';
                document.getElementById('section' + i).className = 'your-active-class';
                // sets corresponding menu item as 'active'
                if (document.getElementsByClassName('menu__active').length > 0) {
                    document.getElementsByClassName('menu__active').item(0).className = 'menu__link';
                }
                document.getElementById('option' + i).className = 'menu__link menu__active';
            }
        }
    });
}

/* Function listens to the event 'click' in the menu sections, then checks which option was clicked,
   and then scrolls to the offset top of that item. Iy also marks clicked option as 'active'. */
function scroll () {
    document.querySelector('#navbar__list').addEventListener('click', function (click) {
        // check which menu option was clicked
        for (let i = 1; i <= listOfSections.length; i++) {
            if (click.target.id == 'option' + i) {
                window.scrollTo(0, document.getElementById('section' + i).offsetTop - document.getElementById('navbar__list').offsetHeight);
                // mark clicked menu option as 'active' 
                if (document.getElementsByClassName('menu__active').length > 0) {
                    document.getElementsByClassName('menu__active').item(0).className = 'menu__link';
                }
                document.getElementById('option' + i).className = 'menu__link menu__active';
            }
        }
    });
}

// Build menu 
buildMenu();

// Scroll to section on link click
scroll();

// Set sections as active
setActive();

