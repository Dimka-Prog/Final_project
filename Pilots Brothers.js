const rowsTable = 4;
const  colsTable = 4;
let Color = '#ffffff';
let ColorDefault = '#9dcad3';
let count;

let table = document.querySelector('#table');

for (let i = 0; i < rowsTable; i++)
{
    let tr = document.createElement('tr');
    for (let j = 0; j < colsTable; j++)
    {
        let button = document.createElement('button');
        let td = document.createElement('td');
        tr.appendChild(td);
        td.appendChild(button);
    }
    table.appendChild(tr);
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
    return "#" + componentToHex(+rgb[0]) + componentToHex(+rgb[1]) + componentToHex(+rgb[2]);
}

function CheckColor(btn)
{
    let checkColor = window.getComputedStyle(btn, null).backgroundColor;
    checkColor = checkColor.match(/\d+/g);
    checkColor = rgbToHex(checkColor)
    return checkColor;
}

let clickButton = document.querySelectorAll('button');

function checkWINNER()
{
    let WINNER = true;
    for (let i = 0; i < clickButton.length; i++)
    {
        if (CheckColor(clickButton[i]) === ColorDefault){
            WINNER = false;
            break;
        }
    }
    if (_.eq(WINNER, true))
        alert("YOU WON");
}

for (let i = 0; i < clickButton.length; i++)
{
    clickButton[i].onclick = function ()
    {
        if (CheckColor(clickButton[i]) === ColorDefault)
        {
            clickButton[i].style.backgroundColor = Color;
            count = rowsTable;
            while (i - count >= 0)
            {
                if(CheckColor(clickButton[i - count]) === Color)
                    clickButton[i - count].style.backgroundColor = ColorDefault;
                else clickButton[i - count].style.backgroundColor = Color;
                count += rowsTable;
            }
            count = rowsTable;
            while (i + count < clickButton.length)
            {
                if(CheckColor(clickButton[i + count]) === Color)
                    clickButton[i + count].style.backgroundColor = ColorDefault;
                else clickButton[i + count].style.backgroundColor = Color;
                count += rowsTable;
            }
            count = i;
            while (count % 4 !== 0)
            {
                count--;
                if(CheckColor(clickButton[count]) === Color)
                    clickButton[count].style.backgroundColor = ColorDefault;
                else clickButton[count].style.backgroundColor = Color;
            }
            count = i + 1;
            while (count % 4 !== 0)
            {
                if(CheckColor(clickButton[count]) === Color)
                    clickButton[count].style.backgroundColor = ColorDefault;
                else clickButton[count].style.backgroundColor = Color;
                count++;
            }
            checkWINNER();
        }
        else if (CheckColor(clickButton[i]) === Color)
        {
            clickButton[i].style.backgroundColor = ColorDefault;
            count = rowsTable;
            while (i - count >= 0)
            {
                if(CheckColor(clickButton[i - count]) === ColorDefault)
                    clickButton[i - count].style.backgroundColor = Color;
                else clickButton[i - count].style.backgroundColor = ColorDefault;
                count += rowsTable;
            }
            count = rowsTable;
            while (i + count < clickButton.length)
            {
                if(CheckColor(clickButton[i + count]) === ColorDefault)
                    clickButton[i + count].style.backgroundColor = Color;
                else clickButton[i + count].style.backgroundColor = ColorDefault;
                count += rowsTable;
            }
            count = i;
            while (count % 4 !== 0)
            {
                count--;
                if(CheckColor(clickButton[count]) === ColorDefault)
                    clickButton[count].style.backgroundColor = Color;
                else clickButton[count].style.backgroundColor = ColorDefault;
            }
            count = i + 1;
            while (count % 4 !== 0)
            {
                if(CheckColor(clickButton[count]) === ColorDefault)
                    clickButton[count].style.backgroundColor = Color;
                else clickButton[count].style.backgroundColor = ColorDefault;
                count++;
            }
            checkWINNER();
        }
    }
}

const _ = require('lodash');

