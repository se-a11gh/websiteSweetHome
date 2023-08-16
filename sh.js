
// Вывод цен от и до -----------------------------------------------//
let outPrice = document.querySelector(".outPrice");
let rangePrice = document.querySelector(".rangePrice");
rangePrice.oninput = function(){
    outPrice.value = this.value++;
}
let outPrice2 = document.querySelector(".outPrice2");
let rangePrice2 = document.querySelector(".rangePrice2");
rangePrice2.oninput = function(){
    outPrice2.value = this.value;
}





let res = document.querySelector('#city');
let formBtnSearch = document.querySelector('.formBtnSearch');
let distr = document.querySelector('#distr');

let rangeData = document.querySelector('.rangePrice');
let rangeData2 = document.querySelector('.rangePrice2');
let radio1 = document.querySelector('.sh1');
let radio2 = document.querySelector('.sh2');

formBtnSearch.addEventListener('click',()=>{

let radio = document.querySelectorAll('.rad_1');
for(let i = 0; i < radio.length; i++){
    if(radio[i].checked){
        f = radio[i].value;
        break;
    }
}
    alert(`Вы выбрали: \n Город:  ${res.value } \n Район:  ${distr.value} \n Цена от:  ${rangeData.value} \n Цена до:  ${rangeData2.value} \n Тип:  ${f} `);
});









$(function(){

// Подсчет покупателей -----------------------------------------------//
function timer_call(){
    let $min = 2357;
    let $timerId = setInterval(function goTimer() {
        $min++;
        $(".timerSec").text(`${$min} людей`);
        if($min >= 2500){
            clearInterval($timerId);
            $(".timerSec").text("2500 людей !");
            $(".newText").text('ЗНАЙШЛИ СВОЄ ЖИТЛО !');
        }
    },100); 
}
timer_call();
});








// Слайдер ------------------------------------------------------//
let img_Block_line = document.querySelector(".img_Block_line");

let posRadio = 0;
function abc(){
posRadio = posRadio - 100.5;
img_Block_line.style.marginLeft = posRadio + "%";
if(posRadio < -200){
  posRadio = 100.5;
}
}
setInterval(abc, 3500);





// боковое меню --------------------------------------------------------------------------//
let element_body = document.querySelector('body');
let asideMenu = document.querySelector("#asideMenu");
let btnMenu = document.querySelector(".btnMenu");
let btn_closeM = document.querySelector(".btnCloseMenu");
btnMenu.addEventListener('click', function(){
    element_body.classList.toggle('page_lock');
    asideMenu.style.display = "flex";
});
btn_closeM.addEventListener('click', function(){
    element_body.classList.toggle('page_lock');
    asideMenu.style.display = "none";
});



// listDown -----------------------------------------------------//
let listServise = document.querySelectorAll(".listJS_Up");
listServise.forEach((i)=>{
    let wrapListServ = document.querySelectorAll(".wrapListJS");
    i.addEventListener("click", ()=>{
        const sosed = i.nextElementSibling;
        sosed.style.cssText = `
        height: 80px;
        padding: 10px;
        `;
    });
    wrapListServ.forEach((w)=>{
        w.addEventListener('mouseleave', ()=>{
            const sosed = i.nextElementSibling;
            sosed.style.cssText = `
            height: 0px;
            padding: 0px;
            `;
        });
    });
});







let btnList = document.querySelectorAll(".btnList");
btnList.forEach((i)=>{
    let block_list_btn = document.querySelectorAll(".block_list_btn");
    i.addEventListener("click", ()=>{
        const sosed = i.parentElement;
        sosed.style.cssText = `
        height: 200px;
        `;
    });
    block_list_btn.forEach((w)=>{
        w.addEventListener('mouseleave', ()=>{
            const sosed = i.parentElement;
            sosed.style.cssText = `
            height: 50px;
            `;
        });
    });
});














// listDown_footer -----------------------------------------------------//
let footDown = document.querySelectorAll(".footDown");
footDown.forEach((i)=>{
    i.addEventListener("click", ()=>{
        const q = i.nextElementSibling;
        q.classList.toggle('listfootDOP');
    });
});






// Switch_Day -----------------------------------------------------//
let xElem = document.documentElement;
let xElem2 = document.querySelector(".Block_1");
let switchDay = document.querySelector(".switchDay");
let dayCircle = document.querySelector(".dayCircle");
function rec(){
dayCircle.addEventListener('click',()=>{  
    dayCircle.style.cssText = `
    left: 23px;
    background-color: #888888;
    `;
    switchDay.style.background = "#15204B";
    xElem.classList.toggle('dTheme');
    xElem2.style.background = "#03254b";

    dayCircle.addEventListener('click',()=>{
        dayCircle.style.cssText = `
        left: 0px;
        background-color: #fd8434;
        `;
        switchDay.style.background = "#FDD134";
        xElem2.style.background = "#2E6EB9";
        xElem.classList.remove('dTheme');
        rec();
    });});}
rec();


















