//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var level = 'a';

var answers = [];

showMenu('a');
saveAnswer('a');

switch (event) {
    case 1: {
        showMenu('b');
        saveAnswer('b');
        switch (event) {
        case 1: 
        case 2: {
            showMenu('d');
            saveAnswer('d');
        } break;
        case -1: break;
        default:alert('Ошибка');break;
        }
     } break; 
    case 2: {
        showMenu('c');
        saveAnswer('c');
         switch (event) {
            case 1: 
            case 2: {
                showMenu('d');
                saveAnswer('d');
            } break;
            case -1: break;
            default: alert('Ошибка'); break;
        }
    } break;
    case -1: break;
    default:alert('Ошибка'); break;
 } 
alert('Спасибо за игру');

let num = prompt("Введите номер вопроса");
alert("Вопрос:" + answers[num].question +"\n" + "Ваш ответ:" + answers[num].answer);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function showMenu(level) {
    do {
        ok = false;
        let values = [level+"00",level+"0",level+"1",level+"2"];
        for (value of values) {
        console.log(value);
        }
        event = +prompt(works[values[0]] + works[values[2]] + works[values[3]] + '-1 - Выход из игры'); //event - 'это номер ответа'
        
        if (event == -1) { //выход из игры
        break;
        }
        else {
        ok = isAnswer(works[values[1]], event); //проверка адекватности введенного номера
        }
    } while (!ok);
} 
function saveAnswer (level) {
    let currentAnswer = {
    question: works[level+"00"],
    answer:works[level+event]
    }

    answers.push(currentAnswer);
}



