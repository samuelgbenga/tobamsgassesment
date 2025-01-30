import React from 'react';
import { PriceCardProps } from '../../interface/interface';
import styles from './PriceCard.module.css';

const PriceCard:  React.FC<PriceCardProps>  = ({emoji, price, description}) => {
  return (
    <div className={styles.priceCard}>
        <div>{emoji}</div>
        <div>{price}K</div>
        <div>{description}</div>
    </div>
  )
}

export default PriceCard;