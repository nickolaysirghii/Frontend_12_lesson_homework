// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.

for(let i = 0; i< 10;i++){
    let card = document.createElement('div');
    document.body.append(card);
    card.innerText = i;
};

let card = document.querySelectorAll('div');

for(let i = 0; i< 10; i++){
    card[i].addEventListener('click',function(){card[i].setAttribute('class','active');});
};