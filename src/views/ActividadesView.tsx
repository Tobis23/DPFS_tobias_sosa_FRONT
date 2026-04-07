import styles from '../componentes/actividades.module.scss'
import ejercicio from '../imagenes/ejercicio.png'

export function ActividadesView({ actividades }: any) {
  return (
    <div className={styles.actividades}>
      <div className={styles.container}>
        <div className={styles.title}>
          Actividades
        </div>

        <div className={styles.text}>
          {actividades != null &&
            actividades.map((actividad: any, index: number) => (
              <div className={styles.ejercicio} key={index}>
                <div className={styles.ejer}>
                  <img src={ejercicio} alt="ejercicio" />
                  <span>{actividad.nombre_actividad}</span>
                  <strong>Conocer</strong>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}