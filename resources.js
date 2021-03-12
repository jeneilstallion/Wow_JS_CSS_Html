// import * as data from './NIMH_data';
import data from './NIMH_data.json'
$.each(data, (i, value) => {
    var link = (`<li class="item"><a href="${value.Link}">${value.Desription}</a></li>`);
    $('#resources-list').append(link);
});
console.table(data)
