
let tasks = [
    {
        id: 1,
        text: 'Купить книгу',
        isImportant: false,
        isDone: false
    },
    {
        id: 2,
        text: 'Купить хлеб',
        isImportant: false,
        isDone: false
    }
]


let todoList = document.querySelector('.todo__list')
let todoForm = document.querySelector('.todo__form')
let todoField = document.querySelector('.todo__field')
let todoError = document.querySelector('.todo__error')
let todoDone = document.querySelector('.todo__lvl-done')
let todoAll = document.querySelector('.todo__lvl-all')
let todoEmpty = document.querySelector('.todo__empty')

let status = 'all'
if (localStorage.getItem('status') !== null){
    status =localStorage.getItem('status')
}


if (localStorage.getItem('tasks') !== null){
    tasks = JSON.parse(localStorage.getItem('tasks'))
}

const addItemInTodoList = () => {
    todoList.innerHTML = ''

    if (status === 'done' && !tasks.length){
        todoEmpty.textContent = 'выполненых задач нету'
        todoEmpty.style.display = 'block'
    }else if (status === 'important' && !tasks.length){
        todoEmpty.textContent = 'избранных задач нету'
        todoEmpty.style.display = 'block'
    }else if (status === 'all' && !tasks.length){
        todoEmpty.textContent = 'список задач пуст'
        todoEmpty.style.display = 'block'
    }else{
        todoEmpty.style.display = 'none'
    }


    tasks.filter((item) =>{
        if (status === 'done'){
            return item.isDone
        }else if (status === 'important'){
            return  item.isImportant
        }
        return item
    }).forEach((item) => {
        todoList.innerHTML += `<li class="todo__item"
                                    style="background: ${item.isDone ? 'green' : item.isImportant ? 'gold' : 'royalblue'};
                                    order: ${item.isDone ? '-2' : item.isImportant ? '-1' : '0'};">
                
                <div class='todo__item-left'>
                    <input data-id="${item.id}" ${item.isDone ? 'checked' : ''} class="todo__item-done" type="checkbox">
                    <p class="todo__item-text" style="text-decoration: ${item.isDone ? 'line-through' : 'none'}">${item.text} </p>
                </div>
                
               
                <div class="todo__item-right">
                    <span data-id="${item.id}" class='todo__item-imp'>                 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="star">
                            <g fill="${item.isImportant ? '#000000' : '#ffffff'}" transform="translate(2 2.5)">
                                <path d="M10.9788315,0.622701964 L13.2088343,5.0937337 C13.3696541,5.41898806 13.6833886,5.64532516 14.0473153,5.698638 L19.0425214,6.42627649 C19.3361902,6.46746623 19.6010526,6.62197034 19.7785029,6.8556019 C19.9559533,7.08923346 20.0313617,7.38273074 19.9880426,7.671152 C19.9534763,7.91020966 19.8407724,8.13174403 19.6669222,8.30235648 L16.0453978,11.809048 C15.7801525,12.0569606 15.6594885,12.4193205 15.7242774,12.7733882 L16.6162785,17.7090566 C16.7147938,18.2995122 16.3208523,18.8609116 15.7242774,18.9802323 C15.4801297,19.0185775 15.229908,18.9786152 15.0106765,18.8662648 L10.550671,16.5430816 C10.2203789,16.3761286 9.82840179,16.3761286 9.4981097,16.5430816 L5.03810421,18.8662648 C4.48873261,19.1584416 3.80239017,18.9584302 3.50386232,18.4191616 C3.39074686,18.2033073 3.35014981,17.9577724 3.38790218,17.7178233 L4.27990327,12.7821549 C4.34469215,12.4280873 4.22402814,12.0657274 3.95878288,11.8178148 L0.337258419,8.31112321 C0.124797095,8.10519293 0.00518811324,7.82415733 0.00518811324,7.53088433 C0.00518811324,7.23761134 0.124797095,6.95657574 0.337258419,6.75064546 C0.508415451,6.57648914 0.7350439,6.46512211 0.97949921,6.43504322 L5.97470536,5.70740472 C6.33863203,5.65409189 6.65236657,5.42775479 6.81318639,5.10250043 L8.96290904,0.622701964 C9.15090319,0.24057682 9.54799821,0.000936542622 9.97979029,0.00903094105 L10.1135905,0.00903094105 C10.489336,0.0558783885 10.8151899,0.286989836 10.9788315,0.622701964 Z"></path><path d="M10.0065503,16.4115807 C9.81118897,16.4103023 9.62747134,16.4746291 9.45365767,16.5622959 L5.00773517,18.8797981 C4.47450301,19.1484697 3.7974056,18.9325826 3.50386232,18.4191616 C3.39024338,18.2066302 3.34956803,17.9636968 3.38790218,17.72659 L4.27990327,12.7996884 C4.33980187,12.4433294 4.22008857,12.0805563 3.95878288,11.8265815 L0.328338408,8.31988994 C-0.109446136,7.88870587 -0.109446136,7.19059625 0.328338408,6.75941219 C0.499576039,6.59022427 0.721593581,6.47958644 0.961659188,6.44380995 L5.97470536,5.70740472 C6.36101524,5.65133519 6.63712459,5.43773896 6.81318639,5.10250043 L8.99095422,0.571355753 C9.15691252,0.202753827 9.71488681,-0.0519721233 10.0154703,0.00903094105 C10.0065503,0.307099724 10.0065503,16.2099459 10.0065503,16.4115807 Z"></path>
                            </g>
                        </svg>
                    </span>
                    <span data-id="${item.id}" class="todo__item-del">X</span>
                </div>
               
            </li>`
    })


    todoAll.textContent = tasks.length
    todoDone.textContent = tasks.filter(el => el.isDone).length

    let todoItemDelItems = document.querySelectorAll('.todo__item-del')

    Array.from(todoItemDelItems).forEach((item) => {
        item.addEventListener('click', () => {
            tasks = tasks.filter(el => el.id != item.dataset.id)
            addItemInTodoList()
            localStorage.setItem('tasks',JSON.stringify(tasks))
        })
    })

    let todoItemImpItems = document.querySelectorAll('.todo__item-imp')

    Array.from(todoItemImpItems).forEach((item) => {
        item.addEventListener('click', () => {
            tasks = tasks.map((el) => {
                if (el.id == item.dataset.id) {
                    return {...el, isImportant : !el.isImportant}
                }
                return el
            })
            addItemInTodoList()
            localStorage.setItem('tasks',JSON.stringify(tasks))

        })
    })

    let todoItemDoneItems = document.querySelectorAll('.todo__item-done')

    Array.from(todoItemDoneItems).forEach((item) => {
        item.addEventListener('change', () => {
            tasks = tasks.map((el) => {
                if (el.id === +item.dataset.id) {
                    return {...el, isDone: !el.isDone}
                }
                return el
            })
            addItemInTodoList()
            localStorage.setItem('tasks',JSON.stringify(tasks))
        })
    })

    let todoItemBtn = document.querySelector('.todo__del-all')

    todoItemBtn.addEventListener('click',() => {
        tasks = tasks.filter((el) => {
            return !el.isDone
        })
        addItemInTodoList()
        localStorage.setItem('tasks',JSON.stringify(tasks))
    })
}

addItemInTodoList()

let doneBtn = document.querySelector('.status__done')
let allBtn = document.querySelector('.status__all')
let impBtn = document.querySelector('.status__imp')

doneBtn.addEventListener('click',() =>{
    status = 'done'
    addItemInTodoList()
    localStorage.setItem('status',status)
})

impBtn.addEventListener('click',() =>{
    status = 'important'
    addItemInTodoList()
    localStorage.setItem('status',status)
})
allBtn.addEventListener('click',() =>{
    status = 'all'
    addItemInTodoList()
    localStorage.setItem('status',status)
})

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (tasks.some(item => item.text.toUpperCase() === event.target[0].value.toUpperCase())){
        alert('Нельзя добавить')
    } else {
        tasks = [...tasks, {
            id: tasks.length ? tasks.at(-1).id + 1 : 1,
            text: event.target[0].value,
            isImportant: false,
            isDone: false
        }]

        addItemInTodoList()
        localStorage.setItem('tasks',JSON.stringify(tasks))
        event.target[0].value = ''
    }
})


todoField.addEventListener('input', (event) => {
    if (tasks.some(item => item.text.toUpperCase() === event.target.value.toUpperCase())){
        todoError.style.display = 'block'
    } else {
        todoError.style.display = 'none'
    }
})

// item.dataset.id
