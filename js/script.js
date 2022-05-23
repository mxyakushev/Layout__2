const actionHello = document.querySelector('.action-hello')
const actionAbout = document.querySelector('.action-about')
const actionProjects = document.querySelector('.action-projects')
const actionContact = document.querySelector('.action-contact')

const helloPage = document.querySelector('.hello-page');
const aboutPage = document.querySelector('.about-page');
const projectsPage = document.querySelector('.projects-page');
const contactPage = document.querySelector('.contact-page');

const helloPageMobile = document.querySelector('.hello-page-mobile');
const aboutPageMobile = document.querySelector('.about-page-mobile');
const projectsPageMobile = document.querySelector('.projects-page-mobile');
const contactPageMobile = document.querySelector('.contact-page-mobile');

const professionalIcon = document.querySelector('.professional-icon__about');
const personalIcon = document.querySelector('.personal-icon__about');
const hobbiesIcon = document.querySelector('.hobbies-icon__about');

const personalLink = document.querySelector('.personal-link-menu__about');
const contactLink1 = document.querySelector('.contact-link-menu__about');
const menuListPersonal = document.querySelector('.menu-list__personal');
const menuListContact = document.querySelector('.menu-list__contact');

const menuLink1Personal = document.querySelector('.menu-li1__personal');
const menuLink2Personal = document.querySelector('.menu-li2__personal');
const menuLink3Personal = document.querySelector('.menu-li3__personal');
const menuArrow1Personal = document.querySelector('.menu-arrow1__personal');
const menuArrow2Personal = document.querySelector('.menu-arrow2__personal');
const menuArrow3Personal = document.querySelector('.menu-arrow3__personal');

const projectsLink = document.querySelector('.headline-page__projects');
const checkBoxProjects = document.querySelector('.checkbox__projects');

const contactLink2 = document.querySelector('.headline-page__contact');
const menuLink1Contact2 = document.querySelector('.menu-li1__contact2');
const menuLink2Contact2 = document.querySelector('.menu-li2__contact2');
const menuListContact2 = document.querySelector('.menu-list__contact2');

const findLink = document.querySelector('.find-page__contact');
const findList = document.querySelector('.find-list__contact');

const reactInput = document.querySelector('.react-input');
const htmlInput = document.querySelector('.html-input');
const cssInput = document.querySelector('.css-input');
const vueInput = document.querySelector('.vue-input');
const angularInput = document.querySelector('.angular-input');
const gatsbyInput = document.querySelector('.gatsby-input');
const flutterInput = document.querySelector('.flutter-input');

const reactLabel = document.querySelector('.react-label');
const htmlLabel = document.querySelector('.html-label');
const cssLabel = document.querySelector('.css-label');
const vueLabel = document.querySelector('.vue-label');
const angularLabel = document.querySelector('.angular-label');
const gatsbyLabel = document.querySelector('.gatsby-label');
const flutterLabel = document.querySelector('.flutter-label');

const reactWrapper = document.querySelector('.react-wrapper');

const reactProjects = document.querySelectorAll('.react-project');
const htmlProjects = document.querySelectorAll('.html-project');


const educationList = document.querySelector('.education-list');

const menuLink1Contact = document.querySelector('.menu-li1__contact');
const menuLink2Contact = document.querySelector('.menu-li2__contact');

const persSpan = document.querySelector('#pers');
const contSpan = document.querySelector('#cont');
const projSpan = document.querySelector('#proj');
const contSpan2 = document.querySelector('#cont2');
const findSpan = document.querySelector('#find');

const submitButton = document.querySelector('.submit-button');
const formWrapper = document.querySelector('.form-wrapper');
const answerWrapper = document.querySelector('.answer-wrapper');
const newMessage = document.querySelector('.new-message');

const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const messageInput = document.querySelector('#textarea-input');

const menuBurgerButton = document.querySelector('.menu-burger');
const navigation = document.querySelector('.navigation')
const footer = document.querySelector('.footer');

const content = document.querySelector('.content');

const main = document.querySelector('.main');

const actionArr = [actionHello.classList, actionAbout.classList, actionProjects.classList, actionContact.classList];
const actionArrFilter = actionArr.filter(el=>{
    el.contains('show');
})
if(actionArrFilter.length == 0){
    active(helloPage);
    inactive([aboutPage, projectsPage, contactPage]);
    show(actionHello);
    hide([actionAbout, actionProjects, actionContact]);
}


function pageCheck(){
    if(helloPage.classList.contains(sessionStorage.getItem('page-condition'))){
        active(helloPage);
        inactive([aboutPage, projectsPage, contactPage]);
        show(actionHello);
        hide([actionAbout, actionProjects, actionContact]);
    }
    if(helloPageMobile.classList.contains(sessionStorage.getItem('page-condition'))){
        active(helloPageMobile);
        inactive([aboutPageMobile, projectsPageMobile, contactPageMobile]);
        show(actionHello);
        hide([actionAbout, actionProjects, actionContact]);
    }
    if(aboutPage.classList.contains(sessionStorage.getItem('page-condition'))){
        active(aboutPage);
        inactive([helloPage, projectsPage, contactPage]);
        show(actionAbout);
        hide([actionHello, actionProjects, actionContact]);
    }
    if(aboutPageMobile.classList.contains(sessionStorage.getItem('page-condition'))){
        active(aboutPageMobile);
        inactive([helloPageMobile, projectsPageMobile, contactPageMobile]);
        show(actionAbout);
        hide([actionHello, actionProjects, actionContact]);
    }
    if(projectsPage.classList.contains(sessionStorage.getItem('page-condition'))){
        active(projectsPage);
        inactive([aboutPage, helloPage, contactPage]);
        show(actionProjects);
        hide([actionAbout, actionHello, actionContact]);
    }
    if(projectsPageMobile.classList.contains(sessionStorage.getItem('page-condition'))){
        active(projectsPageMobile);
        inactive([aboutPageMobile, helloPageMobile, contactPageMobile]);
        show(actionProjects);
        hide([actionAbout, actionHello, actionContact]);
    }
    if(contactPage.classList.contains(sessionStorage.getItem('page-condition'))){
        active(contactPage);
        inactive([aboutPage, projectsPage, helloPage]);
        show(actionContact);
        hide([actionAbout, actionProjects, actionHello]);
    }
    if(contactPageMobile.classList.contains(sessionStorage.getItem('page-condition'))){
        active(contactPageMobile);
        inactive([aboutPageMobile, projectsPageMobile, helloPageMobile]);
        show(actionContact);
        hide([actionAbout, actionProjects, actionHello]);
    }
}

pageCheck();

if(submitButton.classList.contains(sessionStorage.getItem('submitted'))){
    formWrapper.classList.remove('answer-show');
    answerWrapper.classList.add('answer-show');
}
if(newMessage.classList.contains(sessionStorage.getItem('submitted'))){
    formWrapper.classList.add('answer-show');
    answerWrapper.classList.remove('answer-show');
}

menuBurgerButton.addEventListener('click', ()=>{
    navigation.classList.toggle('show-burger-menu');
    menuBurgerButton.classList.toggle('burger-animation');
    footer.classList.toggle('show-footer');
    main.classList.toggle('overflow-main');
    content.classList.toggle('content-height')
})

submitButton.addEventListener('click', (e)=>{
    formWrapper.classList.toggle('answer-show');
    answerWrapper.classList.toggle('answer-show');
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(messageInput.value);
    if(nameInput.value == '' || emailInput.value == '' || messageInput.value == ''){
        formWrapper.classList.toggle('answer-show');
        answerWrapper.classList.toggle('answer-show');
        sessionStorage.setItem('submitted', newMessage.className);
        e.preventDefault();
    }
    else{
        sessionStorage.setItem('submitted', submitButton.className);
    }
})

newMessage.addEventListener('click', ()=>{
    formWrapper.classList.toggle('answer-show');
    answerWrapper.classList.toggle('answer-show');
    sessionStorage.setItem('submitted', newMessage.className);
})

reactInput.addEventListener('click', ()=>{
    reactLabel.classList.toggle('checked');
    reactProjects.forEach(project =>{
        project.classList.toggle('project-show');
    })
})
htmlInput.addEventListener('click', ()=>{
    htmlLabel.classList.toggle('checked');
    htmlProjects.forEach(project =>{
        project.classList.toggle('project-show');
    })
})
cssInput.addEventListener('click', ()=>{
    cssLabel.classList.toggle('checked');
})
vueInput.addEventListener('click', ()=>{
    vueLabel.classList.toggle('checked');
})
angularInput.addEventListener('click', ()=>{
    angularLabel.classList.toggle('checked');
})
gatsbyInput.addEventListener('click', ()=>{
    gatsbyLabel.classList.toggle('checked');
})
flutterInput.addEventListener('click', ()=>{
    flutterLabel.classList.toggle('checked');
})

menuLink1Personal.addEventListener('click', ()=>{
    menuArrow1Personal.classList.toggle('rotate-arrow');
});
menuLink2Personal.addEventListener('click', ()=>{
    menuArrow2Personal.classList.toggle('rotate-arrow');
});
menuLink3Personal.addEventListener('click', ()=>{
    educationList.classList.toggle('menu-show');
    menuArrow3Personal.classList.toggle('rotate-arrow');
});

findLink.addEventListener('click',()=>{
    findList.classList.toggle('menu-show');
    findSpan.classList.toggle('rotate');
})

personalLink.addEventListener('click', ()=>{
    menuListPersonal.classList.toggle('menu-show');
    persSpan.classList.toggle('rotate');
});
contactLink1.addEventListener('click', ()=>{
    menuListContact.classList.toggle('menu-show');
    contSpan.classList.toggle('rotate');
});
contactLink2.addEventListener('click', ()=>{
    menuListContact2.classList.toggle('menu-show');
    contSpan2.classList.toggle('rotate');
});
projectsLink.addEventListener('click', ()=>{
    checkBoxProjects.classList.toggle('menu-show');
    projSpan.classList.toggle('rotate');
});

professionalIcon.addEventListener('click', ()=>{
    activeIcon(professionalIcon);
    inactiveIcon([personalIcon, hobbiesIcon]);
});
personalIcon.addEventListener('click', ()=>{
    activeIcon(personalIcon);
    inactiveIcon([professionalIcon, hobbiesIcon]);
});
hobbiesIcon.addEventListener('click', ()=>{
    activeIcon(hobbiesIcon);
    inactiveIcon([professionalIcon, personalIcon]);
});

helloPage.addEventListener('click', (e)=>{
    sessionStorage.setItem('page-condition', e.target.parentNode.className);
    active(helloPage);
    inactive([aboutPage, projectsPage, contactPage]);
    show(actionHello);
    hide([actionAbout, actionProjects, actionContact]);
    if(navigation.classList.contains('show-burger-menu')){
        navigation.classList.toggle('show-burger-menu');
        menuBurgerButton.classList.toggle('burger-animation');
        footer.classList.toggle('show-footer');
        main.classList.toggle('overflow-main');
        content.classList.toggle('content-height')
    }
});
helloPageMobile.addEventListener('click', (e)=>{
    sessionStorage.setItem('page-condition', e.target.parentNode.className);
    active(helloPageMobile);
    inactive([aboutPageMobile, projectsPageMobile, contactPageMobile]);
    show(actionHello);
    hide([actionAbout, actionProjects, actionContact]);
    if(navigation.classList.contains('show-burger-menu')){
        navigation.classList.toggle('show-burger-menu');
        menuBurgerButton.classList.toggle('burger-animation');
        footer.classList.toggle('show-footer');
        main.classList.toggle('overflow-main');
        content.classList.toggle('content-height')
    }
});
aboutPage.addEventListener('click', (e)=>{
    sessionStorage.setItem('page-condition', e.target.parentNode.className);
    active(aboutPage);
    inactive([helloPage, projectsPage, contactPage]);
    show(actionAbout);
    hide([actionHello, actionProjects, actionContact]);
    if(navigation.classList.contains('show-burger-menu')){
        navigation.classList.toggle('show-burger-menu');
        menuBurgerButton.classList.toggle('burger-animation');
        footer.classList.toggle('show-footer');
        main.classList.toggle('overflow-main');
        content.classList.toggle('content-height')
    }
});
aboutPageMobile.addEventListener('click', (e)=>{
    sessionStorage.setItem('page-condition', e.target.parentNode.className);
    active(aboutPageMobile);
    inactive([helloPageMobile, projectsPageMobile, contactPageMobile]);
    show(actionAbout);
    hide([actionHello, actionProjects, actionContact]);
    if(navigation.classList.contains('show-burger-menu')){
        navigation.classList.toggle('show-burger-menu');
        menuBurgerButton.classList.toggle('burger-animation');
        footer.classList.toggle('show-footer');
        main.classList.toggle('overflow-main');
        content.classList.toggle('content-height')
    }
});
projectsPage.addEventListener('click', (e)=>{
    sessionStorage.setItem('page-condition', e.target.parentNode.className);
    active(projectsPage);
    inactive([aboutPage, helloPage, contactPage]);
    show(actionProjects);
    hide([actionAbout, actionHello, actionContact]);
    if(navigation.classList.contains('show-burger-menu')){
        navigation.classList.toggle('show-burger-menu');
        menuBurgerButton.classList.toggle('burger-animation');
        footer.classList.toggle('show-footer');
        main.classList.toggle('overflow-main');
        content.classList.toggle('content-height')
    }
});
projectsPageMobile.addEventListener('click', (e)=>{
    sessionStorage.setItem('page-condition', e.target.parentNode.className);
    active(projectsPageMobile);
    inactive([aboutPageMobile, helloPageMobile, contactPageMobile]);
    show(actionProjects);
    hide([actionAbout, actionHello, actionContact]);
    if(navigation.classList.contains('show-burger-menu')){
        navigation.classList.toggle('show-burger-menu');
        menuBurgerButton.classList.toggle('burger-animation');
        footer.classList.toggle('show-footer');
        main.classList.toggle('overflow-main');
        content.classList.toggle('content-height')
    }
});
contactPage.addEventListener('click', (e)=>{
    sessionStorage.setItem('page-condition', e.target.parentNode.className);
    active(contactPage);
    inactive([aboutPage, projectsPage, helloPage]);
    show(actionContact);
    hide([actionAbout, actionProjects, actionHello]);
    if(navigation.classList.contains('show-burger-menu')){
        navigation.classList.toggle('show-burger-menu');
        menuBurgerButton.classList.toggle('burger-animation');
        footer.classList.toggle('show-footer');
        main.classList.toggle('overflow-main');
        content.classList.toggle('content-height')
    }
});
contactPageMobile.addEventListener('click', (e)=>{
    sessionStorage.setItem('page-condition', e.target.parentNode.className);
    active(contactPageMobile);
    inactive([aboutPageMobile, projectsPageMobile, helloPageMobile]);
    show(actionContact);
    hide([actionAbout, actionProjects, actionHello]);
    if(navigation.classList.contains('show-burger-menu')){
        navigation.classList.toggle('show-burger-menu');
        menuBurgerButton.classList.toggle('burger-animation');
        footer.classList.toggle('show-footer');
        main.classList.toggle('overflow-main');
        content.classList.toggle('content-height')
    }
});


function activeIcon(icon){
    icon.classList.add('active-icon');
}
function inactiveIcon(icons){
    icons.forEach((icon)=>{
        icon.classList.remove('active-icon');
    })
}

function active(page){
    page.classList.add('active');
}

function inactive(arr){
    arr.forEach((page) => {
        page.classList.remove('active');
    })
}

function show(wrapper){
    wrapper.classList.add('show');
}

function hide(arr){
    arr.forEach((wrapper) => {
        wrapper.classList.remove('show');
    })
}

