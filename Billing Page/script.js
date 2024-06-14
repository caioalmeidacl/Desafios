const loadMore = document.getElementById('loadMore');
const list = document.getElementById('list');


let currentDate = new Date();
let dateToString = currentDate.toString();
let month = currentDate.toLocaleString('default', { month: 'short' }); // Obtém o mês por extenso
let date = currentDate.getDate();
let year = currentDate.getFullYear();

let type = "Pro Portfolio";




loadMore.onclick = () => {
    list.innerHTML += 
    `<div class="info">   
        <p>${month},${date},${year}</p>
        <p>${type}</p>
        <button class="button">Download</button>
    </div>`
}