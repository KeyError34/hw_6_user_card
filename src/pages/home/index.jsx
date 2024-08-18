import styles from "./styles.module.scss";

import UserProfile from "../../components/userProfile";

function Home() {
  return <div className={styles.homeContainer}>
    <UserProfile/>
  </div>;
}
export default Home;
