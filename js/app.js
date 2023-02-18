
let $ = document;

let divContainers = $.querySelectorAll('.status')
let modalBox = $.querySelector('.modal')
let btnClose = $.querySelector('.close-modal')
let btnCreateTodo = $.querySelector('#todo_submit')
let showModal = $.querySelector('#add_btn')
let inputElem = $.querySelector('#todo_input')
let firstContainer = $.querySelector('#no_status')
let deleteTodoBtn = $.querySelectorAll('.close')
let todos = $.querySelectorAll('.todo')
let container = $.querySelector('.todo-container')


function showModalFunc() {
    modalBox.className += ' active'
}

function hiddenModal() {
    modalBox.classList.remove('active')
}



function createNote() {
    let valueTodo = inputElem.value
    firstContainer.insertAdjacentHTML('beforeend', `
    <div draggable="true" id="${valueTodo}" class="todo" draggable="true"> <span class="close"> &times; </span>
    <p>${valueTodo}</p></div>`)
    inputElem.value = ''
}

function createNoteWithInput(event) {
    if (event.keyCode === 13) {
        createNote()
    }
}

function deleteTodo(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove()
    }
}


divContainers.forEach(divitem => {
    divitem.addEventListener('dragover', (event => {
        event.preventDefault()
    }))
})

divContainers.forEach(divitem => {
    divitem.addEventListener('drop', (event => {
        let targetId = event.dataTransfer.getData('elemID')
        let targetElem = document.getElementById(targetId)
        event.target.append(targetElem)
        console.log(event.target);
    }))
})

function accessTodo(event) {
    if (event.target.tagName === 'DIV') {
        event.dataTransfer.setData('elemID', event.target.id)
    }

}


showModal.addEventListener('click', showModalFunc)
btnClose.addEventListener('click', hiddenModal)
btnCreateTodo.addEventListener('click', createNote)
inputElem.addEventListener('keydown', createNoteWithInput)
container.addEventListener('dragstart', accessTodo)
container.addEventListener('click', deleteTodo)

