import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const history = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
    setSalary(localStorage.getItem("salary"));
    setDate(localStorage.getItem("date"));
  }, []);

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      await axios.put(
        `https://6406578777c1a905a0d9a6f4.mockapi.io/react-crud/${id}`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          salary: salary,
          date: date,
        }
      );
      history("/read");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="text"
            className="form-control"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
