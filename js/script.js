alert ("Добро Пожаловать на страницу 7В класса")
//showprompt();

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

function NextRip()
{
    window.open("Расписание.html")
}

function OnClick()
{
    alert("В разработке!");
}

