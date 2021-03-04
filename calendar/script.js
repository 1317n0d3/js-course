let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
let date = new Date();

for (let i in week) {
    if(i == date.getDay()){
        console.log(week[i].bold());
    } else if(week[i] === 'Суббота' || week[i] === 'Воскресение'){
        console.log(week[i].italics());
    } else {
        console.log(week[i]);
    }
}