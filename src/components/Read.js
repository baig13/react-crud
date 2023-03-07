import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://6406578777c1a905a0d9a6f4.mockapi.io/react-crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  const saveLocalStorage = (id, firstName, lastName, email, salary, date) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("salary", salary);
    localStorage.setItem("date", date);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://6406578777c1a905a0d9a6f4.mockapi.io/react-crud/${id}`)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Read</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Salary</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.firstName}</td>
                  <td>{eachData.lastName}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.salary}</td>
                  <td>{eachData.date}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          saveLocalStorage(
                            eachData.id,
                            eachData.firstName,
                            eachData.lastName,
                            eachData.email,
                            eachData.salary,
                            eachData.date
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
