import React from 'react';
import monan1 from '../img/monan1.jpg'
function Home(props) {

    const styleImg = {
        width: '90%'
    }
    return (
        <div className="container-fluid mt-4">
            <div className="row text-center">
                <div className="col-4 mb-3 ">
                    <img src={monan1} alt="" style={styleImg} />
                </div>
                <div className="col-4 mb-3">
                    <img src={monan1} alt="" style={styleImg} />
                </div>
                <div className="col-4 mb-3">
                    <img src={monan1} alt="" style={styleImg} />
                </div>
                <div className="col-4 mb-3">
                    <img src={monan1} alt="" style={styleImg} />
                </div>
                <div className="col-4 mb-3">
                    <img src={monan1} alt="" style={styleImg} />
                </div>
                <div className="col-4 mb-3">
                    <img src={monan1} alt="" style={styleImg} />
                </div>
            </div>
        </div>
    );
}

export default Home;