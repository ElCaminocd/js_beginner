let chooseBtn = document.getElementById('choose'), //получаем эл. через id(HTML)
  receiveBtn = document.getElementById('receive'),
  heading = document.getElementsByTagName('h2')[0], //заголовок, номер эл.
  nameInput = document.getElementsByClassName("contactform_name")[0],
  phoneInput = document.querySelector('.contactform_phone'), //получает эл. из html с помощью css селектора
  mailInput = document.querySelectorAll('.contactform_mail')[0], //все эл.
  modal = document.querySelector('.modal'),
  close = document.querySelector('.close'),
  text = document.getElementsByName('message')[0];

//текст меняется при двойном клике
function hover() {
  heading.textContent = "Действительно все!"
};

function out () {
  heading.textContent = "Все включено!"
}
heading.addEventListener("mouseenter", hover); //эта команда команда говорит коду,что сейчас будет привязанно какое-то событие
heading.addEventListener("dblclick", function () {
  heading.textContent = "Все включено!"
});

//обработчик событий: при клике на консультацию будет открываться мод.окно
receiveBtn.addEventListener('click', function() {
  modal.style.display = "block"
});

// закрытие окна
close.addEventListener('click', function() {
  modal.style.display = "none"
});

// 
nameInput.addEventListener("input", function() { 
  text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить:"

  if (nameInput.value == "") { //проверяем на пустоту
    text.value = ""
  
  }
});


/*
//при наведении на h2 цвет текст меняется
function hover() {
  heading.textContent = "Действительно все!"
};

function out () {
  heading.textContent = "Все включено!"
}
heading.addEventListener("mouseenter", hover); //эта команда команда говорит коду,что сейчас будет привязанно какое-то событие
heading.addEventListener("mouseleave", out);
*/ 

/*
console.log(heading);
heading.style.fontSize = "36px"  
*/




