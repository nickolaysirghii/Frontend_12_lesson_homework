// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.


for(let i = 0; i< 10;i++){
    let card = document.createElement('div');
    document.body.append(card);
    card.innerText = i;
};

let card = document.querySelectorAll('div');

function f1(){   if(card[i].hasAttributes() == false){
    card[i].setAttribute('class','active')
    }else{card[i].removeAttribute('class','active')}};

for(let i = 0; i< 10; i++){
    card[i].addEventListener('click',
        function(){
        if(card[i].hasAttributes()==false)
        {
        card[i].setAttribute('class','active');
        }
        else{card[i].removeAttribute('class','active')};
    });
};
    