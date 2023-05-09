let list = [];

var ul = document.getElementById("list");

const emptytask = document.getElementById("emptytask");

list.forEach(item => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
})

function addFirst() {
  const input = document.getElementById("text").value;
  if (input.length < 1) {
    alert("enter text");
    return;
  }
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.prepend(li);
  emptytask.remove();
  list.unshift(input);
  console.log(list);
}

function addLast() {
  const input = document.getElementById("text").value;
  if (input.length < 1) {
    alert("enter text");
    return;
  }
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
  emptytask.remove();
  list.push(input);
  console.log(list);
}


function rmFirst() {
  const lastEl = document.querySelector("#list :first-child");
  lastEl.remove();
  list.shift();
  console.log(list);
}

function rmLast() {
  const lastEl = document.querySelector("#list :last-child");
  lastEl.remove();
  list.pop();
  console.log(list);
}

function indexToRemove() {
  const num = prompt("enter index to remove");
  const el = document.querySelector(`#list :nth-child(${num})`);
  el.remove();
  let newlist = list.filter(item => (item !== list[num]));
  list = newlist;
  console.log(list);
}

