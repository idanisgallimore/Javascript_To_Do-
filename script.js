var input = document.querySelector(".add-items");
var btn = document.querySelector(".btn");
var ul = document.querySelector(".items-container");

function addItem(){
    // Add new items 
    var li = document.createElement("LI");
    var textli = document.createTextNode(input.value);
    li.appendChild(textli);
    ul.appendChild(li);

    // reset the input box
    if(input.value != " "){
        input.value = " ";
    }
}
btn.addEventListener("click", addItem);

// Delete Item
function deleteItem(){
   console.log(event.target);
   ul.removeChild(event.target);
}

var li = document.querySelector("li");
ul.addEventListener("click", deleteItem);