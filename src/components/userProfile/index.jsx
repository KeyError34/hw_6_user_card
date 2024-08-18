import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import ProfileImg from "../../assets/prof.jpg"
function UserProfile() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchUser = (url) => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        setUserData(data);
      })
      .catch((err) => console.log(err));
  };
console.log(userData)
  // next guy
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < userData.length - 1 ? prevIndex + 1 : prevIndex));
  };

  // prev guy
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  useEffect(() => {
    fetchUser(url);
  }, []);

  return (
  <div className={styles.decorationBorder}>  
  <div className={styles.userProfileContainer}>
      
      {userData.length > 0 ? (
        <>
          <div className={styles.userProfile}>
            <img src={ProfileImg} alt="ProfileImg" />
            <h1>{userData[currentIndex].name}</h1>
            <p>Email: {userData[currentIndex].email}</p>
            <p>Phone: {userData[currentIndex].phone}</p>
            
            
          </div>
          <div className={styles.buttonsContainer}>
            <button onClick={handlePrev} disabled={currentIndex === 0}>
            previous 
            </button>
            <button onClick={handleNext} disabled={currentIndex === userData.length - 1}>
             next
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
}

export default UserProfile;