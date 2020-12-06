import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateMeal } from '../actions/meals';

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
    const meal = useSelector(state => state.editMeal);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        if (state.name !== meal.name) {
            setState({
                name: meal.name,
                price: meal.price
            })
        }
    }, [])
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

        const data = {
            id: meal.id,
            name: state.name,
            price: state.price,
            photo: fileInput.current.files[0] ? fileInput.current.files[0].name : meal.photo,
            created_at: meal.created_at,
            updated_at: dateTime,

        };

        const action = updateMeal(data);
        dispatch(action);
        history.push('/admin/viewmenu');

    }
    return (


        <form style={styleForm} onSubmit={handleSummit}>
            <h1 className="text-center ">Form Sửa món ăn</h1>
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
                <input type="file" className="form-control" name="img" ref={fileInput} />
            </div>

            <button type="submit" className="btn btn-success" >Sửa</button>
        </form>



    );
}

export default AddItem;