let btn_1 = document.getElementById('btn_1');
let btn_2 = document.getElementById('btn_2');
let btn_3 = document.getElementById('btn_3');
let btn_4 = document.getElementById('btn_4');
let btn_5 = document.getElementById('btn_5');
let btn_6 = document.getElementById('btn_6');
let btn_7 = document.getElementById('btn_7');
let btn_8 = document.getElementById('btn_8');

let img_1 = document.getElementById('img_1')
let img_2 = document.getElementById('img_2')
let img_3 = document.getElementById('img_3')
let img_4 = document.getElementById('img_4')
let img_5 = document.getElementById('img_5')
let img_6 = document.getElementById('img_6')
let img_7 = document.getElementById('img_7')
let img_8 = document.getElementById('img_8')

let activ_btn = document.getElementsByClassName('activ_btn')
let activ = document.getElementsByClassName('activ')

btn_1.addEventListener('click', ()=>{
    btn_1.classList.add('activ_btn')
    btn_2.classList.remove('activ_btn')

    img_1.classList.add('activ')
    img_2.classList.remove('activ')
});

btn_2.addEventListener('click', ()=>{
    btn_1.classList.remove('activ_btn')
    btn_2.classList.add('activ_btn')

    img_1.classList.remove('activ')
    img_2.classList.add('activ')
});

btn_3.addEventListener('click', ()=>{
    btn_3.classList.add('activ_btn')
    btn_4.classList.remove('activ_btn')

    img_3.classList.add('activ')
    img_4.classList.remove('activ')
});

btn_4.addEventListener('click', ()=>{
    btn_3.classList.remove('activ_btn')
    btn_4.classList.add('activ_btn')

    img_3.classList.remove('activ')
    img_4.classList.add('activ')
});

btn_5.addEventListener('click', ()=>{
    btn_5.classList.add('activ_btn')
    btn_6.classList.remove('activ_btn')
    btn_7.classList.remove('activ_btn')
    btn_8.classList.remove('activ_btn')

    img_5.classList.add('activ')
    img_6.classList.remove('activ')
    img_7.classList.remove('activ')
    img_8.classList.remove('activ')
});

btn_6.addEventListener('click', ()=>{
    btn_5.classList.remove('activ_btn')
    btn_6.classList.add('activ_btn')
    btn_7.classList.remove('activ_btn')
    btn_8.classList.remove('activ_btn')

    img_5.classList.remove('activ')
    img_6.classList.add('activ')
    img_7.classList.remove('activ')
    img_8.classList.remove('activ')
});

btn_7.addEventListener('click', ()=>{
    btn_5.classList.remove('activ_btn')
    btn_6.classList.remove('activ_btn')
    btn_7.classList.add('activ_btn')
    btn_8.classList.remove('activ_btn')

    img_5.classList.remove('activ')
    img_6.classList.remove('activ')
    img_7.classList.add('activ')
    img_8.classList.remove('activ')

});

btn_8.addEventListener('click', ()=>{
    btn_5.classList.remove('activ_btn')
    btn_6.classList.remove('activ_btn')
    btn_7.classList.remove('activ_btn')
    btn_8.classList.add('activ_btn')

    img_5.classList.remove('activ')
    img_6.classList.remove('activ')
    img_7.classList.remove('activ')
    img_8.classList.add('activ')
});