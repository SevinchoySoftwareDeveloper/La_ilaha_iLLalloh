// const getTodo = (cb) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             cb(undefined, request.responseText)
//         }
//         else if (request.readyState === 4) {
//             cb("", undefined)
//         }
//     })
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

//     request.send();
// }
// getTodo((sun, data) => {
//     if (sun) {
//         console.log('malumotlarning olishning iloji yoq');
//     }
//     else (
//         console.log(data)
//     )
// })

// let internet = true;
// const getData = () => {
//     return new Promise((resolve, reject)=>{
//         if (internet) {
//             resolve('hello world');
//         }
//         else {
//             reject('error');
//         }
//     })

// }
// getData()
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally()
// console.log(getData);

const getToDo = (resourse) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            }
            else if (request.readyState === 4) {
                reject('error')
            }
        })
        request.open('Get', resourse);
        request.send();
    })

}
getToDo("js/data.json")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
    getToDo("js/person.json")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
    getToDo("js/sun.json")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
    
const students = [
    {
        id: 1,
        img: 'img/gul.jpg',
        firstname: "Sevinch",
        surname: 'Karimova',
        jobs: 'web developer'
    },
    {
        id: 2,
        img: 'img/gul.jpg',
        firstname: "Sevinch",
        surname: 'Soliyiva',
        jobs: 'web developer'
    },
    {
        id: 3,
        img: 'img/rasm.jpg',
        firstname: "Iroda",
        surname: 'Hodiyiva',
        jobs: 'web developer'
    }
]
localStorage.setItem('namestudn', JSON.stringify(students));// jsonga
let locals = JSON.parse(localStorage.getItem('namestudn')) //JSONdan JSga
// console.log(locals);  
let card = document.querySelector('.card'); // jsdan brovzerga
locals.forEach((item) => {
    card.innerHTML +=`
    <div class="card_item ">
            <div class="img">
                <img src="${item.img}" alt="">
            </div>
            <div class="firstname">
                <h2>${item.firstname}</h2>
            </div>
            <div class="surname">
                <h2>${item.surname}</h2>
            </div>
            <div class="jobs">
                <h3>${item.jobs}</h3>
            </div>
        </div>
    `
});


