import { useForm } from "react-hook-form";

import ProfileField from "./ProfileField";
import styles from "@/styles/components/MenuPopUp.module.scss";

const MenuPopUp = ({ profilePopup, avatar }) => {
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const UploadIcon = "/icons/nav/upload.png";
  const SyncIcon = "/icons/nav/sync.png";
  const CollapseIcon = "/icons/nav/collapse.png";
  const LogoutIcon = "/icons/nav/logout.png";

  const profileFields = [
    {
      fieldIcon: "name",
      fieldName: "Gabriel",
    },
    {
      fieldIcon: "title",
      fieldName: "UI/UX designer & Front-end Developer",
    },
    {
      fieldIcon: "email",
      fieldName: "cruceanugabriel93@gmail.com",
    },
    {
      fieldIcon: "password",
      fieldName: "Password",
    },
  ];

  const profileNotifications = [
    {
      profileName: "Monday",
      profileActive: false,
    },
    {
      profileName: "Tuesday",
      profileActive: true,
    },
    {
      profileName: "Wednesday",
      profileActive: false,
    },
    {
      profileName: "Thursday",
      profileActive: true,
    },
  ];

  return (
    <div
      className={styles.menuPopUp}
      className={
        profilePopup
          ? `${styles.menuPopUp} ${styles.menuPopUpActive}`
          : `${styles.menuPopUp}`
      }
    >
      <ul className={styles.menuPopUp__header}>
        <li className={styles.menuPopUp__header__upload}>
          <img src={UploadIcon} alt="Upload Icon" />
        </li>
        <li className={styles.menuPopUp__header__avatar}>
          <img src={avatar} alt="avatar" />
        </li>
        <li className={styles.menuPopUp__header__sync}>
          <img src={SyncIcon} alt="Sync Icon" />
        </li>
      </ul>
      <div>
        {profileFields.map((field) => (
          <ProfileField
            key={field.fieldName}
            fieldName={field.fieldName}
            fieldIcon={field.fieldIcon}
          />
        ))}
      </div>

      <div className={styles.menuPopUp__body}>
        <h3>EMAIL NOTIFICATION</h3>
        {profileNotifications.map((notification) => (
          <div className={styles.menuPopUp__body__notification}>
            <p>{notification.profileName}</p>
            <input
              className={styles.menuPopUp__body__notification__switch}
              type="checkbox"
            />
          </div>
        ))}
      </div>

      <ul className={styles.menuPopUp__footer}>
        <li className={styles.menuPopUp__footer__collapse}>
          <img src={CollapseIcon} alt="Collapse Icon" />
        </li>
        <li className={styles.menuPopUp__footer__save}>
          <span>SAVING...</span>
        </li>
        <li className={styles.menuPopUp__footer__logout}>
          <img src={LogoutIcon} alt="Logout Icon" />
        </li>
      </ul>
    </div>
  );
};

export default MenuPopUp;
