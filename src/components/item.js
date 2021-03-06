import React, { Fragment } from 'react';
const styleImg = {
    width: '90%',
    height: '70%'
}
const styleContent = {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-around'
}
const styleName = {
    fontSize: '23px',
    fontWeight: 'bold',
    color: '#f2a930'
}
const stylePrice = {
    fontSize: '23px',
    fontWeight: 'bold',
}


function item(props) {

    const { name, price, photo, id, handleSelectMeal } = props;
    const soluong = 1;
    const srcImg = `../img/${photo}`;
    const handleClick = (meal) => {
        handleSelectMeal(meal);
    }
    return (
        <Fragment>
            <div className="col-3 mb-3 " style={{ height: 370 + 'px' }}>
                <img src={srcImg} alt="" style={styleImg} />
                <div className="content" style={styleContent}>
                    <span className="name" style={styleName}>{name}</span>
                    <span className="price" style={stylePrice}>{price}đ</span>
                </div>
                <button className="btn mt-3" onClick={() => handleClick({ name, price, photo, id, soluong })}> Chọn</button>
            </div>
        </Fragment>
    );
}

export default item;