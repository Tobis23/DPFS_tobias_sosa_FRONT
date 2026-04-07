import styles from '../componentes/login.module.scss'
import { Link } from "react-router-dom";

export function LoginView({
  values,
  handleInputChange,
  handleSubmit
}: any) {
  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container}>
          <div className={styles.title}>
            Iniciar Sesión
          </div>

          <div className={styles.inputs}>
            <div className={styles.inputgrupo}>
              <span>Usuario</span>
              <input
                type="text"
                autoComplete="off"
                name="user"
                value={values.user}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.inputgrupo}>
              <span>Contraseña</span>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit">Login</button>
          </div>

          <div className={styles.options}>
            <Link to="/">¿No tienes cuenta? Regístrate</Link>
          </div>
        </div>
      </form>
    </div>
  );
}