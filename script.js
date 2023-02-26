//  ШЕСТОЕ ЗАНЯТИЕ  *****************************************************************************************************************************    ШЕСТОЕ ЗАНЯТИЕ
const getRandomNumInRange = (min, max) => {
        const randomNum = (Math.random() * (max - min) + min).toFixed(0)
        return randomNum
}
const getTask = () => {
        const symbol = (Math.random() > 0.5) ? "+" : "-"
        const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
        gameState.rightAnswer = eval(task)
        return task
}
const toggleGameState = () => {
        gameState.taskInProcess = !gameState.taskInProcess
}
const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]
const gameState = {
        taskInProcess: false,
        rightAnswer: null,
}
const startGameFunc = () => {
        if (!gameState.taskInProcess) {
                title.innerText = "Игра началась!"
                userAnswer.value = null
                userTask.innerText = getTask()
                userAnswer.hidden = false
        } else {
                const isRight = gameState.rightAnswer == userAnswer.value
                userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
                title.innerText = "Вы П" + ((isRight) ? "обедили!" : "роиграли!")
        }
        toggleGameState()
        btnGame.innerText = (gameState.taskInProcess) ? "Проверить!" : "Начать заново!"
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
                startGameFunc()
        } else if (e.key === "Escape") {
                userAnswer.blur()
        }
})

const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")
const choosedState = {
        countElements: 0,
        setCountValue(value) {
                this.countElements += value
                counterEl.innerText = this.countElements
        }
}
const eventFunc = (e) => {
        if (e.target.className === "") {
                e.target.className = "choosed_element"
                choosedState.setCountValue(1)
        } else {
                e.target.className = ""
                choosedState.setCountValue(-1)
        }
}
for (let i = 0; i < choosedEl.length; i++) {
        choosedEl[i].addEventListener("click", eventFunc)
}
//----------------------------------------------------------------------------------

// const timeIsOver = () => {
//         alert("Время вышло!")
// }
// setTimeout(timeIsOver, 2000) //время задаеться в милисекундах, ms
// const alarm =  setInterval(timeIsOver, 3000)         // Выполняеться постоянно
// const alarm = setInterval(() => {
//         let wantToSleep = confirm("Хотите ли вы спать?")
//         if (wantToSleep) {
//                 console.log("tic")
//         } else {
//                 clearInterval(alarm) // Отменить выполнение setInterval
//         }
// }, 3000)

// console.log("1")
// setTimeout(() => {
//      console.log("2")   
// }, 0)
// console.log("3")
// РЕЗУЛЬТАТ: 1, 3, 2 -- Сначала выполняеться синхронный код, а потом асинхронный

const postsBlock = document.querySelector(".posts_block-container")
// const postTitle = document.querySelector(".posts_block-container h3")
// const postBody = document.querySelector(".posts_block-container span")
const showPostsBTN = document.querySelector(".posts_block button")

//const func = () => {
//        return 5
//} ПРИРАВНИВАЕТСЯ К: const func = () => 5

function addPost(title, body) {
        const postTitle = document.createElement("h3")
        const postBody = document.createElement("span")
        const postItem = document.createElement("p")

        postTitle.innerText = title
        postBody.innerText = body

        postItem.append(postTitle, postBody)
        postsBlock.append(postItem)
}

function getPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
                for (item of data) {
                        addPost(item.title, item.body)
                }
                // addPost(data[7].title, data[7].body)
                // console.log(data)
        })
        .catch(err => console.log(err.message)) // Обработчик ошибок
}

// function createPost(title, body, userId) {
//         fetch("https://jsonplaceholder.typicode.com/posts", {
//                 method: 'POST',
//                 body: JSON.stringify({
//                         title,  // title: title,
//                         body,   // body: body,
//                         userId, // userId: userId,
//                 }),
//                 headers: {
//                         'Content-type': 'application/json; charset=UTF-8'
//                 },
//         })
//                 .then(res => {
//                         console.log(res)
//                         // return res.json()
//                 })
//                 .catch(err => console.log(err.message))
// }

// createPost("title", "body", 15)

showPostsBTN.onclick = getPosts


//  ШЕСТОЕ ЗАНЯТИЕ  *****************************************************************************************************************************    ШЕСТОЕ ЗАНЯТИЕ


//  ПЯТОЕ ЗАНЯТИЕ  *****************************************************************************************************************************    ПЯТОЕ ЗАНЯТИЕ

// const getRandomNumInRange = (min, max) => {
//         const randomNum = (Math.random() * (max  - min) + min).toFixed(0)
//         return randomNum
// }

// const getTask = () => {
//         const symbol = (Math.random() > 0.5) ? "+" : "-" // ? - выполнение если true, : - выполнение если false
//         const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
//         gameState.rightAnswer = eval(task)
//         return task
// }

// const toggleGameState = () => {
//         gameState.taskInProcess = !gameState.taskInProcess
// }

// const gameElements = document.getElementById("my_game").children
// const title = gameElements[0]
// const userTask = gameElements[1]
// const userAnswer = gameElements[2]
// const btnGame = gameElements[3]

// const gameState = {
//         taskInProcess: false,
//         rightAnswer: null,
// }

// const startGameFunc = () => {
//         if (!gameState.taskInProcess) {
//                 title.innerText = "Игра началась!"
//                 userAnswer.value = null
//                 userTask.innerText = getTask()
//                 userAnswer.hidden = false
//         } else {
//                 const isRight = gameState.rightAnswer == userAnswer.value
//                 userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
//                 title.innerText = "Вы П" + ((isRight) ? "обедили!" : "роиграли!")
//         }
//         toggleGameState()
//         btnGame.innerText = (gameState.taskInProcess) ? "Проверить!" : "Начать заново!"
// }

// btnGame.addEventListener("click", startGameFunc)
// userAnswer.addEventListener("keydown", (e) => {
//         // console.log(e)
//         if (e.key === "Enter") {
//                 startGameFunc()
//         } else if (e.key === "Escape") {
//                 userAnswer.blur()               // Убрать фокус с активного элемента\
//         }
// })

// // -------------------------------------------------------------------------------------------------

// const choosedEl = document.querySelectorAll(".choosed_block-container > div")
// // console.log(choosedEl.length)
// const counterEl = document.querySelector(".choosed_block span")

// // const choosedState = {
// //         countElements: 0,
// // }

// // const changeCount = (value) => {
// //         choosedState.countElements += value
// //         counterEl.innerText = choosedState.countElements
// // }
// const choosedState = {                          //Пример Инкуплусяции - сокрытие инфрмации
//         countElements: 0,                      //                      внутреними методами
//         setCountValue(value) {
//                 this.countElements += value
//                 counterEl.innerText = this.countElements
//         }
// }

// const eventFunc = (e) => {
//         if (e.target.className === "") {
//                 e.target.className = "choosed_element"
//                 choosedState.setCountValue(1)
//         } else {
//                 e.target.className = ""
//                 choosedState.setCountValue(-1)
//         }
// }
// for (let i = 0; i < choosedEl.length; i++) {
//         choosedEl[i].addEventListener("click", eventFunc)
// }
// // Сначала в цикле повесели на все элементы обработчик событий, а потом....
// choosedEl[2].removeEventListener("click", eventFunc) // убрали его у второго элеменат!
// for (let i = 0; i < choosedEl.length; i++) {
//         choosedEl[i].addEventListener("click", (e) => {
//                 // console.log(e)
//                 // выбрать элемент, т.е. выделить с помощью класса
//                 // e.target.className = "choosed_element"
//                 // choosedEl[i].classList.add("choosed_element")
//                 // запустить счетчик
//                 // if (e.target.className === "") {
//                 //         e.target.className = "choosed_element"
//                 //         choosedState.setCountValue(1)
//                 // } else {
//                 //         e.target.className = ""
//                 //         choosedState.setCountValue(-1)
//                 // }
//                 // console.log(e.target.outerHTML)
//         })
// }

// console.dir(document) // показывает свойства документа - изучить подробней потом
//  ПЯТОЕ ЗАНЯТИЕ  *****************************************************************************************************************************    ПЯТОЕ ЗАНЯТИЕ


//  ЧЕТВЁРТОЕ ЗАНЯТИЕ  *****************************************************************************************************************************    ЧЕТВЁРТОЕ ЗАНЯТИЕ

        // Методы объявления функций: (3)
// function scream() {                     //declaration - можно обявлять где угодно
//         alert("AAAAAAAAA")
// }
// const wowScream =  function() {         //expression - сначала объявить, потом использовать
//         alert("WOOOOOOW")
// }
// const arrow = () => {                   //arrow - сначала объявить, потом использовать
//         alert("arrow is in the sky")
// }

                        // ИГРА
// нажав на кнопку начать игра запускаеться, генерируеться задача, пользователь может ввести ответ
// После начала игру кнопка "начать" должна превратиться в кнопку "проверить"
// Показать результат и кнопка сменяеться на "начать заново"


// const getRandomNumInRange = (min, max) => {     // Случайное число в диапозоне ...
//         const randomNum = (Math.random() * (max  - min) + min).toFixed(0)
//         return randomNum
// }

// const getTask = () => {
//         // const randomNum1 = getRandomNumInRange(0, 100)
//         // const randomNum2 = getRandomNumInRange(0, 100)
//         // let symbol
//         // if (Math.random() >0.5) {
//         //         symbol = "+"
//         // } else {
//         //         symbol = "-"
//         // }
//         const symbol = (Math.random() > 0.5) ? "+" : "-" // ? - выполнение если true, : - выполнение если false
//         const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
//         gameState.rightAnswer = eval(task)
//         return task
// }

// const toggleGameState = () => {
//         gameState.taskInProcess = !gameState.taskInProcess
// }

// const gameElements = document.getElementById("my_game").children
// // console.log(gameElements)
// const title = gameElements[0]
// const userTask = gameElements[1]
// const userAnswer = gameElements[2]
// const btnGame = gameElements[3]

// const gameState = {
//         taskInProcess: false,
//         rightAnswer: null,
// }

// btnGame.onclick = () => {
//         if (!gameState.taskInProcess) {
//                 title.innerText = "Игра началась!"
//                 userAnswer.value = null
//                 // const task = getTask()
//                 userTask.innerText = getTask()         // генерирует задачу, ответ
//                 userAnswer.hidden = false              // показываю задачу пользователю
//                 btnGame.innerText = "Проверить!"       // меняю кнопку
//                 toggleGameState()         // меняю состояние
//         } else {
//                 const isRight = gameState.rightAnswer == userAnswer.value               // сравнить ответ пользователя
//                 userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer // вывести рузультат
//                 title.innerText = (isRight) ? "Вы Победили!" : "Вы Проиграли!"          // вывести поздравлени
//                 btnGame.innerText = "Начать Заново!"                                    // сменить кнопку и состояние
//                 toggleGameState()
//         }
// }






//  ТРЕТЬЕ ЗАНЯТИЕ  ********************************************************************************************************************************    ТРЕТЬЕ ЗАНЯТИЕ
//                      Операторы
//      =       присваивание
//      ==      сравнение по значению (НЕ рекомендуеться)
//      ===     сравнение по значению и типу (рекомендуетться к использованию)
//      >=      больше или равно
//      <=      меньше или равно
//      %       остаток от деления
//      !       НЕ (отрицание)
//      ||      ИЛИ
//      &&      И
//console.log(5 == "5") // TRUE - значения равны
//console.log(5 === "5")  // FALSE - но типы данных разные
// NULL будет TRUE с 0 при использовании >= и <=, в остальных случаях FALSE
// NULL = Undefined, НО Undefined во всех сравнениях с нулем даёт FALSE
// typeof Number("15") // Делает и строки число, принудительное смена типа? пожно проще: typeof +"15"
// Но если строка не может быть преобразова в  число, то тип станет NaN
// Число в строку это typeof String(15) или можно просто записать как 15+"" (Прибавление строки вк числу всегда делает его строкой)
// Boolean() - дает с любым числом в скобках TRUE.
//      Когда получим FALSE: число 0
//                           пустая строка ""
//                           NULL
//                           undefined
//                           NaN

//const UserName = prompt("Who are you?", "anonim")
//if (UserName === "admin") {
//        alert("Hello Boss!")
//} else if (UserName === "anonim" || !UserName) {
//        alert("I don't know you..")
//} else {
//        alert(`Hi ${UserName}`)
//}

// const counts = prompt("До скольки вы хотите досчитать?", 20)
// let i = 10
// //while (i < counts) {
// //        console.log(++i)
// //        // i++ // Аналогично: i+=1 ИЛИ i=i+1
// //}
// do {
//         console.log(i++)
// }while (i <= counts) {
// }

// const arr = []
// //arr.push(7)     // добавляет значение в конец массива
// for (let i = 1; i <= 50; ++i) {         //эта i видна только внутри for
//         arr.push(i)
// }
// const newArr = []
// for ( item of arr) {
//         const marker = item % 7
//         if (!marker) {
//                 newArr.push(item)
//         }
// } console.log(newArr)

// const obj = {           // Пример работы с Объектом: ВЫТАСКИВАНИЕ ВСЕХ КЛЮЧЕЙ ОБЪЕКТА
//         name: "Sasha",
//         age: 25,
//         city: "Voronej!"
// }
// for( key in obj) {
//         console.log(key)
//         //console.log(obj[key]) // а это достаем уже сами значения ключей
// }

// const randomValue1 = (Math.random() * 100).toFixed(0) // tofixed округляет число до указанной точности
// const randomValue2 = (Math.random() * 100).toFixed(0)
// const isPlus = Math.random() > 0.5
// console.log(randomValue1, randomValue2)
// const gameElements = document.getElementById("my_game").children
// if (isPlus) {
//         gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//         gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }
// console.log(gameElements)


//  ВТОРОЕ ЗАНЯТИЕ  ********************************************************************************************************************************    ВТОРОЕ ЗАНЯТИЕ
//let a = "seven"       //let это объявление переменной
//a = 7
// есть еще var где отличная видимость от let
//const и = 8           //const это неизменняемое значение и на его изменеие будет ошибка в браузере
                                                                                                                                // STRING
// const str1 = 'I\'m OK'  //обратный слеш подсказывает что следующий символ не являеться кодом, а просто текстовый символ
// const str2 = "Сашка \nсказал: \"Привет\""     // \n - делает перевод строки, как Enter
// const str3 = `I'm say ${str1}` //ШАБЛОНАЯ СТРОКА - используються только обратный кавычки, так же обратный кавычки поддерживают перевод строки в отличии от одинарных и двойных
// console.log(str1, typeof str1)
// console.log(str2, typeof str2)
// console.log(str3, typeof str3)
                                                                                                                                // NUMBER
// + - * / ** - две звёздочки это возведение в степень (двойное умножение)
                                                                                                                                // BIGINT
// от -(2**53 -1) до (2**53 -1)
//const bigint = 10312314234534534523n
//console.log(999999999999999999999)
//console.log(bigint)
                                                                                                                                // BOOLEAN
// True / False
// > < >= <= >== <== == ===
// строка сравниваеться по символу, переход к слудующему только если результат первого не ясен, поэтому в следующем выражении сравниваетсья только a и A и код а больше кода А
//const bool = "a" > "AAAA"
//console.log(bool)
                                                                                                                                // NULL
//const empty = null // Эта константа всегда пустая
//console.log(empty, typeof empty) // тип object
                                                                                                                                // UNDEFINED
//let box = undefined // =undefined можно было и не писать
//console.log(box, typeof box)
                                                                                                                                // SYMBOL
//const uniq = Symbol('id')
//const uniq2 = Symbol('id')
//console.log(uniq == uniq2)
                                                                                                                                // OBJECT
// Объект - это набор пар значений
//const obj = {
//    name: "Sasha",
//    age: 19,
//    isHappy: true,
//}
//console.log(obj.name)
//console.log(obj['age']) // в квадратных скобках допускаеться генерирование любого параметра
//obj.job = "Google" // Константу нельзя переоопределить, НО МОЖНО ДОБАВЛЯТЬ СВОЙСТВА
//console.log(obj)
        // Частный случай объекта - это массив
//const array = ["Аня", 18, false]
//array.job = "Facebook" // это сломает массив
//array[3] = "Facebook"
//console.log(array)
//console.log(array[0])


//  ПЕРВОЕ ЗАНЯТИЕ  ********************************************************************************************************************************    ПЕРВОЕ ЗАНЯТИЕ
// alert('Привет Человек!')                          // простое сообщение с кнопкой 'OK'
// confirm('Вы учите JS?')                           // Окно подвеждения с кнопками 'OK' и 'Отмена'
// prompt('Какой язык вы учите?', 'пока не в курсе') // Вопрос с полем ввода, где можно задать ответ по умолчанию, кнопки 'OK' и 'Отмена'
//const skill = document.getElementById('skill')       // Имя переменной может совпадать с id в документе, это не страшно
//const islove = document.getElementById('islove')
//const string = document.getElementById('string')
// console.log(span)                                 // Вывести в лог, консоль доступную в средствах разработчика
// const SkillText = prompt('Какой язык вы учите?', 'пока не в курсе')
// skill.innerText = SkillText
// const isloveValue = confirm('Вы любите изучаемый язык?')
// console.log(isloveValue)
// islove.innerText = isloveValue
//string.innerHTML = "str"