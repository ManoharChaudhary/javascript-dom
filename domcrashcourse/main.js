var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event

form.addEventListener("submit", addItem);

// Delete Event

itemList.addEventListener("click", removeItem);

// Filter Event

filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  // Get input value

  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.className = "list-group-item";

  // add text node with input value
  li.appendChild(document.createTextNode(newItem.value));

  // create delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  // append delete button to li
  li.appendChild(deleteBtn);

  // append new li to ul
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert to lowercase
  var text = e.target.value.toLowerCase();

  // Get li from itemList
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
