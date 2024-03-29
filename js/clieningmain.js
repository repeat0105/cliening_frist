 //화면에 뿌려줌 json 조정

fetch('./data.json')
.then((res) => res.json())
.then((data) => {

        $('.main > div').html('');
        let tag = `
        <article class="mainTitle">
            <div><span>클리아닝</span></div>
            <div>
                <p><a href="./board.html">게시판</a></p>
                <p><a href="./suggestion.html">추천글</a></p>
            </div>
        </article>
        `;

        data.mainjson.forEach(function (a,i) {
            
            tag += `
                <div>
                    <a href="./review.html"; >
                        <img src=${a.imgUp} width="340px;" height="270px" >
                        <div class="mainHoverBefor">
                            <span class="mainSpan">${a.title}</span>
                            <p class="mainP">${a.contentUp}</p>
                        </div>
                    </a>
                </div>`
        })

        $('.main > div').append(tag);

        const maindivA2 = document.querySelectorAll('.main a');
            
        let imgNum = localStorage.imgnum || 0;
        let lecturetitleUp = localStorage.lecturetitleUp || 0;
        maindivA2.forEach((a, i ) => {
            a.onclick = () => {
                localStorage.idNum = i ;
                localStorage.lecturetitleUp = a.children[1].children[0].innerHTML;
            }
        });
    }
)
        let sidebarSpan = document.querySelectorAll('.side-bar a');  
        let clienSideNum ;
        sidebarSpan.forEach((a) => {
            a.onclick = function () {
                
                clienSideNum= localStorage.setItem('clienSideNum', a.textContent.trim().substring(0,4))
            }
        });

        // 날짜 
        function aaadate(){         
            let maindiv = document.querySelector('.mainSpan');
            
            var today = new Date();
    
            var year = today.getFullYear();
            var month = ('0' + (today.getMonth() + 1)).slice(-2);
            var day = ('0' + today.getDate()).slice(-2);
    
            var dateString = year + '-' + month  + '-' + day;
            var newtoday = new Date(year,month,(Number(day) +1));
    
            var hours = today.getHours(); 
            var minutes = ('0' + today.getMinutes()).slice(-2);
            var seconds = ('0' + today.getSeconds()).slice(-2); 

            var timeString = hours + ':' + minutes  + ':' + seconds;
    
            var timeGap =newtoday.getTime() - today.getTime();

            if(hours > 22){
                maindiv.innerText = dateString + ' 유료강의 후기';
            }
        }

let searchActive = document.querySelector('header > div:nth-of-type(2) input');
let headerDiv = searchActive.parentElement;
let headerA = document.querySelector('header > div:nth-of-type(2) a');

let headerInput = document.querySelector('header >div:nth-of-type(2) >div:nth-of-type(1)');
let headerAtow = document.querySelector('header > div:nth-of-type(2) a')
let loginIcontest = document.querySelector('header > div:nth-of-type(2) svg');
let labelsearch = document.querySelector('#labelsearch');

let ipadpc = matchMedia("(min-width:481px)");
let mobile = matchMedia("(max-width:480px)");

let deviceName = ``;

mobile.addListener(deviece);
ipadpc.addListener(deviece);

function deviece(e) {
    if(e.matches) {
        if( e.media.match('480')) {deviceName = 'mobile'}
        if( e.media.match('481')) {deviceName = 'ipadpc'}
    }
}
deviece(ipadpc);
deviece(mobile);

//모바일시 검색창 나오게

labelsearch.onclick = function () {
    if (deviceName === 'mobile') {
        headerInput.classList.remove('search-active');            
        headerInput.classList.toggle('headerserch');
        loginIcontest.style.display = 'none';    
    }
}

headerAtow.onclick = function () {
    if (deviceName === 'mobile') {
        headerInput.classList.remove('search-active');            
        headerInput.classList.toggle('headerserch');
        loginIcontest.style.display = 'block';    
    }
}

searchActive.onclick = function () {
    if (deviceName === 'ipadpc') {
        headerDiv.classList.toggle('search-active');
        
    }
}


// 햄버거
let headerHam = document.querySelector('header >div:nth-of-type(1) > a')
let sidebaractive = document.querySelector('.side-bar');
headerHam.addEventListener('click', function () {
    sidebaractive.classList.toggle('active');
    
})
