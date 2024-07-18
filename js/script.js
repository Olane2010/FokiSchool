alert ("Добро Пожаловать на страницу 7В класса")
showprompt();

function showprompt()
{
    let password = +prompt("Введите пароль для входа","")
    if(password != 34148)
    {
        alert("Пароль не правильный!")
        showprompt();
    }
    else{
        
    }
    
}

function OnClick()
{
    alert("В разработке!");
}

const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
