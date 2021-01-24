import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  openProfilePopup,
  closeProfilePopup,
} from "@/lib/slices/userSlice";
import MenuPopUp from "@/components/MenuPopUp";

import styles from "@/styles/components/Navbar.module.scss";

const Navbar = () => {
  const MenuIcon = "/icons/nav/menu.png";
  const MenuBrand = "/icons/nav/logo.png";
  const MenuClose = "/icons/nav/close.png";
  const MenuBookmark = "/icons/nav/bookmark.png";
  const MenuSearch = "/icons/nav/search.png";
  const Avatar = "/images/avatar.jpg";

  const dispatch = useDispatch();
  const { profilePopup } = useSelector(selectUser);
  const { auth } = useSelector(selectUser);

  function dispatchUserPopUp() {
    if (profilePopup) {
      dispatch(closeProfilePopup());
    } else if (!profilePopup) {
      dispatch(openProfilePopup());
    }
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__leftSide}>
          {auth ? (
            <>
              {profilePopup ? (
                <img
                  src={MenuClose}
                  alt={MenuClose}
                  className={
                    profilePopup
                      ? `${styles.nav__closeActive}`
                      : `${styles.nav__close}`
                  }
                  onClick={() => dispatchUserPopUp()}
                />
              ) : (
                <img
                  src={MenuIcon}
                  alt={MenuIcon}
                  className={styles.nav__leftSide__menu}
                  onClick={() => dispatchUserPopUp()}
                />
              )}
              <span>WIDGETS</span>
            </>
          ) : null}
        </div>
        <div className={styles.nav__brand}>
          <img src={MenuBrand} alt={MenuBrand} />
        </div>
        <div className={styles.nav__rightSide}>
          {auth ? (
            <>
              <img
                src={MenuSearch}
                alt={MenuSearch}
                className={styles.nav__rightSide__search}
              />
              <div className={styles.nav__rightSide__profile}>
                <img src={Avatar} alt={Avatar} />
              </div>
              <img
                src={MenuBookmark}
                alt={MenuBookmark}
                className={styles.nav__rightSide__bookmark}
              />
            </>
          ) : null}
        </div>
      </nav>
      <MenuPopUp profilePopup={profilePopup} avatar={Avatar} />
    </>
  );
};

export default Navbar;
