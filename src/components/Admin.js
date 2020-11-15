import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';
import ViewMenu from './ViewMenu';

const styleBackground = {
    backgroundImage: "url('../img/bgadmin.jpg')",
    backgroundSize: 'cover',
    height: '92.9vh'
}
const styleLink = {
    marginTop: '30%',
    border: '1.4px solid #5fcf8e',
}
function Admin(props) {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 list-group text-center p-0">
                        <Link to="/admin/viewmenu" className="list-group-item list-group-item-action" style={styleLink}>View Menu</Link>
                        <Link to="/admin/add" className="list-group-item list-group-item-action" style={styleLink}>Add Item</Link>
                        <Link to="/admin/update" className="list-group-item list-group-item-action" style={styleLink}>Update Item</Link>
                    </div>
                    <div className="col-9" style={styleBackground}>
                        <Switch>
                            <Route path="/admin/add" component={AddItem}></Route>
                            <Route path="/admin/viewmenu" component={ViewMenu}></Route>
                            <Route path="/admin/update" component={UpdateItem}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Admin;