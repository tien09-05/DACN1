import React, { useEffect, useState } from 'react';
import ListItems from './ListItems';
import { useDispatch, useSelector } from 'react-redux';
import { getMeals } from '../actions/meals';
import { addMealCart, decrease, deleteMealCart, increase } from '../actions/cart';
import Control from './Control';
import axios from "axios"

function Home(props) {
    let meals = useSelector(state => state.meals);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = getMeals();
        dispatch(action);
    }, [dispatch]);

    const handleSelectMeal = (meal) => {
        const action = addMealCart(meal);
        dispatch(action);
    }

    const tinhTongTien = () => {
        let tong = 0;
        cart.forEach(item => {
            tong += item.soluong * item.price;
        });
        return tong;
    }
    const handleIncrease = (id) => {
        const action = increase(id);
        dispatch(action);
    }
    const handleDecrease = (id) => {
        const action = decrease(id);
        dispatch(action);
    }
    const handleDelete = (id) => {
        const action = deleteMealCart(id);
        dispatch(action);
    }
    // search
    const [keyword, setKeyword] = useState("");
    const handleSearch = (keyword) => {
        setKeyword(keyword);
    }
    if (keyword) {
        meals = meals.filter(meal => meal.name.indexOf(keyword) !== -1)
    }

    // fillter
    const [select, setSelect] = useState("0");
    const handleFilter = (value) => {
        setSelect(value);
    }
    if (select === "0") {
        meals.sort(function (a, b) { return a.id - b.id });

    } else if (select === "1") {
        meals.sort(function (a, b) { return a.price - b.price });
    } else {
        meals.sort(function (a, b) { return b.price - a.price });

    }
    return (
        <div className="container-fluid mt-4 pb-5">
            <div className="row text-center">
                <Control handleSearch={handleSearch} handleFilter={handleFilter}></Control>
            </div>
            <div className="row text-center">
                <ListItems meals={meals} handleSelectMeal={handleSelectMeal}></ListItems>
            </div>


            {/* Cart */}
            <h1 className="text-center">Danh sách món đã chọn</h1>
            {cart.length > 0 ? <div className="row">
                <table className="table table-bordered w-50 m-auto pb-5">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">STT</th>
                            <th scope="col">Tên món</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Giá </th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col">Thao tác</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr className="text-center" key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><img src={`../img/${item.photo}`} alt="" /></td>
                                <td>
                                    <h4 onClick={() => handleDecrease(item.id)} style={{ cursor: 'pointer' }}>-</h4>
                                    {item.soluong}
                                    <h4 onClick={() => handleIncrease(item.id)} style={{ cursor: 'pointer' }}>+</h4>
                                </td>
                                <td>{item.soluong * item.price}</td>
                                <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)}>Xóa</button></td>

                            </tr>
                        ))}

                    </tbody>
                </table>
                <h2 className="w-75 text-right">Tổng tiền :{tinhTongTien()}</h2>
            </div>
                : <h1 className="text-center">Chưa chọn món nào</h1>}
        </div>
    );
}

export default Home;