
import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    resume: null,
    url: "",
    about: "",
  });

  const handleChanges = (e) => {
    const { name, value, type, files } = e.target;
    setValues({
      ...values,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const ResetForm = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      subject: "",
      resume: null,
      url: "",
      about: "",
    });
  };

  return (
    <div className="container">
      <h1>Form In React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstname"
          onChange={handleChanges}
          required
          value={values.firstname}
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          name="lastname"
          onChange={handleChanges}
          required
          value={values.lastname}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChanges}
          required
          value={values.email}
        />

        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          placeholder="Enter Contact Number"
          name="contact"
          onChange={handleChanges}
          value={values.contact}
        />

        <label htmlFor="gender">Gender</label>
        <div className="gender">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={values.gender === "Male"}
            onChange={handleChanges}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={values.gender === "Female"}
            onChange={handleChanges}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={values.gender === "Other"}
            onChange={handleChanges}
          />
          Other
        </div>

        <label htmlFor="subject">Subject</label>
        <select
          name="subject"
          id="subject"
          onChange={handleChanges}
          value={values.subject}
        >
          <option value="">Select subject</option>
          <option value="math">Maths</option>
          <option value="physic">Physics</option>
          <option value="english">English</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input type="file" name="resume" onChange={handleChanges} />

        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          placeholder="Enter image url"
          onChange={handleChanges}
          value={values.url}
        />

        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="10"
          placeholder="Enter Description"
          onChange={handleChanges}
          value={values.about}
        ></textarea>

        <button type="button" onClick={ResetForm}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
