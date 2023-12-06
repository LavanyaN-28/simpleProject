var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Add edit button to all the list items
var li=document.getElementsByClassName("list-group-item");
for(var i=0;i<li.length;i++){
var editBtn=document.createElement('button')
editBtn.className='btn btn-sm float-right edit';
editBtn.appendChild(document.createTextNode("EDIT"));
li[i].appendChild(editBtn)
}
//Form Submit
form.addEventListener('submit',addItem);

//Add Item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem=document.getElementById('item').value;

    //Create a new li
    var li=document.createElement('li')
    //Class Name
    li.className='list-group-item'
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create a delete button
    var deleteBtn=document.createElement('button');
    //Add class to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn)
    
    var editButton=document.createElement('button')
    editButton.className='btn btn-sm float-right edit';
    editButton.appendChild(document.createTextNode("EDIT"));
    li.appendChild(editButton)
    itemList.appendChild(li);
}

//Delete event
itemList.addEventListener('click',removeItem)

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

