import "./button.css";

function Button({ action }) {
  return (
    <div className="button">
      <button> {action}</button>
    </div>
  );
}

export default Button;
