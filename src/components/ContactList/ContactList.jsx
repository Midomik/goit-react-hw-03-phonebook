import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css'
export const ContactList = ({ contacts, removeItem }) => {
  return (
    <>
      <h2 className={css.list_title}>Contacts</h2>
      <ul className={css.list_contact}>
        {contacts.map(item => {
          return (
            <ContactItem
              key={item.id}
              name={item.name}
              number={item.number}
              id={item.id}
              removeItem={removeItem}
            />
          );
        })}
      </ul>
    </>
  );
};
