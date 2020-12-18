var button = document.getElementById("button");
var input = document.getElementById("input");
var list = document.getElementById("list");
var cnt = 1;

button.addEventListener('click', clickButton);

function clickButton()
{
    var temp = document.createElement('li');
    temp.innerHTML = input.value;
    list.appendChild(temp);

    temp.setAttribute("id", "li"+cnt);
    temp.innerHTML += "<button type='button' onclick='remove("+cnt+")'>삭제</button>";
}

function remove(cnt)
{
    var li = document.getElementById("li"+cnt)
    list.removeChild(li);
}