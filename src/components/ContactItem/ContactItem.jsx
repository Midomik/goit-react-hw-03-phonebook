import css from './ContactItem.module.css';
export const ContactItem = ({ name, number, id, removeItem }) => {
  return (
    <li key_id={id} className={css.contact_item}>
      {name}: {number}
      <button
        onClick={() => removeItem(id)}
        name="delete"
        className={css.delete_item}
      >
        Delete
      </button>
    </li>
  );
};
