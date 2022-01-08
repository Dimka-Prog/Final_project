const rowsTable = 5;
const colsTable = 5;
let Color = 'black';
let ColorDefault = '#9fd364';
let RandomButton;
let PrevRandomButton = 12;
let countWIN = 0;
let timeMin = 60;

let table = document.querySelector('#table');

for (let i = 0; i < rowsTable; i++)
{
    let tr = document.createElement('tr');
    for (let j = 0; j < colsTable; j++)
    {
        let button = document.createElement('button');
        let td = document.createElement('td');
        button.style.backgroundColor = '#9fd364';
        tr.appendChild(td);
        td.appendChild(button);

        if(i === 2 && j === 2)
            button.style.backgroundColor = Color;
    }
    table.appendChild(tr);
}

let buttonRun = document.getElementById("Button");
let timerShow = document.getElementById("timer");
let checkClick = false;

buttonRun.addEventListener('click', function() {
    checkClick = true;
})

let clickButton = document.querySelectorAll('button');
timer = setInterval(function ()
{
    if (checkClick) {
        RandomButton = Math.floor(Math.random() * clickButton.length);
        while (RandomButton === PrevRandomButton) {
            RandomButton = Math.floor(Math.random() * clickButton.length);
        }
        clickButton[PrevRandomButton].style.backgroundColor = ColorDefault;
        PrevRandomButton = RandomButton;

        clickButton[RandomButton].onclick = function () {
            countWIN++;
        }
        if (countWIN === 20) {
            alert("YOU WON");
            clearInterval(timer);
            location.reload();
        }
        clickButton[RandomButton].style.background = Color;
        setTimeout(function () {
            }, 2000);

        if (timeMin <= 0 && countWIN !== 20) {
            clearInterval(timer);
            alert("Время закончилось. Для победы поймате крота 20 раз");
            location.reload();
        } else {
            timerShow.innerHTML = `${Math.trunc(timeMin / 60 % 60)}:${timeMin % 60}`;
        }
        --timeMin;
    }
}, 1000)


