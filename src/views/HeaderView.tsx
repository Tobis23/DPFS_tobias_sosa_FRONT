import { Link } from "react-router-dom";
import styles from './header.module.scss';
import logo from '../imagenes/logo2.png';
import Modal from '../componentes/modal/Modal';

interface Props {
  user: string;
  openModal1: () => void;
  openModal2: () => void;
  openModal3: () => void;
  openModal4: () => void;
  isOpenModal1: boolean;
  isOpenModal2: boolean;
  isOpenModal3: boolean;
  isOpenModal4: boolean;
  closeModal1: () => void;
  closeModal2: () => void;
  closeModal3: () => void;
  closeModal4: () => void;
  setUser: any;

  Actividades: any;
  Horariosventana: any;
  Unete_ya: any;
  Login: any;
  Profile: any;
}

export function HeaderView({
  user,
  openModal1,
  openModal2,
  openModal3,
  openModal4,
  isOpenModal1,
  isOpenModal2,
  isOpenModal3,
  isOpenModal4,
  closeModal1,
  closeModal2,
  closeModal3,
  closeModal4,
  setUser,
  Actividades,
  Horariosventana,
  Unete_ya,
  Login,
  Profile
}: Props) {

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" /><span>GymProyect</span>
        </Link>
      </div>

      <div className={styles.menu}>

        <button className={styles.boton} onClick={openModal4}>Actividades</button>
        <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
          <Actividades />
        </Modal>

        <button className={styles.boton} onClick={openModal3}>Horarios</button>
        <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
          <Horariosventana />
        </Modal>

        <button className={styles.boton} onClick={openModal1}>Unete ya</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <Unete_ya />
        </Modal>

        {
          !user.length
            ? <button className={styles.boton} onClick={openModal2}>Login</button>
            : <Profile setUser={setUser}/>
        }

        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <Login setUser={setUser} closeModal2={closeModal2}/>
        </Modal>

      </div>
    </div>
  )
}