import React, { useState, useEffect } from "react";

export interface contact {
  id: number;
  name: string;
  phone: string;
  selected: boolean;
}

export const Contact: React.FC = () => {
  const [contactList, setContactList] = useState<contact[]>([]);

  const toggleContactSelection = (id: number) => {
    var list = [...contactList];
    var item = list.find(i => i.id === id);
    if (item) {
      item.selected = !item.selected;
    }
    setContactList(list);
  };

  useEffect(() => {
    fetch(
      "https://localhost:5001/contacthttps://wa-phonebook-backend.azurewebsites.net/contact"
    )
      .then(response => response.json())
      .then(response =>
        response.map((r: contact) => ({ selected: false, ...r }))
      )
      .then((response: contact[]) => setContactList(response));
  }, []);

  return (
    <>
      <h3>Contacts</h3>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(contact => (
            <tr
              key={contact.id}
              style={{ backgroundColor: contact.selected ? "#ccc" : "" }}
            >
              <td>
                <input
                  type="checkbox"
                  checked={contact.selected}
                  onChange={() => toggleContactSelection(contact.id)}
                ></input>
              </td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
