const todotext = document.getElementById('todotext'),
addtodo = document.getElementById('addUpdateClick'),
list = document.getElementById('list-items');

todotext.addEventListener('keypress', function(event){
    if(event.key==="Enter"){
        addUpdateClick.click();
    }
});


function todovalue(){
    console.log(todotext.value);
    if(todotext.value === ''){
        alert('Please enter a todo');
        todotext.focus();
        return;
    }
    
    let li = document.createElement('li');
    const todolist = `<div ondblclick="completeTodoItem(this)">${todotext.value}</div><div><img src="pencil_img.png" onclick="UpdateTodoItems(this)" class="edit todo-controls"><img onclick="DeleteTodoItems(this)" src="bin_img.png" class="edit todo-controls"></div>`;
    li.innerHTML = todolist;
    list.appendChild(li);
    todotext.value = '';
}


function UpdateOnSelectionItems() {
    // Add your code here
    updateText.innerHTML = todotext.value;
    addUpdateClick.setAttribute('onclick', 'todovalue()');
    addUpdateClick.setAttribute('src','plus_img.png');
    todotext.value = '';
}

function completeTodoItem(e) {
    if (e.parentElement.querySelector('div').style.textDecoration === '') {
        console.log(e.parentElement.querySelector('div').style.textDecoration);
        e.parentElement.querySelector('div').style.textDecoration = 'line-through'; 
        let pencilImage = e.parentElement.querySelector('.edit');
        pencilImage.style.display = 'none';
    }

}

function UpdateTodoItems(e) {
    if (e.parentElement.parentElement.querySelector('div').style.textDecoration === '') {
        todotext.value = e.parentElement.parentElement.querySelector('div').innerHTML;
        addUpdateClick.setAttribute('onclick', 'UpdateOnSelectionItems()');
        addUpdateClick.setAttribute('src','refresh_img.png');
        updateText = e.parentElement.parentElement.querySelector('div');

    }
}

function DeleteTodoItems(e) {
    let deleteValue = e.parentElement.parentElement.querySelector('div').innerHTML;
    if(confirm(`Are you sure you want to delete ${deleteValue}`)){
        e.parentElement.parentElement.remove();
    }
    
}
