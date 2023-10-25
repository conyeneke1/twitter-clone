// DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
// const signButton = document.querySelector('.sign-up');
// const loginButton = document.querySelector('.log-in');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const feedsPage = document.querySelector('.feeds-page');
const loginFormButton = document.querySelector('.login-form-button');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const postButton = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const postModalBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebarX = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

/*********************************** */
/*********************************** */

// Main Page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

// signButton.onclick = goToLoginPage;
// loginButton.onclick = goToLoginPage;

middleContent.addEventListener('click', (e) => {
    if(e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    }
});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if(inputUserInfo.value !== "" && inputPassword.value !== "") {
        mainPage.style.display = 'none';
        feedsPage.style.display = 'grid';   
    } else {
        goToLoginPage();
        loginModal.style.display = 'block';
    }
});


// Login page
modalX.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

loginFormButton.addEventListener('click', () => {
    const loginUsername = document.querySelector('.login-username');
    const loginPassword = document.querySelector('.login-password');

    if(loginUsername.value !== "" && loginPassword.value !== "") {
        loginPage.style.display = "none";
        feedsPage.style.display = "grid";
    } else {
        loginModal.style.display = 'block';
    }
})

// Post button
postButton.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
})

postModalX.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if(modalInput.value !== "") {
        modalInput.value = "";
        changeOpacity(0.5);
    }
})

const changeOpacity = (x) => {
    postModalBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}

modalInput.addEventListener('keypress', (e) => {
    if(modalInput !== "") {
        changeOpacity(1);
    }
})

modalInput.addEventListener('blur', (e) => {
    if(e.target.value === "") {
        changeOpacity(0.5);
    }
})

// sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
});

sidebarX.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})

//Dark mode
const DarkElements1 = document.querySelectorAll('.dark-mode-1');
const DarkElements2 = document.querySelectorAll('.dark-mode-2');
const light = document.querySelectorAll('.light');
const lightTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

 toggle.addEventListener('click', () => {
     circle.classList.toggle('move');
     Array.from(DarkElements1).map((darkEl1) => darkEl1.classList.toggle('dark-1'));

     Array.from(DarkElements2).map((darkEl2) => darkEl2.classList.toggle('dark-2'));

     Array.from(lightTexts).map((lightText) => lightText.classList.toggle('light'));
     
     Array.from(borders).map((border) => border.classList.toggle('border-color'));
 })
