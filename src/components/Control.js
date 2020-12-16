import React, { useState } from 'react';


function Control(props) {
    const { handleSearch, handleFilter } = props;
    const [keyword, setKeyword] = useState("");
    const handleChange = (e) => {
        setKeyword(e.target.value);
    }
    const handleClick = (keyword) => {
        handleSearch(keyword);
    }

    const handleChangeSelect = (e) => {
        handleFilter(e.target.value);
    }
    return (

        <div className="form-group d-flex mb-0 mr-4">

            <input type="text" className="form-control" name="keyword" onChange={handleChange} />
            <button type="button" className="btn btn-primary " onClick={() => handleClick(keyword)}> Tìm kiếm</button>
            <select onChange={handleChangeSelect}>
                <option value="0">Lọc theo</option>
                <option value="2">Giá giảm dần</option>
                <option value="1">Giá tăng dần</option>
            </select>
        </div>


    );
}

export default Control;