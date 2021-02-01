// Define UI Variables 
const taskInput = document.querySelector('#task'); 
const form = document.querySelector('#task-form'); 
const filter = document.querySelector('#filter'); 
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks'); 

const reloadIcon = document.querySelector('.fa'); 


//Events 

form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);


//Event handlers

function addNewTask(e){
    e.preventDefault();//disable form submission 

    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    
    const li = document.createElement('li');
    
    li.className = 'collection-item';
    
    li.appendChild(document.createTextNode(taskInput.value));
 
    const link = document.createElement('a');
    
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

}





function clearAllTasks(){
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

   
function filterTasks(){
    let word = filter.value
    list = document.querySelectorAll('.collection-item')
    list.forEach(element => {
    let text = element.textContent
    if(text == word){
        console.log(text);  
    }else{
        console.log("Task Not found")
    }
    // console.log(element.textContent)
    }); 

 }

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

        }

    }
}



function reloadPage() {
   
    location.reload();
}