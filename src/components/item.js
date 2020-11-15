import React, { Fragment } from 'react';
// import comthitboham from ;

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
    const { name, price, photo } = props;
    const srcImg = `../img/${photo}.jpg`;
    return (
        <Fragment>
            <div className="col-3 mb-3 " style={{ height: 370 + 'px' }}>
                <img src={srcImg} alt="" style={styleImg} />
                <div className="content" style={styleContent}>
                    <span className="name" style={styleName}>{name}</span>
                    <span className="price" style={stylePrice}>{price}đ</span>
                </div>
                <button className="btn mt-3" >Chọn</button>
            </div>
        </Fragment>
    );
}

export default item;