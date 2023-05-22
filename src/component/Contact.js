import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";
const Contact = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [arr, setArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let newarr = [
      ...arr,
      {
        firstName: first,
        lastName: last,
        email: email,
        mobileNumber: mobile,
        id: new Date().getTime().toString(),
      },
    ];
    setArr(newarr);
    localStorage.setItem("userData", JSON.stringify(newarr));
    setFirst("");
    setLast("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className={styles.maincontainer}>
      <h1 className={styles.head}> Form Fields</h1>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="First Name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
