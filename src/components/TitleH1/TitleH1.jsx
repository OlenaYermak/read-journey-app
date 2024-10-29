import css from "./TitleH1.module.css";

export default function TitleH1() {
  return (
    <h1 className={css.title}>
      Expand your mind, reading <span className={css.acсentColor}>a book</span>
    </h1>
  );
}
