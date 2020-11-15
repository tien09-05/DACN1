import React, { Fragment } from 'react';
import Item from './item';

function ListItems(props) {
    const { meals } = props;
    console.log(meals);
    return (
        <Fragment>
            {meals.map(meal => (
                <Item name={meal.name} price={meal.price} photo={meal.photo} key={meal.id}></Item>
            ))}
        </Fragment>
    );
}

export default ListItems;