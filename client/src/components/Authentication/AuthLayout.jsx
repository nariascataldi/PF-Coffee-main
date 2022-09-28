import { Outlet } from "react-router-dom";

import styles from "../../styles/Authentication/AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <>
      <div className={styles.div}>
        <main className={styles.layout}>
          <div className={styles.lu}>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
