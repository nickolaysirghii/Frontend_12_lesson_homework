
let namesOfTheClasses = ['.one','.two','.three','.four','.five','.six','.seven','.eigth','.nine','.ten'];
let    nameOfTheId    = ['one','two','three','four','five','six','seven','eigth','nine','ten'];
for(let i =0 ; i<namesOfTheClasses.length ; i++){
    let classes = document.querySelector(namesOfTheClasses[i]);
    classes.addEventListener('click',function(){classes.setAttribute('class',nameOfTheId[i]);
    let win = document.querySelector('.down');
    win.setAttribute('id',nameOfTheId[i]);
    
});
};


