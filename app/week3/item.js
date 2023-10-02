import React from 'react';
import ItemList from './item-list';

export default function Item() {
    const Item = ({ items, quantity, category }) => {
        return (
            <li>
                <p>{items}</p>
                <p>Category: {category}</p>
                <p>Quantity: {quantity}</p>
            </li>
        )
    }
}