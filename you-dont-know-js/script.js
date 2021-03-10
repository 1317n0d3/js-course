const books = document.querySelectorAll('.book');
const container = document.querySelector('.books');
const advertise = document.querySelector('.adv');
const listItems2 = books[0].querySelectorAll('li');
const container2 = books[0].querySelector('ul');
const listItems5 = books[5].querySelectorAll('li');
const container5 = books[5].querySelector('ul');
const container6 = books[2].querySelector('ul');
const listItems6 = books[2].querySelectorAll('li');

const newItem6 = document.createElement('li');
newItem6.textContent = 'Глава 8: За пределами ES6';

container.append(books[1]);
container.append(books[0]);
container.append(books[4]);
container.append(books[3]);
container.append(books[5]);
container.append(books[2]);

document.querySelector('body').style.backgroundImage = 'url(./image/adv.jpg)';
books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';
advertise.remove();

container2.append(listItems2[0]);
container2.append(listItems2[1]);
container2.append(listItems2[3]);
container2.append(listItems2[6]);
container2.append(listItems2[7]);
container2.append(listItems2[8]);
container2.append(listItems2[4]);
container2.append(listItems2[5]);
container2.append(listItems2[9]);
container2.append(listItems2[2]);
container2.append(listItems2[10]);

container5.append(listItems5[0]);
container5.append(listItems5[1]);
container5.append(listItems5[9]);
container5.append(listItems5[3]);
container5.append(listItems5[4]);
container5.append(listItems5[2]);
container5.append(listItems5[6]);
container5.append(listItems5[7]);
container5.append(listItems5[5]);
container5.append(listItems5[8]);
container5.append(listItems5[10]);

listItems6[8].after(newItem6);