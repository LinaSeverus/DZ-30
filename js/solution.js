'use strict';

const elemList = document.querySelectorAll('ul li');

for (let li of elemList) {
    console.log(li);
}

console.log(elemList.length);


const arr = Array.from(elemList, (li) => li.textContent);
console.log(arr);





