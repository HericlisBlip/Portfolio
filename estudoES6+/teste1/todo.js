class TodoList {
    constructor(){
        this.todos = [];
    }
    AddTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new Todolist();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}