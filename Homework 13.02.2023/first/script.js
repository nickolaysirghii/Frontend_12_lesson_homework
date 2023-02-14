// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.



let stringArrow = [
'This is the first string ....1',
'This maybe might be the second string ....2',
'Now we see here the third string ....3',
'And this is the forth ....4',
'We go on and do another string ....5',
'And this will be maybe the last string ....6'];


 for(let i = 0; i < stringArrow.length; i++){
    let paragraph = document.createElement('p');
    document.body.append(paragraph);
    paragraph.innerText = stringArrow[i];
    paragraph.addEventListener('click',function(){paragraph.innerText = "*******************************"});
};