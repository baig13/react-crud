import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://6406578777c1a905a0d9a6f4.mockapi.io/react-crud", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        salary: salary,
        date: date,
        header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <div>
      <h2>Create</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Create;
