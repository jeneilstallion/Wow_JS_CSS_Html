// Alert for question options
// const radios = document.querySelectorAll('input[type=radio]');
// for (let radio of radios) {
//   radio.addEventListener('change', () => alert(radio.value));
// }
let submitButton = document.getElementById('submit-button')
submitButton.addEventListener('submit', () => window.location.href = "https://google.com")
// submitButton.addEventListener('click', () => window.location.href = "./resources.html")

import * as data from './NIMH_data.json';
// const {name} = data;

$.each(data, (i, value) => {
    var link = (`<li class="item"><a href="${value.Link}">${value.Desription}</a></li>`);
    $('#resources-list').append(link);
});
// console.log(data); // output 'testing'

submitButton.addEventListener('submit', () => window.location.href = "https://google.com")