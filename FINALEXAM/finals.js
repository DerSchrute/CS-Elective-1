const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const themeBtn = document.getElementById("themeBtn");
const count = document.getElementById("count");
const pending = document.getElementById("pending")

let completedTasks = 0;
let pendingTasks = 0;

function addTask(){

    if(taskInput.value.trim() === "") return;

    const task = document.createElement("div");
    task.classList.add("task", priority.value);

    task.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
            <button class="doneBtn">Done</button>
            <button class="pendingBtn">Pending</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;

    const doneBtn = task.querySelector(".doneBtn");
    const deleteBtn = task.querySelector(".deleteBtn");
    const pendingBtn = task.querySelector(".pendingBtn");

    pendingBtn.addEventListener("click", () => {
        
        if(!task.classList.contains("pending")){
            task.classList.add("pending");
            pendingTasks++;
            pending.textContent = pendingTasks;
        }
    })

    doneBtn.addEventListener("click", () => {

        if(!task.classList.contains("completed")){
            task.classList.add("completed");
            completedTasks++;
            count.textContent = completedTasks;
        }

        if(task.classList.contains("pending")){
            task.classList.add("pending");
            pendingTasks--;
            pending.textContent = pendingTasks;
        }

    });

    deleteBtn.addEventListener("click", () => {

        if(task.classList.contains("completed")){
            completedTasks--;
            count.textContent = completedTasks;
        }

        task.remove();

    });

    taskList.appendChild(task);
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){
        addTask();
    }

});

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});
