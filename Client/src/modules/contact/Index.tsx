import React, { useState } from "react";

export interface contact {
  id: number;
  name: string;
  phone: string;
  selected: boolean;
}

export const Contact: React.FC = () => {
  const mockContactList = [
    { id: 1, name: "Evren", phone: "23423434", selected: false },
    { id: 2, name: "Erhan", phone: "123123", selected: true }
  ];
  const [contactList, setContactList] = useState<contact[]>(mockContactList);

  const toggleContactSelection = (id: number) => {
    var list = [...contactList];
    var item = list.find(i => i.id == id);
    if (item) {
      item.selected = !item.selected;
    }
    setContactList(list);
  };

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
