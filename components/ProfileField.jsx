import styles from "@/styles/components/ProfileField.module.scss";

const ProfileField = ({ fieldName, fieldIcon }) => {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldContainer__fieldBox}>
        <div className={styles.fieldContainer__fieldBox__icon}>
          <img
            src={`/icons/auth/${fieldIcon}.png`}
            alt={`${fieldIcon} input icon`}
          />
        </div>
        <p>{fieldName}</p>
      </div>
    </div>
  );
};

export default ProfileField;
