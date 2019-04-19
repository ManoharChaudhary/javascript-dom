// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 'Item List';
// // console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); // HTMLCollection and not array
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms); // HTMLCollection and not array
// console.log(document.images);

// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle.textContent); // display text dispite display: hidden property
// console.log(headerTitle.innerText); //  display only text which visible
// headerTitle.innerHTML = '<h3>Hello innerHtml changed</h3>';
// console.log(headerTitle); // inner html changed.
// header.style.borderBottom = '3px solid black'
// header.style.borderTop = '3px solid red';

// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'Hello item 2';
// items[1].style.fontWeight ='bold';
// items[1].style.backgroundColor ='yellow';
// // below line will give error we can set style for entire html collection
// // items.style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }
// console.log(items[1]);

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = 'Hello item 2';
// li[1].style.fontWeight ='bold';
// li[1].style.backgroundColor ='yellow';
// // below line will give error we can set style for entire html collection
// // items.style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //

// var header = document.querySelector('#main-header'); // id, class , tag any selector
// header.style.borderBottom = 'solid 3px red';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'; // defaut select first item and apply style on it.

// var last = document.querySelector('.list-group-item:last-child');
// last.style.color = 'blue';

// var nth = document.querySelector('.list-group-item:nth-child(2)');
// nth.style.color = 'green';
// console.log(item);

// QUERYSELECTORALL //

// var titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello title';
// // console.log(titles);

// var odds = document.querySelectorAll('li:nth-child(odd)');
// var evens = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odds.length; i++) {
//     odds[i].style.backgroundColor = '#f4f4f4';
    
// }
// for (let i = 0; i < evens.length; i++) {
//     evens[i].style.backgroundColor = '#ccc';
    
// }
// console.log(odds);
// console.log(evens);

// TRAVERSING  THE DOM //

// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#ccc';
// parentElement
// itemList.parentElement.style.backgroundColor = '#ccc';
// console.log(itemList.parentNode.parentElement);

//childNode

// console.log(itemList.childNodes); //  nodeList , it print extra text item for line breaks

// console.log(itemList.children); // html collection 
// itemList.children[1].style.backgroundColor = 'blue';

// // firstchild and firstchildElement
// console.log(itemList.firstChild); // #text because line break
// console.log(itemList.firstElementChild); // return actual first child element
// itemList.firstElementChild.textContent = 'hello1';
// // lastchild and firstchildElement
// console.log(itemList.lastChild); // #text because line break
// itemList.lastElementChild.textContent = 'hello 4';

//nextSibling

// console.log(itemList.nextSibling); // #text
// console.log(itemList.nextElementSibling); // return actual next sibling elemnt


// previousSiblings
//  console.log(itemList.previousSibling); // #text
//  console.log(itemList.previousElementSibling); // return actual next sibling elemnt
// itemList.previousElementSibling.style.color = 'green';

//createElement
// var newDiv = document.createElement('div');
// // add class
// newDiv.className = 'hello';
// // add id
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'Hello Div');
// newDiv.textContent = 'Hello World';

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// console.log(newDiv);

// EVENTLISTENERS //

// var button = document.querySelector('button').addEventListener('click',buttonClicked);

// function buttonClicked(e) {
   // console.log(e.target); // targe element
  // console.log(e.target.id); // id
//    console.log(e.target.className); // className string
//    console.log(e.target.classList); // array of classNames
   // var output = document.getElementById('output');
   // output.innerHTML = '<h3>' + e.target.className + '</h3>';
  //  console.log(e.type); // type of event
    // console.log(e.clientX); // get X cordinate from window
    // console.log(e.clientY); // get Y cordinate from window
    
    //console.log(e.offsetX); // get X cordinate from actual target element
    //console.log(e.offsetY); // get Y cordinate from actual target element

    //  console.log(e.altKey) // know if alt key is hold or not
   // console.log(e.ctrlKey) // know if alt key is hold or not
   // console.log(e.shiftKey) // know if alt key is hold or not


// }

// var button = document.querySelector('button');
// var box = document.querySelector('#box');
// var output = document.getElementById('output');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);

// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter', runEvent); // if mouseenter in target area
// box.addEventListener('mouseleave', runEvent); // if mouseleave in target area

// box.addEventListener('mouseover', runEvent); // if mouseover in target area
// box.addEventListener('mouseout', runEvent); // if mouseout in target area
// diffrent mouseenter and mouseover over fire event if we hover to inner html of target
// diffrent mouseleave and mouseout out fire event if we leave to inner html of target 

// box.addEventListener('mousemove', runEvent);  

// LISTEN KEYEVENTS //

var input = document.querySelector('input[type="text"]');
var select = document.querySelector('select');

var form = document.querySelector('form');
var output = document.getElementById('output');

// input.addEventListener('keydown', runEvent);
// input.addEventListener('keyup', runEvent);
// input.addEventListener('keypress', runEvent);
// input.addEventListener('focus', runEvent);
// input.addEventListener('blur', runEvent); // focus out

// input.addEventListener('cut', runEvent);
// input.addEventListener('paste', runEvent);

// input.addEventListener('input', runEvent); // anything todo with input
// select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
    e.preventDefault();
   // console.log(e.target.value);
  //  output.innerHTML = '<h3>' + e.target.value + '</h3>'
  //  output.innerHTML = '<h3>MouseX :' + e.offsetX + 'MouseY :' + e.offsetY + '</h3>';
  //  box.style.backgroundColor = 'rgb(10,' + e.offsetX + ',' + e.offsetY + ')';
}