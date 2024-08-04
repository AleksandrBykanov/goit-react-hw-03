const ContactList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.number}</p>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
