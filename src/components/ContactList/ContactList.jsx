import css from "../ContactList/ContactList.module.css"

const ContactList = ({items, deleteProfile}) => {
  return (
    <div>
      <ul className={css.ul}>
        {items.map((item) => (
          <li className={css.li} key={item.id}>
            <p>{item.name}</p>
            <p>{item.number}</p>
            <button className={css.btn} type="button" onClick={()=>{deleteProfile(item.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
