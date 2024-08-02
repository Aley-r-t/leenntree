import Image from "next/image";
import styles from "./page.module.css";
import './index.css';
import { FacebookIcon, InstagramIcon } from "../components/icons";


interface BotonProps {
  text: string;
  url: string;
  icon: React.FC; 
}

const Boton: React.FC<BotonProps> = ({ text, url, icon: Icon }) => (
  <button className="hola">
    <a href={url} className="button-link">
      {text}
      <Icon /> {}
    </a>
  </button>
);

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Hola Mundo</h1>
      </div>
      <div className="xd">
        <img src="https://www.autoplan.pe/img/bcp-logo.png" alt="BCP Logo" />
      </div>
      <div>
        <input className="puntual" type="text" />
      </div>
      <div>
        <input className="puntual" type="text" />
      </div>
      <div>
        <input className="puntual" type="text" />
      </div>
      <div>
        <Boton text="Facebook" url="https://facebook.com" icon={FacebookIcon} />
        <Boton text="Instagram" url="https://instagram.com" icon={InstagramIcon} />
        
      </div>
    </main>
  );
}
