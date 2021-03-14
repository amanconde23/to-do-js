var inputWithTask = document.getElementById('task-to-add');

document.addEventListener('submit', function(e) {
    e.preventDefault();
    var createLi = document.createElement('li');
    var textToAddToLi = document.createTextNode(inputWithTask.value);
    createLi.appendChild(textToAddToLi);
    document.getElementById('to-do-list').appendChild(createLi);
});

function deleteTask(){
  var deleteTaskBtn = document.querySelector('span')
  deleteTaskBtn.remove();
  console.log('apagar')
}



