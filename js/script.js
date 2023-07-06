class Todo {
    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length
    }

    addTask(text) {
        let template = document.querySelector('.task').cloneNode(true);

        template.classList.remove('hide')

        let templateText = template.querySelector('.task-title')
        templateText.textContent = text

        let list = document.querySelector('#taks-container')

        list.appendChild(template)

        this.addEvents()

        this.checkTasks('add')
    }

    removeTask(task) {
       task.remove()
       this.checkTasks('remove') 
    }

    completeTask(task) {
        console.log(task)
        task.classList.add('done')
    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash')
        let removeBtn = removeBtns[removeBtns.length -1]

        let doneBtns = document.querySelectorAll('.fa-check')
        let doneBtn = doneBtns[doneBtns.length -1]


        removeBtn.addEventListener('click', ()=> {
            
           toDo.removeTask(removeBtn.parentElement)
        })

        doneBtn.addEventListener('click', ()=> {
            toDo.completeTask(doneBtn)
        })
    }

    checkTasks(command) {
        let msg = document.querySelector('#empty-tasks')

        if(command == 'add') {
            this.totalTasks += 1
        } else if(command === 'remove') {
            this.totalTasks -= 1
        }

        if(this.totalTasks == 1) {
            msg.classList.remove('hide')
        } else {
            msg.classList.add('hide')
        }
    }
}

const toDo = new Todo()

const addBtn = document.querySelector('#add')

addBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    const taskText = document.querySelector('#task')

    if(taskText.value != '') {
        toDo.addTask(taskText.value)
    }

    taskText.value = ''
})