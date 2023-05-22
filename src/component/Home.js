import React from "react";
import styles from "./Home.module.css";
import { useState } from "react";
const Home = () => {
  const [getUser, setGetUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || []
  );

  const handleClear = (index) => {
    let user = getUser.filter((ele) => {
      alert("Are you sure you want to clear");
      return index !== ele.id;
    });

    setGetUser(user);
    localStorage.setItem("userData", JSON.stringify(user));
  };
  return (
    <div className={styles.maincontainer}>
      <h1 className={styles.head}>Welcome to Home Page</h1>
      {getUser.map((ele) => {
        return (
          <div className={styles.container} key={ele.id}>
            <p className={styles.name}>{ele.firstName}</p>
            <p className={styles.name}>{ele.lastName}</p>
            <button className={styles.btn} onClick={() => handleClear(ele.id)}>
              Clear
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
