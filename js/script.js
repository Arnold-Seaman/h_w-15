function getRndInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min) ;
}

// Ввод имени и возраста
alert('Добро пожаловать незнакомец!')
var name = prompt('Как вас зовут?', 'Саня'), age = (prompt('Сколько вам лет?', '19'));
console.log('Вы ' + name + ', вам ' + age + ' лет');
var message = (age > 18) ? alert('Здравствуйте, давайте поиграем!') : (age < 19) ? alert('Привет, го играть!') : alert('Ошибка');

// Вычитание
var firstInt = getRndInt(10, 20);
var secondInt = getRndInt(1, 10);
var answer = firstInt - secondInt;
var input = prompt('Сколько будет: '+firstInt+' - '+secondInt+' ?');
var result = (answer == input) ? alert('Угадали!') : alert('Неправильно!');
console.log(firstInt +' - '+ secondInt +' = '+ answer +' (Ваш ответ '+ input +')');

// Сложение
var firstInt = getRndInt(10, 20);
var secondInt = getRndInt(1, 10);
var answer = firstInt + secondInt;
var input = prompt('Сколько будет: '+firstInt+' + '+secondInt+' ?');
var result = (answer == input) ? alert('Угадали!') : alert('Неправильно!');
console.log(firstInt +' + '+ secondInt +' = '+ answer +' (Ваш ответ '+ input +')');

// Умножение
var firstInt = getRndInt(1, 5);
var secondInt = getRndInt(1, 5);
var answer = firstInt * secondInt;
var input = prompt('Сколько будет: '+firstInt+' * '+secondInt+' ?');
var result = (answer == input) ? alert('Угадали!') : alert('Неправильно!');
console.log(firstInt +' * '+ secondInt +' = '+ answer +' (Ваш ответ '+ input +')');

// Деление
var firstInt = getRndInt(1, 20);
var secondInt = getRndInt(2, 3);
var answer = firstInt / secondInt;
answerRound = Math.round(answer);
var input = prompt('Сколько будет: '+firstInt+' / '+secondInt+' ?' + ' (Округлите до целого числа: 5.4 = 5; 5.5 = 6)');
var result = (answerRound == input) ? alert('Угадали!') : alert('Неправильно!');
console.log(firstInt +' / '+ secondInt +' = '+ answer + ' (это примерно ' + answerRound + ')' +' (Ваш ответ '+ input +')');

// Деление с остатком
var firstInt = getRndInt(1, 20);
var secondInt = getRndInt(1, 3);
var answer = firstInt % secondInt;
var input = prompt('Сколько будет: '+firstInt+' /% '+secondInt+' ?');
var result = (answer == input) ? alert('Угадали!') : alert('Неправильно!');
console.log(firstInt +' / (с остатком) '+ secondInt +' = '+ answer +' (Ваш ответ '+ input +')');

// b - задание, среднее арифметическое число
alert('Находим среднее арифметическое число')
var X, Y, Z, res;
X = +prompt('Введите первое число');
Y = +prompt('Введите второе число');
Z = +prompt('Введите третье число');
res = (X + Y + Z) / 3;
alert('Cреднее арифметическое число: ' + res);
