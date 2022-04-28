let createElement = (inputVal) => {
    let todoList = document.getElementById("todoList")

    let div = document.createElement('div');
    div.setAttribute("id", "todoItem");

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', "checkbox")
    checkBox.onchange = toggleCheck; // calling toggleCheck function


    let li = document.createElement('li');
    li.innerHTML = inputVal;

    let delBtn = document.createElement('button');
    delBtn.textContent = '-'
    delBtn.setAttribute('id', 'delete')

    delBtn.onclick = deleteTodo; // calling deleteTodo function

    div.appendChild(checkBox);
    div.appendChild(li);
    div.appendChild(delBtn)

    todoList.appendChild(div);
}


let toggleCheck = function(){
    let parent = this.parentNode;
    parent.classList.toggle('checked');
}


let deleteTodo = function(){
    let todoList = this.parentNode;
    todoList.remove();
}




document.getElementById('add').onclick = function () { 
    let inputVal = document.getElementById("input").value;

    createElement(inputVal)
}