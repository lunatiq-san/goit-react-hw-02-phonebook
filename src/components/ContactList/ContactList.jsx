const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li name={name} key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
