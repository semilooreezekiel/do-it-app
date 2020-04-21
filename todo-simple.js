
var ul = document.getElementById('lists');

 //get value from user via input
 var input = document.getElementById('inputtext');
  
 //get add button
 var addButton = document.getElementById('add');

var item = document.getElementsByTagName('li');
// function to get input length
function inputtextLength(){
   
    return input.value.length;
   
}


 // Adding Item Block
function addItem(){
                       
    // create list item
    var listItem = document.createElement('li');
    //add input text to li
    listItem.appendChild(document.createTextNode(input.value));
    var deleteButton = document.createElement('button'); //create delete button
    deleteButton.appendChild(document.createTextNode("X")); // create X text and add it to delete button
    //add delete button to li
    listItem.appendChild(deleteButton);
      //append li to ul
      ul.appendChild(listItem);
      //reset input to empty
    input.value="";

       // Delete Item Block
      deleteButton.addEventListener("click",deleteItem);
       
        function deleteItem(){
            listItem.classList.add("delete");
            }
     // Completed task Block

     listItem.addEventListener("click", completedTask);
     function completedTask(){
         listItem.classList.toggle("completed");
     }
}

function checkEmptyinput(){
    if(inputtextLength() > 0 ){ 
        addItem();
    }//else if(alert('This cannot be empty!'));
}
function pressEnterKey(event){
    if(inputtextLength() > 0 && event.keyCode===13){ //it can also be event.which instead of event.keyCode
        addItem();
    }
}
addButton.addEventListener("click",checkEmptyinput);
input.addEventListener("keypress",pressEnterKey);
