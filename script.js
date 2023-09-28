let kid = document.querySelector('#box')
let mid = document.querySelector('#box2')
let other = document.querySelector('#box3')

fetch('https://dummyjson.com/users')
   .then(res => res.json())
   .then(res =>  create(res.users))

function create(arr) {
   for (let item of arr) {
      let main = document.createElement('div');
      let title = document.createElement('div');
      let info = document.createElement('div');
      let text = document.createElement('div');
      let age = document.createElement('div');

      main.classList.add('item');
      title.classList.add('item__title');
      info.classList.add('item__info');
      text.classList.add('item__text');
      age.classList.add('item__num');

      text.innerText = 'Возраст';
      age.innerText = item.age;
      title.innerText = item.firstName;

      info.append(text, age);
      main.append(title, info);
      if (item.age <= 25) {
         kid.append(main);
      } else if (25 < item.age) {
         mid.append(main);
      } else if (item.age > 50) {
         other.append(main);
      }
   }
}


