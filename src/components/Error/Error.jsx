import css from "./Error.module.css";

export default function Error() {
  return (
    <div className={css.container}>
      <p>Oops,...something went wrong. Please, try to reload page.</p>
    </div>
  );
}