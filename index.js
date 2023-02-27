toString

// отключение мышки 
document.body.oncontextmenu = function() {
    return false
}

document.body.onclick = function() {
    return false
}

document.body.mousedown = function() {
    return false
}

// для настройки уровней
let fieldData = 9
let fieldRow = 3
let fieldColum = fieldRow
let rabbit = 9
let bulletPool = 4
let shootCounter = 0
let statCounter = 0
let timeCounter = 60

// игровое поле и статистика
let divMain = document.createElement('div');
divMain.style.backgroundImage = "url('./pic/backgroundTutorial.jpg')"
divMain.style.backgroundRepeat = 'no-repeat'
divMain.style.fontSize = '70px'

let divFone = document.createElement('div');
divFone.style.backgroundImage = "url('./pic/foneImg.jpg')"
divFone.style.margin = 'auto'
divFone.style.width = '800px'
divFone.style.height = '800px'
divFone.hidden = true

let divStat = document.createElement('div')
divStat.style.display = 'flex'
divStat.style.justifyContent = 'space-between'

let divTimer = document.createElement('div')
divTimer.style.fontSize = '70px'
divTimer.style.marginRight = '10%'
divTimer.style.display = 'flex'
divTimer.style.justifyContent = 'space-between'

let divRealTimer = document.createElement('div')
divRealTimer.style.marginRight = '10px'
divRealTimer.hidden = true

let divBulet = document.createElement('div')

let imgAim = document.createElement('img');
imgAim.src = './pic/aim.png'

let table = document.createElement('table')
table.style.tableLayout = 'fixed'
    // table.style.border = 'solid'
table.style.width = '800px'
table.style.height = '800px'

// меню
let divMenu = document.createElement('div')
divMenu.style.height = '800px'
divMenu.style.width = '800px'
divMenu.style.margin = 'auto'

let tableMenu = document.createElement('table')
tableMenu.style.border = 'solid'
tableMenu.style.width = '400px'
tableMenu.style.height = '600px'
tableMenu.style.marginTop = '10%'
tableMenu.style.marginLeft = '10%'
tableMenu.style.backgroundColor = 'green'

let tRowMenu = document.createElement('tr')
tRowMenu.style.border = 'solid'
tRowMenu.style.height = '200px'
tRowMenu.style.width = '200px'
tRowMenu.style.margin = 'auto'

let tRowMenu2 = document.createElement('tr')
tRowMenu2.style.border = 'solid'

let tDatMenu = document.createElement('td')
tDatMenu.style.border = 'solid'
tDatMenu.style.height = '200px'
tDatMenu.style.width = '200px'
tDatMenu.style.margin = 'auto'
tDatMenu.style.backgroundColor = 'brown'
tDatMenu.style.textAlign = 'center'
tDatMenu.style.fontWeight = 'bold'
tDatMenu.style.fontSize = '50px'

let logoDat1 = document.createElement('p')
logoDat1 = 'Новая игра'

// опции для партронов
let bulet = []

for (let i = 0; i < bulletPool; i++) {
    bulet[i] = document.createElement('img')
    bulet[i].src = './pic/bulet.png'
    divBulet.append(bulet[i])
}

//опции для кроликов
let madRabbit = [
    [],
    [],
    []
]
let deadRabbit = [
    [],
    [],
    []
]

// создание таблици для кроликов и помещение в кроликов в ячейки + функия для убийста кроликов
for (let i = 0; i < fieldRow; i++) {
    table[i] = document.createElement('tr')
    table[i].style.height = '200px'
    table.append(table[i])

    for (let y = 0; y < fieldColum; y++) {
        table[i][y] = document.createElement('td')
        table[i][y].style.height = '200px'
        table[i][y].onmousedown = function() {
            return false
        }
        table[i].append(table[i][y])

        deadRabbit[i][y] = document.createElement('img')
        deadRabbit[i][y].src = './pic/deadRabbit.png'
        deadRabbit[i][y].style.display = 'none'
        deadRabbit[i][y].style.marginLeft = 'auto'
        deadRabbit[i][y].style.marginRight = 'auto'
        table[i][y].append(deadRabbit[i][y])

        madRabbit[i][y] = document.createElement('img')
        madRabbit[i][y].src = './pic/madRabbit.png'
        madRabbit[i][y].style.display = 'none'
        madRabbit[i][y].style.marginLeft = 'auto'
        madRabbit[i][y].style.marginRight = 'auto'
        madRabbit[i][y].onclick = function() {
            if (shootCounter < bulletPool) {
                madRabbit[i][y].style.display = 'none'
                deadRabbit[i][y].style.display = 'block'
                setTimeout(() => deadRabbit[i][y].style.display = 'none', 1000)
                dead.play()
                statCounter++
                divTimer.innerHTML = statCounter
            }
        }
        madRabbit[i][y].onmousedown = function() {
            return false
        }
        table[i][y].append(madRabbit[i][y])
    }
}

// НЕ НУЖНО ПРИВЯЗЫВАТЬ НОРЫ У ПОЛЮ, НОРЫ ДОЛЖНЫ БЫТЬ С ЗАЙЦАМИ

// музыка и звуки
let mainThem = new Audio();
mainThem.src = './sound/mainThem.mp3'
mainThem.preload = 'auto'
mainThem.volume = 0.2

let shootSound = new Audio();
shootSound.src = './sound/shoot.mp3'
shootSound.preload = 'auto'
shootSound.volume = 0.5

let reloadSound = new Audio();
reloadSound.src = './sound/reload.mp3'
reloadSound.preload = 'auto'

let shootFalse = new Audio();
shootFalse.src = './sound/shootFalse.mp3'
shootFalse.preload = 'auto'

let dead = new Audio();
dead.src = './sound/dead.mp3'
dead.preload = 'auto'

let spawn = new Audio();
spawn.src = './sound/spawn.mp3'
spawn.preload = 'auto'
spawn.volume = 0.7

// помещение элементов в контейнеры 
document.body.append(divMain)
divMain.append(divStat)
divStat.append(divBulet)
divStat.append(divTimer)
divTimer.append(statCounter)
divMain.append(divFone)
divMain.append(divRealTimer)
divFone.append(table)
divMain.append(divMenu)
divMenu.append(tableMenu)
tableMenu.append(tRowMenu)
tableMenu.append(tRowMenu2)
tRowMenu.append(tDatMenu)
tDatMenu.append(logoDat1)
divRealTimer.append(timeCounter)

// замена курсора
divFone.onmouseover = function() {
    divFone.style.cursor = "url('./pic/aim.png'), auto"
}

// стрельба
divFone.onclick = function() {
    if (shootCounter < bulletPool) {
        shootCounter++
        shootSound.play()
        hideBulet(shootCounter)
    } else {
        shootFalse.play()
    }
}

// скрытие патронов
function hideBulet(counter) {
    bulet[counter - 1].hidden = true
}

// перезарядка
divFone.oncontextmenu = function() {
    shootCounter = 0
    reloadSound.play()
    for (let i = 0; i < bulletPool; i++) {
        bulet[i].hidden = false
    }
}

// генерация рандома (первое число)
function rabbitsNum1() {
    let lastNumber = 0
    let now1 = 0
    now1 = Math.random() * 10 / 3
    now1 = Math.floor(now1)

    if (now1 <= fieldRow - 1) {
        return now1
    }
}

// генерация рандома(второе число)
function rabbitsNum2() {
    let lastNumber = 0
    let now2 = 0
    now2 = Math.random() * 10 / 3
    now2 = Math.floor(now2)

    if (now2 <= fieldRow - 1) {
        return now2
    }
}

// появление кроликов
function uncoverRabbit(num1, num2) {
    madRabbit[num1][num2].style.display = 'block'
    spawn.play()
    setTimeout(() => madRabbit[num1][num2].style.display = 'none', 1000)
}

// таймер
function gameTimer() {
    if (timeCounter >= 0) {
        timeCounter = timeCounter - 1
    }
    return timeCounter
}

// начало игры (кнопка новая игра)
tDatMenu.onclick = function() {
    shootCounter = 0
    timeCounter = 60
    divMenu.hidden = true
    divMain.style.backgroundImage = 'none'
    divFone.hidden = false
    divRealTimer.hidden = false
    mainThem.play()
    let game = setInterval(() => uncoverRabbit(rabbitsNum1(), rabbitsNum2()), 1000)
    setTimeout(() => clearInterval(game), 60 * 1000)
    setTimeout(() => endGame(), 63 * 1000)
    let timer = setInterval(() => gameTimer(), 1000)
    setInterval(() => divRealTimer.innerHTML = timeCounter, 1000)
    setTimeout(() => clearInterval(timer), 60 * 1000)

}

// конец игры
function endGame() {
    divMenu.hidden = false
    divFone.hidden = true
}

// 1 сохранение результатов
// 2 усложнение уровней (больше поле , меньше патронов)
// 3 попробовать requestAnimationFrame?