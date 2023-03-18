import Icon1 from './images/header-banner/icons-todolist.png'
import Icon2 from './images/header-banner/icons-menulogo.png'
import Icon3 from './images/header-banner/john-pogi.png'

const layout = () => {
    headerLayout();
    footerLayout();    
}

const headerLayout = () => {
    const container = document.querySelector('.container');
    const headerBanner = document.createElement('section');
    const hamburger = document.createElement('div');
    const headerTitle = document.createElement('div');
    const darkMode = document.createElement('div');
    
    headerBanner.className = 'header-banner';
    container.appendChild(headerBanner);

    hamburger.setAttribute('class','hamburger-logo');
    headerBanner.appendChild(hamburger);
    headerTitle.setAttribute('class','header-title');
    headerBanner.appendChild(headerTitle);
    darkMode.setAttribute('class','dark-mode');
    headerBanner.appendChild(darkMode);

    const hamburgerIcon = new Image();
    hamburgerIcon.src = Icon2;
    hamburger.appendChild(hamburgerIcon);
    hamburgerIcon.style.width = '30px';
    hamburgerIcon.style.filter = 'brightness(0) invert(1)';
    hamburgerIcon.style.opacity = '0.85';

    const todoIcon = new Image();
    todoIcon.src = Icon1;
    headerTitle.appendChild(todoIcon);

    const headerTitleText = document.createElement('span');
    headerTitleText.innerText = "toDoList";
    headerTitle.appendChild(headerTitleText);

    const profilePic = new Image();
    profilePic.src = Icon3;
    darkMode.appendChild(profilePic);
    profilePic.style.width = '60px'
    profilePic.style.borderRadius = '30px';
}

const footerLayout = () => {
    const container = document.querySelector('.container');
    const footer = document.createElement('section');

    footer.innerText = 'footer';
    footer.className = 'footer'
    container.appendChild(footer);
}

layout();