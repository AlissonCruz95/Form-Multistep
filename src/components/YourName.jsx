import Styles from "@/styles/YourName.module.css";

const YourName = () => {

    return (
        <div className={Styles.divMain}>
            <div className={Styles.divTitle}>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="95" height="2" viewBox="0 0 95 2" fill="none">
                        <path d="M0 1L110 1.00001" stroke="#1A1A1A" />
                    </svg>
                </p>
                <h2>
                    Boas noticias!
                </h2>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="95" height="2" viewBox="0 0 95 2" fill="none">
                        <path d="M0 1L110 1.00001" stroke="#1A1A1A" />
                    </svg>
                </p>
            </div>
            <div className={Styles.divMensage}>
                <div className={Styles.divMensageOne}>
                    <h3>
                        Você está pertinho assim <span>🤏🏽</span> de completar o seu acesso...
                    </h3>
                </div>
                <div className={Styles.divMensageTwo}>
                    <h3>
                        Pra gente continuar, me fala seu <span>nome</span>:
                    </h3>
                </div>
            </div>
        </div>
    )
};

export default YourName;