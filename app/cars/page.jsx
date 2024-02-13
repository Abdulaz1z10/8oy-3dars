"use client"
import React, {useState} from "react";
import Link from "next/link"

export default function Cars() {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [year, setYear] = useState("");
const [color, setColor] = useState("");
const [search, setSearch] = useState("");
const [users, setUsers] = useState([
    {
    id: 1,
    name: "Gentra",
    price: "$18000",
    year: 2023,
    color: "black"
    },
    {
    id: 2,
    name: "Cobalt",
    price: "$14000",
    year: 2022,
    color: "white"
    },
    {
    id: 3,
    name: "Monza",
    price: "$20000",
    year: 2023,
    color: "black"
    }
]);

const changeFirstName = (e) => {
    setName(e.target.value);
};
const changeLastName = (e) => {
    setPrice(e.target.value);
};
const changeAge = (e) => {
    setYear(e.target.value);
};
const changeAddress = (e) => {
    setColor(e.target.value);
    };
    const searchUser = (e) => {
    setSearch(e.target.value);
  };
const deleteUser = (id) => {
    let new_users = users.filter((item) => item.id !== id)
    setUsers([...new_users])
};
const addUser = () => {
    let payload = {
    id: users.length + 1,
    name,
    price,
    year,
    color,
    };
    setUsers([...users, { ...payload }]);
}

return (
  <div className="flex bg-white  w-[100%] h-[100vh] justify-center pt-[10%] gap-[20px]">
    <div className="w-[900px]">
      <div className="flex flex-col">
        <table className="table table-bordered  table-hover text-black">
          <thead>
            <tr>
              <th>T/r</th>
              <th>Name</th>
              <th>Price</th>
              <th>Year</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.first_name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <tr key={index} >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>
                      <button
                        className="p-[10px] px-[20px] text-white bg-red-500 rounded-xl"
                        onClick={() => deleteUser(item.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="mt-[10%] ">
        <button className="bg-green-500 mb-[20px] p-[20px] rounded-xl" onClick={addUser}>
          Add user
        </button>
        <form className="flex flex-col gap-[5px]">
          <input
            type="text"
            onChange={changeFirstName}
            placeholder="Name"
            className="w-[300px] border-[2px] border-black rounded-xl p-[10px]" 
          />
          <input
            type="text"
            onChange={changeLastName}
            placeholder="Price"
            className="w-[300px] border-[2px] border-black rounded-xl p-[10px]"
          />
          <input
            type="number"
            onChange={changeAge}
            placeholder="Year"
            className="w-[300px] border-[2px] border-black rounded-xl p-[10px]"
          />
          <input
            type="text"
            onChange={changeAddress}
            placeholder="Color"
            className="w-[300px] border-[2px] border-black rounded-xl p-[10px]"
          />
        </form>
      </div>
    </div>
  </div>
); 
}
