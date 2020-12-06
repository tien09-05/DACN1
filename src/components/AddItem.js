import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeal } from '../actions/meals';

function AddItem(props) {
    const styleForm = {
        width: '58%',
        top: ' 23%',
        left: '21%',
        position: 'absolute',
        color: 'cyan',
        fontSize: '20px',
        fontWeight: 'bold'
    }

    const [state, setState] = useState({
        name: '',
        price: '',
    });
    const dispatch = useDispatch();
    const fileInput = React.createRef();


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({
            ...state,
            [name]: value
        });
    }

    const handleSummit = (e) => {
        e.preventDefault();

        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;


        const meal = {
            name: state.name,
            price: state.price,
            photo: fileInput.current.files[0].name,
            created_at: dateTime
        };
        const action = addMeal(meal);
        dispatch(action);
        setState({
            name: '',
            price: ''
        })
        console.log(state.name);
    }
    return (


        <form style={styleForm} onSubmit={handleSummit}>
            <h1 className="text-center ">Form thêm món ăn</h1>
            <div className="form-group">
                <label htmlFor="name" >Tên món</label>
                <input type="text" className="form-control" name="name" onChange={handleInputChange} value={state.name} />
            </div>
            <div className="form-group">
                <label htmlFor="price" >Giá</label>
                <input type="text" className="form-control" name="price" onChange={handleInputChange} value={state.price} />
            </div>
            <div className="form-group">
                <label htmlFor="price" >Hình</label>
                <input type="file" className="form-control" ref={fileInput} />
            </div>

            <button type="submit" className="btn btn-success" >Thêm</button>
        </form>



    );
}

export default AddItem;