// let tasks:Task[]=JSON.parse(localStorage.getItem("tasks")|| "[]");
var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
// let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
// if(tasks.length==0){
//     alert("It is empty");
// }
displaytasks();
function displaytasks() {
    var container = document.getElementById("task-cards-container");
    if (container) {
        container.innerHTML = "";
        tasks.forEach(function (task) {
            var card = document.createElement("div");
            card.classList.add("task-card");
            card.innerHTML = "\n        <h3>".concat(task.title, "</h3>\n        <p><strong>states:</strong> ").concat(task.states, "</p>\n        <p><strong>startdate:</strong> ").concat(task.startdate, "</p>\n        <p><strong>enddate:</strong> ").concat(task.enddate, "</p>\n    ");
            container.appendChild(card);
        });
    }
}
var form = document.getElementById("task-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //   const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1; //رح يمر على حالتين ternary operation 
    // const id = 1
    var len = tasks.length;
    var id = len++;
    var title = document.getElementById("task-name").value;
    var states = document.getElementById("task-states").value;
    var startdate = document.getElementById("task-start").value;
    var enddate = document.getElementById("task-end").value;
    var newTask = {
        id: id,
        title: title,
        states: states,
        startdate: startdate, //toISOString() because iam in interface declare date as string but when store them from form they are date
        enddate: enddate,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //   localStorage.setItem("tasks", JSON.stringify(tasks));
    // localStorage.setItem("tasks", newTask);
    form.reset();
    displaytasks();
});
displaytasks();
