function myFirstApp(name, age) {

  alert("Привет! Меня зовут " + name + " и это моя первая программа!");

  function showSkills() {
    let skills = ["HTML", "CSS", "PHP"];

    for (let i = 0; i < skills.length; i++) {
      document.write("Я владею " + skills[i] + "<br>");
    }
  }

  showSkills();

  function checkAge() {
    if (age > 18) {
      alert("У тебя есть шанс стать фронтенд разработчиком");
    } else {
      alert("У тебя все еще будет шанс");
    }
  }
  checkAge();

  function calcPow(num) {
    alert("Квадрат числа " + num + "=" + num * num)
  }
  calcPow(4);
}

  myFirstApp("Natalya", 31);


//let number = 5;

//console.log("beginner");

//alert(number);

//let answer = confirm("Есть ли вам 18 лет?"); //запись ответа usera в переменную answer

/*
let answer = prompt("Есть ли вам 18 лет?"); //пользователь сам может записать ответ
console.log(answer);

let answers = [],
    questions = [
      "Как ваше имя?",
      "Как ваша фамилия?",
      "Сколько вам лет?"
    ]; 

    for (let i = 0; i < questions.length; i++) { //length показывает сколько элементов
      answers[i] = prompt(questions[i]) //в [] записывает все вопросы
    }

document.write(answers);
*/

/*
let age = prompt("Сколько вам лет?");

if (age > 18) {
  alert("Вы можете войти!")
} else {
  alert("Рановато еще :-)")
}
*/ 

/*
//прописываем какое-то действие
function humanSayHello(obj) { //(obj) - аргумент может называться как угодно
  document.write("Hello, " + obj + "!")
}

humanSayHello("Nataly"); //вызываем функцию
*/ 
/*
function calc(a,b) {
  console.log(a + b)
}

calc(4,5);
calc(5,5);
calc(5,15);
*/

/*
  function checkAge() {
    if (age > 18) {

    }
  }
}
*/