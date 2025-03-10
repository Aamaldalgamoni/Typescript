
interface Task {
    id: number;
    title: string;
    states: string;
    startdate: string;
    enddate: string;
}

// let tasks:Task[]=JSON.parse(localStorage.getItem("tasks")|| "[]");
let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
// let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
// if(tasks.length==0){
//     alert("It is empty");
// }
displaytasks();
function displaytasks() {
    const container = document.getElementById("task-cards-container");

    if (container) {
        container.innerHTML = "";
        tasks.forEach((task) => {
            const card = document.createElement("div");
            card.classList.add("task-card");
            card.innerHTML = `
        <h3>${task.title}</h3>
        <p><strong>states:</strong> ${task.states}</p>
        <p><strong>startdate:</strong> ${task.startdate}</p>
        <p><strong>enddate:</strong> ${task.enddate}</p>
    `;


            container.appendChild(card);
        });
    }
}
const form = document.getElementById("task-form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
event.preventDefault();

    //   const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1; //رح يمر على حالتين ternary operation 
    // const id = 1
    let len = tasks.length;
    let id = len++;
    const title = (document.getElementById("task-name") as HTMLInputElement).value;
    const states = (document.getElementById("task-states") as HTMLInputElement).value;
    const startdate = (document.getElementById("task-start") as HTMLInputElement).value;
    const enddate = (document.getElementById("task-end") as HTMLInputElement).value;



    const newTask: Task = {
        id,
        title,
        states,
        startdate, //toISOString() because iam in interface declare date as string but when store them from form they are date
        enddate,     //toLocaleDateString() i can use both the diff is the way they present the data
    };


    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //   localStorage.setItem("tasks", JSON.stringify(tasks));
    // localStorage.setItem("tasks", newTask);



    form.reset();
    displaytasks();
});


displaytasks();



