import Head from "next/head";
import Styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={Styles.divMain}>
          <div className={Styles.divColor}>
            <div className={Styles.divCircleL}></div>
            <div className={Styles.divCircleR}></div>
            {/* Mensagens */}
          </div>
          <div className={Styles.divArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              color="#FFF"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          </div>
          <div className={Styles.divBottom}>
            {/* Confirm e Voltar */}
          </div>
          <div className={Styles.divProgres}>
            <div className={Styles.divProgresStars}></div>
          </div>
        </div>
      </main>
    </>
  );
}
