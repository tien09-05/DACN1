import React, { Fragment } from 'react';
import Item from './item';

function ListItems(props) {
    const { meals, handleSelectMeal } = props;
    return (
        <Fragment>
            {meals.map(meal => (
                <Item name={meal.name} price={meal.price} photo={meal.photo} key={meal.id} id={meal.id} handleSelectMeal={handleSelectMeal}></Item>
            ))}
        </Fragment>
    );
}

export default ListItems;