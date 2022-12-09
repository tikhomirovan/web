"use strict";
// console.log("третий скрипт");
// let message; //let, const, var
// message = "Hello";
// console.log(message);

// let a = 10; //инсализация значения 
// a = 3.5;
// console.log(a);
// let b, c;
// b = "Строка";
//const week = 7;
// let a = 10;
// console.log(a);
// console.log(typeof a);
// console.log(typeof (a));
// a = 3.5;
// console.log(a);
// console.log(typeof a);
// let str1 = "двойные ковычки";
// let str2 = 'Одинарные ковычки';
// let str3 = `обратные ковычки ${str1}`;
// console.log(str1);
// console.log(str2);
// console.log(str3);
// let firstName = "Sergey";
// alert(`hello, ${firstName}`);
// let a = 365
// let b = "Земля";
// let c =`7 млрд`;
// let d = "Солнце";
// alert(`мы живем на планете ${b},она делает один оборот вокруг ${d} за ${a} дней. Население нашей планеты составляет примерно ${c} человек. `)
//boolen - Логический тип данных
// let a = true;
// console.log(a);
// let b = false;
// console.log(b);
// console.log(typeof(b))
// let res = confirm("значение HTML?");
// if(res){
// alert("Пора учить js");
// }
// else{
// alert("Нужно выучить");
// }

//тип данных
// Number
// String
// Boolean
// undefind
// Null
// Object
// let firsNname = prompt("Ваше Имя:","Ольга");
// // console.log(firsNname);
// alert(`добро пожаловать на сайт ${firsNname} на сайте много интересного`)

// let a = 12;
// let b = 8;
// console.log('+',a + b)
// console.log('-',a - b)
// console.log('*',a * b)
// console.log('/',a / b)
// console.log('%',a % b)
// console.log('**',a ** b)
// let st1 = "Hello";
// let st2 = "World";
// console.log(st1 + " " + st2)
// let c = 23;
// let d = 6;
// console.log(c + d);
// let login = prompt("login", "admin");
// let password = prompt('Password', '123456')
// alert("***данные для входа***\nваш логин: " + login + "\nваш пороль:" + password)
// let st = "\tинструкция:\nДокумент \"script.js\"файлы лежат \rв папке D:\\programs\\script.js";
// alert(st);

// 2 урок
// let a =  parseInt(prompt("введите первое число: ", "2.5"));
// let b = +prompt("введите второе число:", "2.5");
// // a = parseInt(a);
// // b = +b;
// alert("Ссумма:" + (a + b));

// console.log(parseInt(21.84));
// console.log(parseFloat(21.84));
// console.log(parseFloat(21.84454).toFixed(2));
// console.log(Number(21.84454));
// console.log(+"21.84");
// console.log(+true);
// console.log(+false);


//    пример
// let a = prompt("введите число:", 4);
// alert("квадрат числа: " + a ** 2 + "\nКуб: " + a ** 3 + "\nВ четвертой степини: " + a ** 4);

// задание 1

// let num = + prompt("Ведите пятезначное число", "12345");
// let n = num;
// let a, b, c, d, e;
// a = num % 10;
// num = parseInt(num / 10);
// b = num % 10;
// num = parseInt(num / 10);
// c = num % 10;
// num = parseInt(num / 10);
// d = num % 10;
// num = parseInt(num / 10);
// e = num % 10;

// alert("Произведенте цифр " + n + ": " + a*b*c*d*e + "\nСреднее арифмитическое: " + (a+b+c+d+e)/5);

// let a = 0, b = 0;
// ++a;
// console.log(a) //1
// b++;
// console.log(b) //1
// let a = 0, b = 0;
// let c = a++;
// let d = ++b;
// console.log(a)  //1
// console.log(b)  //1
// console.log(c)  //0
// console.log(d)  //1

// let sum = +prompt("Введите первое число :", 5);
// sum += +prompt("Введите Второе число :", 4);
// sum += +prompt("Введите третье  число :", 6);
// console.log(sum)


// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(5 <= 3);
// console.log(5 == 5);
// console.log(5 != 3);
// console.log(5 === '5');
// console.log(5 !== '5');

// // (3>7) ? alert("7"): alert("3")
// let ch = +prompt("Угадайте число от 1 до 10");
// // ch == 7 ? alert("Угадали") : alert("Не угадали");
// let num = 7;
// ch == num ? alert("Угадали") : (ch < num ? alert("Загадонное число больше") : alert("Загадонное число меньше"));


// операторы логического ветвление
/* 
if(условие){
    истина(true)
}
else{
    ложь(false)
}*/
// if(7>3){
//     alert("7")
// }
// else{
//     alert("3")
// }
// alert(+false);
// False - 0, false, "", null, undefined, NaN
// let a = NaN
// if(a){
//     alert(true);
// }


// let a = 12;
// let b = 0;
// if(b != 0){
//     let res = a / b;
//     alert("Результат: " + res);
// }
// else{
//     alert("делить на ноль нельзя")
// }

// let a = 12;
//  let b = 12;
//  if(a > b){
//     alert(a + ">" + b);
//  }
//  if(a < b){
//     alert(a + "<" + b);
//  }
//  if(a = b){
//     alert(a + "=" + b);
//  }


// let d = prompt("введите день недели (чифрами): ")
// if(d == 1){
//     alert("День недели понедельник")
// }
// else if(d == 2){
//     alert("День недели вторник")
// }
// else if(d == 3){
//     alert("День недели среда")
// }
// else if(d == 4){
//     alert("День недели четверг")
// }
// else if(d == 5){
//     alert("День недели пятница")
// }
// else if(d == 6){
//     alert("День недели суббота")
// }
// else if(d == 7){
//     alert("День недели воскресенье")
// }
// else{
//     alert( "токого дня недели нет ")
// }

// if (5 == 5 && 5 > 2) {
//     console.log("true");

// }
// else{
//     console.log("False")
// }

// let age = prompt("Введите возрост: ")
// if(age >= 18 && age < 70){
//     alert("Вы можите получать прова ");
// }
// else{
//     alert("прова не довать ");
// }
// let age = prompt("Введите возрост: ")
// if(age < 18 || age > 70){
//     alert("прова не довать");
// }
// else{
//     alert("Вы можите получать прова  ");
// }


// конструкция выбора swith

// let a = +prompt("Введите число:");
// switch(a){
//     case 1:{
//         alert("код 1");
//     }break;
//     case 2:{
//     alert("код 2");
// }break;
//     case 3:{
//     alert("код 3");
// }break;
//     default:{
//         alert("я таких значений не знаю");
//     }
// }



// let a = +prompt("Введите результат '2 + 2':");
// switch(a){
//     case 3:      
//      alert("не верно");
//     break;
//     case 4:
//     alert("Верно");
// break;
//     case 5:
//     alert("не верно ");
// break;
//     default:
//         alert("я таких значений не знаю");

// }


// let a = +prompt("введите номер месеца");
// let n = null;
// switch(a){
//     case 1: n = "январь"; break;
//     case 2: n = "Февраль"; break;
//     case 3: n = "Март"; break;
//     case 4: n = "апрель"; break;
//     case 5: n = "май"; break;
//     case 6: n = "июнь"; break;
//     case 7: n = "июль"; break;
//     case 8: n = "август"; break;
//     case 9: n = "Сентябрь"; break;
//     case 10: n = "Октябрь"; break;
//     case 11: n = "Ноябрь"; break;
//     case 12: n = "Декабрь"; break;
//     default: n = "такого месеца нет ";
// }

// alert("вы ввели: " + n);


// let operator = prompt("действие +, -, /, *, %");
// let num1 = parseInt(prompt("Введите первое число: "));
// let num2 = parseInt(prompt("Введите второе число: "));

// switch(operator){
//     case "+":
//         alert("Сумма: " + (num1 + num2));
//         break;
//     case "-":
//         alert("Вычетание: " + (num1 - num2));
//         break;
//     case "/":
//         alert("Деление: " + num1 / num2);
//         break;
//     case "*":
//         alert("Умножение: " + num1 * num2);
//         break;
//     case "%":
//         alert("Остаток от деления: " + num1 % num2);
//         break;
//         default:{
//             alert("Я токого оператора не знаю")
//         }
// }


// document.write("<p>текст выведен <br> в окно браузере</p>");
// document.write("<p><img src='1.jpg'></p>");


//Циклы
// цикол do ... while (цикл с постусловием)


// let i = 0;
// do {
//     document.write(" Это номер :" + i + "<br>");
//     i++;
// } while (i < 5);
// итерация - шаг цикла

// let i = 0
// do {
//     document.write(" Квдрат :" + ++i + " равен " +i**2 + "<br>");
//     // i = i + 5;
// } while (i < 8);

// let i = 0;
// while (i < 5) {
//     document.write(" Это номер :" + i + "<br>");
//     i++;
// } 

// программа выводящая четные числа в деопозоне от 1 до 20 (включительно )
// let i = 1;
// while (i <= 20) {
//     if(i % 2 != 0){
//     document.write(i + " ");}
//     i++;
// } 

// let i = 1;
// while (i <= 30) {
//     if (i % 3 ) {
//         document.write(i + " ")
//     }
//     i++
// }

// let start = 5;
// let end = 10;
// let i = start;
// let sum = 0;
// while(i <= end){
//     // document.write(i + "<br>");
//     sum += i;
//     i++;
// }
// document.write("<br>" + sum)

// let i = 3;
// while (i > 0){
//     document.write(i + "<br>");
//     i--
// }


// let a, res = 1
// do{
//     a= +prompt(" введите число ", 10);
//     if(a==0){
//         break;
//     }
//     res *= a
// }while(true);
// alert("Произведение введенных чисел: " + res);

// let i = 0;
// do {
//     if(i == 3){
//         i++;
//         continue;
//     }
//     if(i==6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// } while (i < 10);

// написать программу  вычисляющюю нечетных чисел в 
// let i = 7;
// let res = 1;
// while (i <= 10) {
//     if (i % 2) {
//         document.write(i + " ")
//     }
//     i++
//     res = res * i
// }
// document.write(res)


// let i = 10;
// let b = 30;
// let sum = 1;
// while (i <= b) {

//     if (i % 2)
//         sum *= i;
//     i++;

// }

// document.write("Итог произведения всех нечетных чисел в деопозоне от 10 до 30 =  " + sum)



//  let a, res = 0
//  let i = 0
//  do{
//      a= +prompt(" введите число \nЧтобы закончить введите '0'", 10);
//      if(a==0){
//          break;
//      }
//      res += a
//      i++

//  }while(true);
//  alert("Произведение введенных чисел: " + res / i);



// for(let i = 1; i < 6; i++){
//     document.write(i + " ");
// }

// for(let i = 1; i < 6; i++){
//     if(i==3){
//         continue;
//     }
//     if(i==5){
//         break
//     }
//     document.write(i + " ");
// }

// let start = 5
// let end = 10
// let sum = 0;
// let p = 1;
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
//     else{
//         p*=i
//     }

// }
// document.write("Ссумма четных чисел в деапозоне от  " + start + " do " + end + " = " + sum + "<br>")
// document.write("Произвидение четных чисел в деапозоне от  " + start + " do " + end + " = " + p + "<br>")


// for (let i = 1; i < 6; i++) {
//     document.write(i + " ");
// }

// let ch = 12345;
// let num;
// let sum = 0;
// let p = 1;
// let count = 0

// for (let i = 1; ; i *= 10) {
//     let res = parseInt(ch / i);
//     if (res == 0) {
//         break;
//     }
//     num = res % 10;
//     sum += num;
//     p *= num;
//    count++;
// }
// document.write("Ссумма " + sum + "<br> ");
// document.write("Произведение " + p + "<br> ");
// document.write("Количество " + count+ "<br> ");
// document.write("Среднее" + (sum/count).toFixed(2) + "<br> ");


// for(let i = 0; i < 4; i++){
//     document.write("+++ <br>");
//     for(let j = 0; j < 2; j++){
//         document.write("-- <br>");
//     }
// }
// for(let i = 0; i < 4; i++){
//     document.write(i + "<br>");
//     for(let j = 0; j < 2; j++){
//         document.write( "&nbsp;&nbsp;&nbsp;&nbsp; =>" + j + "<br>");
//     } 
// }



// let tr = prompt("Введите количество строк")
// let td = prompt("Введите количество Столбцов")
// let symbol = prompt("Введите символ: ");
// document.write("<table border = '1'>");
// for(let i = 0; i < tr; i++){
//     document.write("<tr>");
//     for(let j =0; j<td; j++){
//         document.write("<td>" + symbol + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");


//dz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// document.write("<table border = '1' align = 'center' width = '300' height = '300'>");
// for (let i = 1; i < 11; i++) {
//     document.write("<tr align = 'center'>");
//     for (let j = 1; j < 11; j++) {
//         if(i-j%2==0){
//         document.write("<td bgcolor='red'>" + i*j + "</td>");
//     }
//     else{
//         document.write("<td bgcolor='green'>" + i*j + "</td>");
//     }

//     }
//     document.write("</tr>");
// }
// document.write("</table>");
//dz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let arr = [2, 3, 6, 7, 8, 9];
// console.log(arr);
// document.write(arr[3]);

// let arr = [2, 3, 6, 7, 8, 9];
// let arr1 = [2];
// let arr2 = new Array(2, 3, 6, 7, 8, 9)
// let arr3 = new Array(2)

// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let arr = [2, 3, 6, 7, 8, 9];
// document.write(arr + "<br>");
// document.write(arr.length + "<br>");
// arr.length = 3;
// document.write(arr + "<br>");
// arr.length = 6;
// document.write(arr + "<br>");
// arr.length = 0;
// document.write("Пустой масив" + arr + "<br>");

// let arr=[5, 9, -3, -1, 4, -8, 7, 4, -6]
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br>")
// }
// console.table(arr)


// let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         arr[i] = arr[i] * -1;
//     }
//     document.write(arr[i] + "<br>")

// }


// let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6];
// let cum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         cum += arr[i]
//         document.write(arr[i] + "<br>")
//     }


// }
// document.write(cum + "<br>")


// let mas = new Array();
// mas[0] = 15;
// mas[1] = 6;
// mas[2] = 9;
// mas[6] = 10;
// document.write(mas + "<br>")

// let mas = new Array(5);
// for (let i = 0; i < mas.length; i++) {
//     mas[i] = prompt("Введите " + (i + 1) + " Элемент массива:")
// }
// document.write(mas + "<br>")
// for (let i = mas.length - 1; i >= 0; i--) {
//     document.write(mas[i] + " ")
// }



// let arr = [2, 6, 7, "Игорь", 1.5, true];
// console.log(arr);

// let max = [[2,1,1], [6,3,7], [8,5,6]];
// document.write(max[1][2]);
// console.log(max);
// console.table(max);

// let vopros = ["На ноль делить можно?", "Волга вподает в Каспийское море?", "Атмосферное давление увеличеваеться с высотой", "2*2 будет 8?", "дельфин это рыба?", "Мадонна - это настоящие имя певици", "Первая мировая война начелась 1 сентября 1939 года?"];
// let prav_otvet = [false, true, false, false, false, false, false];
// let res = new Array();
// let sum = 0;

// for (let i = 0; i < vopros.length; i++) {
//     let otvet = confirm(vopros[i]);
//     if (otvet == prav_otvet[i]) {
//         res[i] = 10;
//         sum += res[i];
//     }
//     else {
//         res[i] = 0;
//     } 

// }
// // document.write(res + "<br>");
// // document.write(sum)
// document.write("<table border = '1' width = '500'>");
// document.write("<tr>")
// document.write("<th> вопрос </th>")
// document.write("<th> Баллы </th>")
// document.write("</tr>")
// for (let i = 0; i < vopros.length; i++) {
//     document.write("<tr>")
//     document.write("<td>" + vopros[i] + "</td>")
//     document.write("<th>" + res[i] + "</th>")
//     document.write("</tr>")
// }

// document.write("<tr>")
// document.write("<th> Итого </th>")
// document.write("<th>" + sum + "</th>")
// document.write("</tr>")

// document.write("</table>");


// let text_1 = document.getElementById("text_1");
// console.log(text_1);
// console.log(text_1.textContent);

// text_1.textContent = "новое <b>значение</b> ";

// let text2 = document.getElementById("text_2");
// text2.innerHTML="Новое <b>содержимое</b>"


// let res = +prompt("Выберете изоброжение", "1-собака, 2-кот, 3-птица, 4-рыба");
// document.write("<div id= 'image'></div>");
// let img = document.getElementById("image");

// switch(res){
//     case 1:
//         img.innerHTML = "<img src='img/dog.jpg'>";
//         break
//     case 2:
//         img.innerHTML = "<img src='img/cat.jpg'>";
//         break
//     case 3:
//         img.innerHTML = "<img src='img/bird.jpeg'>";
//         break
//     case 4:
//         img.innerHTML = "<img src='img/fish.jpeg'>";
//         break
//         default:
//             alert("Такого изображения нет");
// }


// // let tag = document.getElementsByTagName("p");
// let tag = document.getElementsByTagName("p")[2];
// tag.innerHTML = "hello teg";
// // tag[2].innerHTML = "hello teg";
// tag.style.color = "blue";
// tag.style.fontWeight = "bold";
// tag.style.background = "silver";
// tag.style.padding = "10px 20px";
// tag.id = "test";
// tag.className = "x";


// let q = document.getElementsByClassName("a");
// q[1].style.color = "red"


// document.querySelector(css)
// document.querySelectorAll(css)

// let w = document.querySelector("#text_1");
// console.log(w);
// let r = document.querySelectorAll("#text_1")[0];
// console.log(r);


// let w = document.querySelector("p");
// console.log(w);
// let r = document.querySelectorAll("p")[1];
// console.log(r);

// let w = document.querySelector(".a");
// console.log(w);
// let r = document.querySelectorAll(".a")[1];
// console.log(r);

// let el = document.querySelectorAll("li");
// for(let i=0;i<el.length;i++){
//     el[i].innerHTML += "!!! Фрукты";
// }
// let purple = document.querySelectorAll(".purple li")
// for(let i=0;i<purple.length;i++){
//     purple[i].style.color = "purple"
//     purple[i].innerHTML += "???"

// }
// let red = document.querySelectorAll(".red li")[1]

// red.style.color = "blue"


// let js = ['Нужно','Учить','javaScript'];
// document.write(js + "<br>");

// let a = js.pop()
// document.write(a + "<br>");
// document.write(js + "<br>");
// js.push("javaScript", "!");
// document.write(js + "<br>");
// document.write(js.shift() + "<br>");
// document.write(js + "<br>");
// js.unshift("Почему","нужно")
// document.write(js + "<br>");

// js.splice(0,1);
// document.write(js + "<br>");

// js.splice(0,2,"мы","Изучаем");
// document.write(js + "<br>");

// js.splice(2,0,"Cложный ","Язык");
// document.write(js + "<br>");

// js.splice(-2,0,"но ","очень ","интересный");
// document.write(js + "<br>");

// let st1 = js.join(" ");
// document.write(st1 + "<br>");
//  console.log(js);
//  console.log(st1);

// let st = ["Фомилия","Имя","Отчество"]
// let fio = new Array(3);

// for(let i=0; i<fio.length;i++){
//     fio[i]=prompt("введите данные: ",st[i]);
// }

// let  sr= fio.join(" ");
// document.write(sr + "<br>")
// console.log(fio);

// !!!!!!!!функции!!!!!!!!!!!

//function delaration


// function hello(firstName){
//     alert("Hello, " + firstName + "!");
// }

// hello("Игорь");
// hello("Ирина");


// function test(a, b, c) {
//     alert(a + b + c);
// }
// let n1 = 10, n2 = 20, n3 = 30, m1 = 5, m2 = 2, m3 = 3
// test(n1, n2, n3);
// test(m1, m2, m3);

// function test(a, b, c) {
//     let res =a + b + c;
//     return res;
// }
// let n1 = 10, n2 = 20, n3 = 30;
// let q = test(n1, n2, n3);
// alert("возврощяймое значение " + q)

// function test2(n,m){
//     if(m==0){
//         return "на ноль делить нельзя"

// }
// else{
//     return n/m;
// }
// }
// let a1 = test2(10,2);
// console.log(a1);
// let a2 = test2(10,0);
// console.log(a2);

// function showArrayContent(arrayToShow) {
//     if (arrayToShow.length == 1) {
//         return arrayToShow;
//     }
//     else {
//         let a = arrayToShow.pop()
//         let st = arrayToShow.join(", ")
//         let b = st + " и " + a;
//         return b;

//     }
// }

// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');
// alert(showArrayContent(a));
// alert(showArrayContent(b));
// alert(showArrayContent(c));


//&&&???????
// function showArrayContent(arrayToShow) {
//     if (arrayToShow.length == 1) {
//         return arrayToShow;
//     }
//     else {
//         arrayToShow.splice(-1,0," и ")
//         let b 
//         return b;

//     }
// }

// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');
// alert(showArrayContent(a));
// alert(showArrayContent(b));
// alert(showArrayContent(c));

// function sum1(a,b){
//     return a+ b;
// }
// let sum2 = function(a,b){
//     return a+ b;
// }
// console.log(sum1(2,3));
// console.log(sum2(2,3));

// let kolkop = function (k) {
//     let kop = k;
//     if (k >= 0 && k <= 99) {
//         if (kop >= 11 && kop <= 14) {
//             alert(k + " копеек")
//         }
//         else {
//             kop = kop % 10;
//             if (kop == 1) {
//                 alert(k + " копеекa")
//             }
//             else if (kop >= 2 && kop <= 4) {
//                 alert(k + " копееки")
//             }
//             else {
//                 alert(k + " копеек")
//             }
//         }
//     }
//     else {
//         alert("Вы ввели некоретное значение")
//     }

// }

// let a = +prompt("введите число от 1 до 99")
// kolkop(a)


// (function(){
//     alert("Привет")
// }());
// let a = (function(n){
//     return n*n
// });
//  alert(a(4))


// function test(a, b, c) {
//     let res = a + b + c;
//     return res;
// }
// console.log(test(10, 20, 30));


// let test2 = (a, b, c) => a + b + c;
// console.log(test2(10, 20, 30));


// let test3 = (a, b, c) => {
//     let res = a + b + c;
//     return res;
// }
// console.log(test3(10, 20, 33));

// let hello = n => alert("hello" + n);
// hello(" Irina");

//Math

// document.write(Math.round(7.9) + "<br>");//8
// document.write(Math.floor(7.9) + "<br>");//7
// document.write(Math.ceil(7.1) + "<br>");//8

// (function(){
//     document.write(Math.random() + "<br>");
// }());


// (function(min,max){
//     document.write(Math.floor(Math.random() *( max - min) +min) + "<br>");
// }(2 , 9));

// document.write(Math.floor(Math.random()* 19)+"<br>" )

// document.write(Math.floor(Math.random()* 7 + 2)+"<br>" )
// document.write(Math.floor(Math.random()* 8 + 7)+"<br>" )
// let fn = function(words){
//     return words[Math.floor(Math.random()* words.length)];
// }

// let mas = [ "цикл"," массив","условие","функция"];
// let a = fn(mas);
// document.write(a)


// let a = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// }
// let mas = ["blue", " black", "orange", "red","gold","violet","yellow"];
// let b = a(mas);



// document.write("<div id = 'block'></div>");
// let id = document.getElementById("block");
// id.style.width = "100px";
// id.style.height = "100px";
// id.style.background = b;


// document.write("<div id = 'block'></div>");
// let id = document.getElementById("block");
// id.style.width = "100px";
// id.style.height = "100px";
// careaterColor();


// function careaterColor() {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     id.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
// }

// function hello(name="Незнакомка"){
//   //name = name || "Незнакомка"

//     document.write("Привет " + name+ "!<br>")
// }
// hello("Сергей")
// hello()



// function square(width = 120,height = 100,background = 'green'){
//     document.write("<div id = 'shape'></div>");
//     let sq = document.querySelector("#shape");

//     sq.style.width = width + "px";
//     sq.style.height = height + "px";
//     sq.style.background = background;
// }
// square(200,150, "gold")
// square(300,)
// square( "red")


// function hello(){
//     alert("Привет");
// }
// alert(hello);


// let st1 = "I\'m a JavaScript \"programmer\"";

// document.write(st1 + "<br>")
// // document.write(st1[2] + "<br>");
// // // st1[2] = 'y';
// // st1 = st1[2] + 'y'
// // document.write(st1 + "<br>")
// document.write(st1.length + "<br>")

// //методы строк
// document.write(st1.toUpperCase() + "<br>")
// document.write(st1.toLowerCase() + "<br>")


// let n = prompt("Введите имя","богдан")
// alert(first(n));

// function first(str){
//     let newStr = str[0].toUpperCase();
//     for(let i = 1;i <str.length;i++){
//         newStr += str[i].toLowerCase();
//     }
//     return newStr;
// }

//  let st1 = "I\'m a JavaScript \"programmer\"";


//  let st2 = " Я учу JavaScript. Мне нравиться JavaScript";
//  st1 = st1.concat(st2)
//  document.write(st1 + "<br>")

//  document.write(st1.indexOf("JavaScript")+ "<br>")
//  document.write(st1.indexOf("JavaScript",7)+ "<br>")


// let email;
// do {
//     email = prompt("введите Email")
//     if (email.indexOf("@")== -1){
//         alert("Не коректный Email")
//     }
//     else{
//         break;
//     }
// } while (true);

//  let st1 = "I\'m a JavaScript \"programmer\"";

//  let st1 = "I\'m a JavaScript \"programmer\"";
//  let st2 = " Я учу JavaScript. Мне нравиться JavaScript";
//  st1 = st1.concat(st2)
//  document.write(st1.slice(0,3) + "<br>")



//dz7!!!!!!!!!!!!!!!!

// let m = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// for (let i = 0; i < m.length; i++) {
//     document.write(`<div class = 'block'>${m[i]}</div>`);
//     let c = document.querySelectorAll(".block")[i]
//     Color();
//     c.style.textAlign = "center";
//     c.style.height = "25px"
//     function Color() {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     c.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
// }


// }



// let st1 = "I\'m a JavaScript \"programmer\"";
//  let st2 = " Я учу JavaScript. Мне нравиться JavaScript";
//  st1 = st1.concat(st2)
//  document.write(st1.substring(0,3) + "<br>")
//  let a = st1.split("JavaScript");
//  console.log(a);
//  document.write(a.join("css"))



// let style = prompt("Введите свойство css", "backgraud-color")
// alert(def(style));
// function def(str) {
//     let arr = str.split("-")
//     for (let i = 1; i < arr.length; i++){
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//     }
//         return arr.join("");
// }


// !!!!!!!!!!!!события !!!!!!!!!!!!!!!!!!!!!
// function loadStr(){
//     alert("страница была загруженно")
// }


// let m = document.getElementById("mes")

// function over(){
//     m.style.color = "red";
// }
// function out(){
//     m.style.color = "yellow";
// }
// function chenge(){
//     let id = document.getElementById('h');
//     id.style.color= 'blue'
// }

// function randomBg() {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
// }

// let newimg = document.getElementById('newimg')
// function on(){
//     newimg.src = 'night.png'
// }
// function off(){
//     newimg.src = 'day.png'
// }
// function change(id){
//     id.innerHTML="Новый текст "
// }
// function setColor(color){
//     document.body.style.background = color.className
// }
// let q = document.getElementById("but");
// q.onclick = function(){
//     alert("Спасибо")
// }
// but.onclick = function(){
//     alert("Спасибо")
// }

// let el = document.querySelector("#elem");
// el.addEventListener('click',function(){
//     el.innerHTML = "Новый текст"
// })
// el.addEventListener("contextmenu",function(){
//     el.style.color ="green"
//     el.style.background ="yellow"
// })

// let c = document.querySelector("#ev")
// document.addEventListener('mousemove', function(event){
//     let x =event.clientX ;
//     let y =event.clientY ;
//     c.textContent = "x =" + x + ", y = " + y;
//     c.addEventListener('dblclick', function(event){
//         event.target.style.background = "red"
//     })
// })

// let input = document.querySelector("#but");
// input.addEventListener("click", handle);

// function handle(){
//     alert("Срасибо")
//     input.removeEventListener('click',handle)
// }

// // setTimeout("alert('текст')",3000);
// setTimeout(hello,3000);
// function hello(){
//     alert('текст')
// }


// document.write("<div id = 'dt'>Создание анимированного текста</div>")
// let text = document.querySelector('#dt').innerHTML;
// console.log(text);
// let i = 0

// window.addEventListener('load', animText);
// function animText(){
//     let teg = document.querySelector('#dt');
//     teg.innerHTML = text.substring(0, i);
//     i++;
//     if(i>text.length){
//         i=0
//     }
//     setTimeout(animText,100);
// }

// let d = new Date();
// document.write(d + "<br>")
// document.write(d.toDateString() + "<br>")
// document.write(d.getFullYear() + "<br>")
// document.write(d.getMonth() + "<br>")
// document.write(d.getDate() + "<br>")
// document.write(d.getDay() + "<br>")


// let months = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь',]
// let mas = ['воскресенье','понедельник','вторник','среда','четверг','пятница','ссубота',]
// let d = new Date();
// let fullDate = "Сегодня " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + " " + mas[d.getDay()]
// document.write(fullDate)

// document.write("<input type = 'button' value='Start/Stop'>");
// document.querySelector('input').addEventListener('click', start);
// let act, flag = false
// function start() {
//     if(!flag){
//         act = setInterval(setColor, 1000);
//     }
//     else{

//         clearInterval(act);
//     }
//     flag = !flag

// }

// function setColor() {
//     document.body.style.background = document.body.style.background == "yellow" ? "orange" : "yellow"
// }







// document.write("<div id='text'>Здесь будет отоброжаться текущие время</div>");
// window.addEventListener('load', () => setInterval(time, 1000))
// function time(){
//     let d = new Date();
//     let hour = d.getHours();
//     if(hour<10){
//         hour = "0" + hour
//     }
//     let min = d.getMinutes();
//     if(min<10){
//         min = "0" + min 
//     }
//     let sec = d.getSeconds();
//     if(sec<10){
//         sec = "0" + sec 
//     }
//     let tim = hour + ":" + min + ":" + sec;
//     document.querySelector("#text").innerHTML = tim

// }


/////////!!!!!!!!!!!!!!!!!dz!!!!!!!!!!!!!!!!
// let a = document.querySelector("#cl");
// a.addEventListener("click", myMove);

// function myMove() {
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 5);

//     function frame() {
//         if (pos == 350) {
//             clearInterval(id)
//             a.addEventListener("click", myMove);
//             //  a.style.display = "block"

//         }
//         else {
//            a.removeEventListener("click", myMove);
//             //  a.style.display = "none"
//             pos++
//             elem.style.top = pos + "px"
//             elem.style.left = pos + "px"

//         }

//     }
// }
//!!!!!!!!!!!!!!!!!!!1dz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// document.image.border = 1;
// document.image.width = 200
// document.image.height = 50
// document.write("<br>Ширина изоброжения: " + document.image.width + "px")
// document.write("<br>Высота изоброжения: " + document.image.height + "px<br>")
// document.image.src = "blue_star.png"

// document.image.addEventListener("click", cImage);
// let flag = 0;
// function cImage() {
//     if (flag == 0) {
//         document.image.src = "blue_star.png"
//         flag = 1;
//     }
//     else {
//         document.image.src = "golden_star.png"
//         flag = 0
//     }
// }

//!!!!!!!!!картинки по кругу !!!!!!!!!!!
// let array = new Array('2.jpg', '3.jpg', '4.jpg',);
// document.write("<input type='button' name='left' value='<'>");

// document.write("<img src='" + array[0] + "' id='sl'>");
// document.write("<input type='button' name='right' value='>'>");
// document.getElementsByName('right')[0].addEventListener("click", fnright);
// document.getElementsByName('left')[0].addEventListener("click", fnleft);
// let lmage = document.getElementById("sl");
// let i = 0
// function fnright() {
//     i++
//     if (i == array.length) {
//         i = 0;
//     }
//     lmage.src = array[i];
// };
// function fnleft() {
//     i--
//     if (i < 0) {
//         i = array.length - 1;
//     }
//     lmage.src = array[i];
// };



//часики в онлайне !!!!!!!!!!
// let t = document.querySelectorAll("#clock img");

// let imgTime = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif"];
// function clock() {
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();

//     getImg(hour,min,sec)
//     setTimeout('clock()', 1000)
// }
// function getImg(h,m,s){
//     t[0].src =imgTime[Math.floor(h/10)];
//     t[1].src =imgTime[h%10];

//     t[3].src =imgTime[Math.floor(m/10)];
//     t[4].src =imgTime[m%10];

//     t[6].src =imgTime[Math.floor(s/10)];
//     t[7].src =imgTime[s%10];
// }
// clock()





// DOM - Document Object mobil

// alert(document.head.innerHTML)
// alert(document.documentElement.innerHTML)
// alert(document.body.innerHTML)



// let myTitlr = document.querySelector("h1").innerHTML
// console.log(myTitlr);
// let myTitlr1 = document.querySelector("p").firstChild.nodeValue;
// console.log(myTitlr1);


// let d = document.querySelector("#one");
// if(d.nodeName == "DIV"){
//     d.innerHTML = "hello new tag"
// }

// let myTitlr = document.querySelector("h1");
// alert(myTitlr.nodeType)

// let elem = document.querySelector("#root");

// let tag = document.createElement("p");
// let node = document.createTextNode("Новый текс!!!");

// tag.append(node);
// elem.append(tag);
// elem.prepend(tag);
// elem.before(tag);
// elem.after(tag);
// elem.replaceWith(tag);

// let list = document.querySelector("ul");

// let newItem = document.createElement("li")
// newItem.innerHTML = "Новый элемент списка";
// list.append(newItem);

// let i = 1;
// document.querySelector("#func2").addEventListener("click",add);
// document.querySelector("#func1").addEventListener("click",change);
// function add(){
//     let elem = document.createElement("li");
//     elem.innerHTML = "Water" + i;
//     i++
//     document.querySelector("#list2").append(elem);
// }
// function change(){
//    let elem = document.querySelector("#list2").lastChild;
// //    console.log(elem);
// document.querySelector("#list1").append(elem)

// }

// let div = document.querySelector("#root");
// div.insertAdjacentHTML("beforebegin","<p> до выбранного элемента</p>")
// div.insertAdjacentHTML("afterend","<p> После выбранного элемента</p>")
// div.insertAdjacentHTML("afterbegin","<p> Первый внутри выбранного элемента</p>")
// div.insertAdjacentHTML("beforeend","<p>Последни   внутри выбранного элемента</p>");

// let child = document.querySelector("#p1")
// // child.remove()  //удаляет
// let second = document.querySelector("#p2")
// second.after(child)

// let a = document.querySelector("ul");
// let li = a.cloneNode(true);
// li.querySelector("li").innerHTML = "Начало кланируемых элементов"

// a.after(li);

// let list = document.querySelector(".list");
// list.insertAdjacentHTML('beforebegin', '<h2>Список</h2><hr>')
// let list_iner = document.querySelector("h2")
// list_iner.insertAdjacentText('beforeend', " Планет")
// list.insertAdjacentHTML('afterend', "<hr>");
// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "конец списка "
// hr.insertAdjacentElement("afterend", h4)
// let idRemove = setInterval(function () {
//     let li = document.querySelector("li:last-child")
//     if (li === null) {
//         clearInterval(idRemove)
//         list.insertAdjacentHTML("afterbegin","<li>Список удален</li>")
//         // alert("Список удален ")
//     }
//     else {
//         li.remove()
//     }
// }, 1000);

// let div = document.querySelector("div");
// div.className = "alert"

// let activeDiv = document.querySelector(".active");
// activeDiv.classList.add("hidden")
// // activeDiv.classList.remove("hidden")
// activeDiv.classList.toggle("hidden")
// activeDiv.classList.replace("active","alert")



// for (let i = 0; i < 3; i++) {

//     let a = document.querySelectorAll(".pane")[i]
//     let b = document.querySelectorAll(".remove-button")[i];
//     b.addEventListener("click", das);
//     function das() {

//         a.remove()


//     }

// }
// let b = document.querySelectorAll(".remove-button");
// for(let i = 0;i<b.length;i++){
//     b[i].addEventListener("click", function (){
//         this.parentNode.remove()
//     });

// }


// 14.11.22



// let greenFrog = document.querySelector("#greenFrog");
// console.log(greenFrog.id);
// console.log(greenFrog.className);
// console.log(greenFrog.src);
// console.log(greenFrog.alt);
// console.log(greenFrog.title);
// console.log(greenFrog.getAttribute('data-img'));
// console.log(greenFrog.getAttribute('src'));
// console.log(greenFrog.setAttribute('src','4.jpg'));
// // console.log(greenFrog.removeAttribute('src'));
// console.log(greenFrog.hasAttribute('src'));

//Формы

// document.form1.style.background = 'silver';

// document.forms[0].style.padding = '16px';

// document.forms['form1'].style.margin = '20px'; 

// document.forms.form1.style.border = '2px dotted grey';

// document.form1.name1.style.color = 'blue'
// document.form1["name1"].style.background = 'aqua'

// let txt = document.querySelector('#text1');
// let but = document.querySelector('button');

// but.addEventListener('click',content);
// function content(){
//     alert(txt.value);
// }

// let input = document.querySelectorAll('input');
// let form1 =document.forms.form1;
// console.log(form1.length);
// for(let i = 0 ; i < form1.length;i++){
//     input[i].addEventListener('click',checkAll)
// }

// function checkAll(){
//     let numCheced = 0;
//     for(let i = 0;i <form1.length;i++ ){
//         if(input[i].checked && input[i].type == "checkbox"){
//             numCheced++
//         }
//     }
//     if(numCheced==3){
//         for(let i = 0;i <form1.length;i++ ){
//             if(!input[i].checked && input[i].type == "checkbox"){
//                 input[i].disabled=true
//             }
//         }
//     }
//     else{
//         for(let i = 0;i <form1.length;i++ ){
//             input[i].disabled=false
//         }
//     }
// }

// let input = document.querySelectorAll('input[type= "checkbox"]');
// let form1 = document.forms.form1;
// console.log(input.length);
// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener('click', checkAll)
// }

// function checkAll() {
//     let numCheced = 0;
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].checked) {
//             numCheced++
//         }
//     }
//     if (numCheced == 3) {
//         for (let i = 0; i < input.length; i++) {
//             if (!input[i].checked) {
//                 input[i].disabled = true
//             }
//         }
//     }
//     else {
//         for (let i = 0; i < input.length; i++) {
//             input[i].disabled = false
//         }
//     }
// }

// let choose =document.querySelector("input[type = 'button']");
// choose.addEventListener('click',chooseColor);
// function chooseColor(){
//     let f = document.form3;
//     console.log(f.length);
//     for(let i =0 ; i<f.radio2.length;i++)
//     if(f.radio2[i].checked){
//         document.body.style.background = f.radio2[i].value;
//     }
// }

// let city = document.querySelector("#city");
// city.addEventListener('change',setImage);
// function setImage(){
//     let cities = city.selectedIndex;
//     // console.log(cities);
//     let options = city.options;
//     // console.log(options)
//     let code = options[cities].value;
//     console.log(code);
//     let div = document.querySelector('#image');
//     div.innerHTML="<img src = 'img/"+ code +".png'>"
// }



//!!!!!dz11!!!!!!!!!!!
// let kn1 = document.querySelector("input[type = 'button']");
// kn1.addEventListener('click', otvet);
// function otvet() {
//     let a = document.form1;
//     console.log(a.length);
//     for (let i = 0; i < a.zg.length; i++)
//         if (a.zg[i].checked) {
//             add();

//             let divP = document.querySelector("div p")
//             divP.innerHTML = "Правельный ответ:\n" + a.zg[i].value
//             //     alert(a.zg[i].value) 
//         }




// }
// function add() {

//     let div = document.querySelector("div");
//     div.className = "activ"
// }

// let kn2 = document.getElementById("kn2")
// kn2.addEventListener('click', qw);
// function qw() {
//     let div = document.querySelector("div");
//     div.className = "of"
// }


//16.11.22

// let gas = document.querySelectorAll(".petrol");
//  for(let i = 0; i < gas.length; i++){
//     gas[i].addEventListener('click',function(){
//         let gallons = document.querySelector(".gallons").value; 
//         let amout = this.getAttribute('data')

//        let res = gallons*amout
//         let sum = document.querySelector('.sum');
//         sum.innerHTML = res;
//     })
//  }

// форма регистрауии
// let reg = document.querySelector(".register");
// reg.addEventListener("submit", function () {
//     let log = reg.login.value;
//     let pass = reg.password.value;
//     let pass2 = reg.password2.value;
//     let error = "";
//     if (log == "" || pass == "" || pass2 == "") {
//         alert("Все поля должны быть заполнены")
//         return;
//     }
//     if (pass.length < 6) {
//         error += "пороль должен быть не менее 6 символов\n"
//     }
//     if (pass != pass2) {
//         error += "  пороль не совподает\n"
//     }
//     if(error==""){
//         alert("Спасибо за регистрацию")
//     }
//     else{
//         alert(error)
//     }

// })

// методы регулярных вырожений ;
// search - вызывает позицию на которою регулярное вырожение совподает с вызывающей строкой, или "-1", если совподений нет
// match - возврощает все совподения с регулярным вырожением 
// replace - заменяет совподения с регулярным вырожениям на новую подстроку 
// split - делит строку на массив разбивая её по указанной подстроке 
// test - выполняет поиск совподений регулярного вырожения со строкой.возврощаеться значения true или false


// let regexp = new RegExp("шаблон")
// let regexp = /шаблон/

//  let str = "Я ищу совподения в 2023 году 7892ё"
// // let regexp = /ищу/
//  document.write(str + "<br>")
// document.write(str.search(regexp) + "<br>")
// document.write(str.match(regexp) + "<br>")
// document.write(regexp.test(str) + "<br>")


//[...] - искать любой из задонных символ но только один раз (первый элемент)
//[...]g - ищет все задонные  элементы в строке 
// let regexp = /[2023]/g
// document.write(str.match(regexp) + "<br>");
//флаги
//g - (global) -  искать все совподения с шаблоном поиск (глабальный поиск)
//i - (ignoreCase) - регистронезависимый поиск
//m - (multiLine) - многострочный поиск

// let regexp = /я/gi
// document.write(str.match(regexp) + "<br>");

//деапозоны
//[0-9] - деопазон от 0 до 9 можно  создовать любой [3-6] от 3 до 6 [a-z] строчные [A-z] - заглавные буквы [А-Я]- заглавные руские[а-я] строчные ручкие[А-яё]- деопозон всего алфафида [^]-исключающий символ не один изи указонных символов


// let regexp = /[^0-9]/g
// document.write(str.match(regexp) + "<br>");


// let regexp = /\s\d/g
// document.write(str.match(regexp) + "<br>");


// let html = `
// <table>
//     </tr>
//         <td> bgcolor="#CCC"
//             <img src = "1f3.png>"
//         <td>
//         <td> bgcolor="#003399"
//             <img src = "222.png>"
//         <td>
//         <td> bgcolor="#00ccdd"
//             <img src = "fff.png>"
//         <td>
//     </tr> 
// </table>       
// `
// let exp = /#([0-9a-f]{3}){1,2}/gi ;
// document.write(html.match(exp) + "<br>")



//!!!!!!!!!!!!!!!!!!!!!!!121,11,22!@!!!!!!!1
/* Кол-во повторений

+ - от 1 до бесконечности {1,}

? - от 0 до 1 {0,1}

* - от 0 до бесконечности {0,}

*/

// let html = `

//     <b>my text</b>

//     <img src='222.jpg'>

//     <span>else. if</span>

//     <img src='fgt222.png'>

//     <img src='rdfgd2.png'>

//     <img src='ewr.gif'>

// `;

// let exp = /\w+\.(jpg|png|gif|jpeg|bmp)/ig;

// document.write(html.match(exp) + "<br>");


// let html = 'Дмитрий Васильев'
// let exp = /(Дмитрий) Васильев/
// document.write(html.match(exp) + "<br>");


// document.write("aaa".replace('a','b')+ "<br>")
// document.write("aaa".replace(/a/g,'b')+ "<br>")

// let text = "I kill you black dog"
// document.write(text + "<br>");
// let exp = /(book|kill|black)/ig
//  text = text.replace(exp,"***")
//  document.write("<p>" + text + "<br>");


// let str = "John Smith"
// let re = /(\w+)\s(\w+)/;
// document.write(str +"<br>")
// document.write(str.replace(re, "$2 $1"));

// let text = "red color: #f00 and green: #090";
// let exp = /(#[a-f0-9]{3})/ig;
// text = text.replace(exp, "<span style='color:$1'>$1</span>");
// document.write("<p>"+ text +"</p>")


// let text = "I love yandex.ru";
// let exp = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/ig;
// text = text.replace(exp, "<a href='http://$1'>$1</a>");
// document.write("<p>"+ text +"</p>")


// let but = document.querySelector("#but");
// but.addEventListener("click",smsUser);
// function smsUser(){
//     let name = document.getElementsByName("your_name")[0].value;
//     let sms = document.getElementsByName("your_message")[0].value;
//     let regExpBBMail = /([0-9a-z._]+@[0-9a-z_^\.]+\.[a-z]{2,3})/ig;
//     sms = sms.replace(regExpBBMail,"<span style='color:red'>$1</span>")
//     document.write(`
//     <fieldset>
//     <legend>${name}</legend>
//     <div>${sms}</div>
//     </fieldset>
//     `)
// }

// let str = "  text   ";
// str = str.replace(/^\s+|\s+$/g, "")
// alert(">" + str + "<")



// let str = "25-10-2022, 12.03.2023, 30/12/2020";
// let re = str.split(/[-|.|,|/]/);
// console.log(re);

// let num = 123456;
// let str = String(num);
// let arr = str.split('');
// console.log(arr);


// let car = new Object();
// let car1 = {};


// let car = new Object();
// car["type"] = "BMW"
// car["color"] = "white"
// console.log(car);
// document.write(car["type"] + " " + car["color"] + "<br>");

// let menu = {
// width: 300,
// height: 200,
// title: "medddddnu"
// }
// for (let i in menu){
//     document.write("<br>Ключ: " + i + " ,значения: " + menu[i]);
// }
// let a = (2,5 - 2)*2;

// console.log(a);



//!!!!!!23.11.22


// let menu = {
// width: 300,
// height: 200,
// title: "menu"
// }
// let cou
// for (let i in menu){
//     document.write("<br>Ключ: " + i + " ,значения: " + menu[i]);
// }
// let a = (2,5 - 2)*2;

// console.log(a);



//   !!!!!!!!!!!!1128.11.22!!!!!!!!!!!!!1
// let form  = document.form1;
// form.addEventListener("submit",event => {
//     event.prevetDefault();

//     let title =form.title.velue;
//     let text =form.text.velue;

// });
// function saveForm(){
//     let formData ={
//         date: new Date().toDateString()
//     }
//     console.log(formData);
// }

//!!!!!!!!!!!!30.11.22!!!!!!!!!!!!

let info ='{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"marrid":true,"dog":null}'
document.write(info + "<br>");

let person  = JSON.parse(info);
console.log(person);
person.first_name = "petr"
document.write(person.first_name + "<br>")

delete (person.age);
for(let i in person){
    document.write(i + ":" + person[i] + "<br>")
};

person.work = "programer";
for(let i in person){
    document.write(i + ":" + person[i] + "<br>")
};

delete(person.children[1]);
document.write(person.children + "<br>")
