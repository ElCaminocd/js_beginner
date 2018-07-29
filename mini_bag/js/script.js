//Обработчик событий
/*window - глобальный объект;DOMContentLoaded - следит за тем,
чтобы дерево тегов было построено,тогдаскрипты могут выполниться */
window.addEventListener('DOMContentLoaded', function() {  
  //Эл.,которые нужны для работы с корзиной
  let products = document.querySelectorAll('.product'),
    buttons = document.getElementsByTagName('button'),
    open = document.getElementsByClassName('open')[0];

  //Создает корзину при запуске скрипта
  function createCart() {
    //Создаем эл.,которые нужны в корзине
    let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2'), //закрывает корзину
        close = document.createElement('button'); //кнопка закрытия
        //removing = document.createElement('button'); //кнопка удалить

    //Стилизуем эл.- добавляем классы эл. 
    cart.classList.add('cart');
    field.classList.add('cart-field');
    close.classList.add('close');
    //removing.classList.add('removing');

    //Добавили текст к эл.
    close.textContent = 'Закрыть';
    heading.textContent = 'В нашей корзине:';

    //Добавили эл. на страницу
    document.body.appendChild(cart); //appendChild - берет эл. и вставляет в конец документа
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(close);
    //cart.appendChild(removing);
  }

  createCart();

  let field = document.querySelector('.cart-field'),
      cart = document.querySelector('.cart'),
      close = document.querySelector('.close');
      //removing = document.querySelector('.removing');
 
  for (let i = 0; i < buttons.length-1; i++) {
    //Вешаем обработчик события клика на каждую из кнопок
    buttons[i].addEventListener('click', function() {
      //Создали копию карточки с товаром
      let item = products[i].cloneNode(true), 
          btn = item.querySelector('button');
          
      
      btn.textContent = 'Удалить';
      //btn.remove();
      field.appendChild(item);
      //Удаляем карточку с товаром
      products[i].remove();
      
   
    })
  }

  

  function openCart() {
    cart.style.display = 'block'
  };
  function closeCart() {
    cart.style.display = 'none'
  };

  open.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);
  //removing.addEventListener('click', removingCart);

});



