import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
    className?: string;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children }) => {
    const classes = '${styles.card} ${className}'.trim()

    return <div className={classes}>{children}</div>;
}

export default Card;