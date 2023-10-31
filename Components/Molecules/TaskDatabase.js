// TaskDatabase.js
export function getTasks() {
  const tasksJSON = localStorage.getItem('tasks');
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

export function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deleteTask(taskId) {
  const tasks = getTasks().filter((task) => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function fetchTasksFromAPI(callback) {
  setTimeout(() => {
    const tasks = getTasks();
    callback(tasks);
  }, 500);
}

export function addTaskToAPI(newTask, callback) {
  setTimeout(() => {
    const tasks = getTasks();
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    callback(newTask);
  }, 500);
}
