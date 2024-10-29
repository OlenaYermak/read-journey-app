import css from "./Button.module.css";

export default function Button({ text, onClick, type = "button" }) {
  return (
    <button className={css.btn} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
