import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVisibleContacts } from '../../redux/contacts/contacts-selector';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.listItem}>
            {contact.name}: {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
