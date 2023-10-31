import { useState } from 'react';
import './Task.css';

const task = ({ task, onDelete }) => {
  const currentDate = new Date();
  const dueDate = new Date(task.dueDate);
  const isOverdue = dueDate < currentDate;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isChecked, setIsChecked] = useState(false); // Estado para controlar si el checkbox está marcado

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={`li ${isChecked ? 'checked' : ''}`} style={{ borderColor: isOverdue ? 'red' : 'initial' }}>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <strong>Task:</strong> {task.text}
      </div>
      <div>
        <strong>Due Date:</strong> {task.dueDate}
        {isOverdue && <span style={{ color: 'red' }}> (Vencido)</span>}
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default task;
