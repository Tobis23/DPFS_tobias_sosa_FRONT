import styles from "./profile.module.scss";


interface Props {
  openProfile: boolean;
  toggleProfile: () => void;
  handleLogout: () => void;
}

export function ProfileView({ openProfile, toggleProfile, handleLogout }: Props) {
  return (
    <div className={styles.perfil}>
      <button className={styles.botonlogin} onClick={toggleProfile}>
        <i className="icon ion-md-contact"></i>
      </button>

      {openProfile && (
        <div className={styles.lista}>
          <ul className={styles.dropdown}>
            <li>
              <button className={styles.botonlogout} onClick={handleLogout}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}