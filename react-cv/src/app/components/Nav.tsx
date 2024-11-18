import styles from './Nav.module.css';
import { Person } from '../page';

  
export default function Nav({person} : {person : Person}) {
    return (
        <nav>
            <div>Nathaniel Guneard</div>
            <div><a href = "contact.html">Contact Nathaniel</a></div>
        </nav>
    );
} ;