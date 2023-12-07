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
    //Create a new description
    var desc=document.createElement('description')
    var br=document.createElement('br')
    var descValue=document.getElementById('description').value;
    //Class Name
    li.className='list-group-item'
    desc.tagName="description"
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    desc.appendChild(document.createTextNode(descValue));
    li.appendChild(br)
    li.appendChild(desc)
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

//Filter event

 var filter=document.getElementById('filter');

 //create event
 filter.addEventListener('keyup',filterItems);

 //Filter items
 function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent
        var desc=item.childNodes[2].textContent
        if(itemName.toLowerCase().indexOf(text)!=-1 || desc.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    });
 }
