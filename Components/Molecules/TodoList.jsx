// TodoList.jsx
import React, { useState, useEffect } from 'react';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';
import Task from '../Atoms/Task';
import { addTaskToAPI, fetchTasksFromAPI, deleteTask } from './TaskDatabase';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isInputGreen, setInputGreen] = useState(false);

  useEffect(() => {
    fetchTasksFromAPI((fetchedTasks) => {
      setTasks(fetchedTasks);
    });
  }, []);

  const addTaskToDatabase = (newTask) => {
    addTaskToAPI(newTask, (addedTask) => {
      setTasks([...tasks, addedTask]);
    });
  };

  const deleteTaskFromDatabase = (taskId) => {
    deleteTask(taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="divPrincipal">
      <h1>Todo List</h1>
      <div className="input-container">
        <Input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
            setInputGreen(false);
          }}
          className={isInputGreen ? 'green-input' : ''}
        />
        <Input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button
          onClick={() =>
            addTaskToDatabase({
              id: Date.now(),
              text: taskText,
              dueDate: dueDate,
            })
          }
          text="Add Task"
        />
      </div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTaskFromDatabase(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
