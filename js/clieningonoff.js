let searchActive1 = document.querySelector('header > div:nth-of-type(2) input');
let headerDiv1 = searchActive1.parentElement;
// searchActive1.onclick = function () {
//         headerDiv1.classList.toggle('search-active');
// }

let loginSidePage = document.querySelector('.loginSidePage');
let loginIcon = document.querySelector('header > div:nth-of-type(2) svg');
let loginSidePageA = document.querySelector('.loginSidePage ul > li:nth-of-type(4) > a');


loginIcon.addEventListener('click', () => {
    loginSidePage.classList.add('loginActive');
})
loginSidePageA.addEventListener('click', () => {
    loginSidePage.classList.remove('loginActive');
})

let keepLabelactive = document.querySelector('.loginSidePage > div:nth-of-type(2) > div:nth-of-type(1)');
keepLabelactive.addEventListener('click', function(e) {

    if (e.target.classList.contains('keepLabelactive')) {
        keepLabelactive.classList.remove('keepLabelactive');
        
    }else {
        keepLabelactive.classList.add('keepLabelactive');

    }
})

let switchBtnactive = document.querySelector('.switch-btn');

switchBtnactive.addEventListener('click', (e) => {
    if (e.target.classList.contains('switch-btnactive')) {

        switchBtnactive.classList.remove('switch-btnactive');
    } else {

        switchBtnactive.classList.add('switch-btnactive');
    }
});

let loginBtn = document.querySelector('.loginDiv > a');
let idvlaue = '';
let pwvalue = '';
let headerP = document.querySelector('header > div:nth-of-type(2) > p');
let sidebarDiv = document.querySelector('.side-bar > div');
let headerBtn = document.querySelector('header > div:nth-of-type(2) > p > a >button');



id.addEventListener('change', function (e) {
    idvlaue += e.target.value;

});

pw.addEventListener('change', function (e) {
    pwvalue += e.target.value;


})

loginBtn.onclick = function (e) {
    e.preventDefault();
    if (idvlaue === 'test' && pwvalue === '1234'){
        loginSidePage.classList.remove('loginActive');
        loginIcon.style = 'display: none';
        headerP.style = 'dispaly: block';
        sidebarDiv.style= 'dispaly: block';
    }

}
headerBtn.onclick = function (e) {
    e.preventDefault();
    
    loginIcon.style = 'display: block';
    headerP.style = 'display: none';
    sidebarDiv.style= 'display: none';
}
