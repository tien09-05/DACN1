import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMeal, getEditMeal } from '../actions/meals';

function ViewMenu(props) {
    const style = {
        top: '23%',
        left: '14%',
        position: 'absolute'
    }

    const meals = useSelector(state => state.meals);
    const dispatch = useDispatch();

    const handleDeleteMeal = (id) => {
        const action = deleteMeal(id);
        dispatch(action);
    }
    const handleUpdateMeal = (meal) => {
        const action = getEditMeal(meal);
        dispatch(action);
    }
    return (
        <table className="table m-auto w-75" style={style}>
            <thead>
                <tr className="table-light">
                    <th scope="col">ID</th>
                    <th scope="col">Tên món</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Ngày tạo</th>
                    <th scope="col">Ngày cập nhật</th>
                    <th scope="col">Thao tác</th>

                </tr>
            </thead>
            <tbody>
                {meals.map(meal => (
                    <tr className="table-light" key={meal.id}>
                        <th scope="row">{meal.id}</th>
                        <td>{meal.name}</td>
                        <td>{meal.price}</td>
                        <td>{meal.photo}</td>
                        <td>{meal.created_at}</td>
                        <td>{meal.updated_at}</td>
                        <td>
                            <Link to="/admin/update" className="btn btn-success" onClick={() => handleUpdateMeal(meal)}>Sửa</Link>
                            <button type="button" className="btn btn-danger ml-2" onClick={() => handleDeleteMeal(meal.id)}> Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ViewMenu;