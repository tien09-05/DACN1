import React, { useEffect, useState } from 'react';
import ListItems from './ListItems';
import axios from 'axios';
function Home(props) {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('/meals');
            setMeals(res.data);
        }
        fetchData();
    }, [])
    return (
        <div className="container-fluid mt-4">
            <div className="row text-center">
                <ListItems meals={meals}></ListItems>
            </div>
        </div>
    );
}

export default Home;