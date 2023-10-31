import './Button.css';

const button = ({ onClick, text }) => (
  <button className="button" onClick={onClick}>{text}</button>
);

export default button;
