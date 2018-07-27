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
