import { Link } from "react-router";
import './NavigationBar.css'

export default function NavigationBar(){
    return (
        <nav>
        <Link to="/" className="links b-red" >ECG</Link>
        <Link to="/about" className="links b-blue" >Acerca</Link>
        <a href="https://github.com/calimits/codificacion-de-electrocardiograma" target="_blank" className="links b-green" >Github</a>
        </nav>
    );
} 