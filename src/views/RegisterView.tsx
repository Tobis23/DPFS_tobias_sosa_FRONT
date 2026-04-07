import styles from '../componentes/unete_ya.module.scss'
import { Link } from "react-router-dom";

interface Props {
  values: {
    email: string;
    user: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function RegisterView({ values, handleInputChange, handleSubmit }: Props) {
  return (
    <div className={styles.uneteya}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container}>
          <div className={styles.title}>
            Formulario de registro
          </div>

          <div className={styles.inputs}>
            <div className={styles.inputgrupo}>
              <span>Email</span>
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.inputgrupo}>
              <span>Usuario</span>
              <input
                type="text"
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

            <button type="submit">Crear cuenta</button>
          </div>

          <div className={styles.options}>
            <Link to="/Login">¿Ya tienes cuenta? Inicia sesión aquí!</Link>
          </div>
        </div>
      </form>
    </div>
  );
}