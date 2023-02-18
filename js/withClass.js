let $ = document;

class createNote {
    constructor() {



        this.divContainers = $.querySelectorAll('.status')
        this.modalBox = $.querySelector('.modal')
        this.btnClose = $.querySelector('.close-modal')
        this.btnCreateTodo = $.querySelector('#todo_submit')
        this.showModal = $.querySelector('#add_btn')
        this.inputElem = $.querySelector('#todo_input')
        this.firstContainer = $.querySelector('#no_status')
        this.deleteTodoBtn = $.querySelectorAll('.close')
        this.todos = $.querySelectorAll('.todo')
        this.container = $.querySelector('.todo-container')

        this.render()


    }

    render() {
        this.divContainers.forEach(divitem => {
            divitem.addEventListener('dragover', (event => {
                event.preventDefault()
            }))
        })

        this.divContainers.forEach(divitem => {
            divitem.addEventListener('drop', (event => {
                let targetId = event.dataTransfer.getData('elemID')
                let targetElem = document.getElementById(targetId)
                event.target.append(targetElem)
            }))
        })

        this.showModal.addEventListener('click', () => {
            this.showModalFunc()
        })

        this.btnClose.addEventListener('click', () => {
            this.hiddenModal()
        })

        document.body.addEventListener('dblclick',()=>{
            this.hiddenModal()
        })
        this.btnCreateTodo.addEventListener('click', () => {
            this.createNote()
        })

        this.inputElem.addEventListener('keydown', (event) => {
            this.createNoteWithInput(event)
        })

        this.container.addEventListener('dragstart', (event) => {
            this.accessTodo(event)
        })

        this.container.addEventListener('click', (event) => {
            this.deleteTodo(event)
        })


    }

    showModalFunc() {
        this.modalBox.className += ' active'
    }

    hiddenModal() {
        this.modalBox.classList.remove('active')
    }



    createNote() {
        let valueTodo = this.inputElem.value
        this.firstContainer.insertAdjacentHTML('beforeend', `
        <div draggable="true" id="${valueTodo}" class="todo" draggable="true"> <span class="close"> &times; </span>
        <p>${valueTodo}</p></div>`)
        this.inputElem.value = ''
    }

    createNoteWithInput(event) {
        if (event.keyCode === 13) {
            this.createNote()
        }
    }

    deleteTodo(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.parentElement.remove()
        }
    }



    accessTodo(event) {
        if (event.target.tagName === 'DIV') {
            event.dataTransfer.setData('elemID', event.target.id)
        }

    }
}




new createNote()

















