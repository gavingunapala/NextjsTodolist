import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles.module.css";
function addtodo() {
  return (
    <div class="container">
      <div class={styles.centerContent}>
        <h1>Add Data</h1>
        <br />
        <a href="/home">add data</a>
        <br /> <br />
        <form id="form">
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input type="text" id="Title" class={styles.formControl} />
          </div>
          <label for="Listitems" class="form-label">
            List
          </label>
          <input type="text" id="ListTODO" class={styles.formControl} />
          <button id="add">Add</button>
        </form>
      </div>
    </div>
  );
}
export default addtodo;
