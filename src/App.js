import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import NoMatch from "./Components/NoMatch/NoMatch";
import { createContext, useState } from "react";
import Order from "./Components/Order/Order";

import Review from "./Components/Review/Review";
import AdminServiceList from "./Components/AdminServiceList/AdminServiceList";
import AddService from "./Components/AddService/AddService";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import PrivateRoute from "./Components/Login/PrivateRoute";
import ServiceList from "./Components/ServiceList/ServiceList/ServiceList";


export const UserContext = createContext();
  
function App() {
  const [loggedIn,setLoggedIn]=useState({
    displayName:"",
    email:"",
})

  return (
    <UserContext.Provider value={[loggedIn,setLoggedIn]}>
      <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/order/:header">
          <Order />
        </PrivateRoute>
        <Route path="/service">
          <ServiceList/>
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/admin/service">
          <AdminServiceList />
        </Route>
        <Route path="/admin/addService">
          <AddService />
        </Route>
        <Route path="/admin/makeAdmin">
          <MakeAdmin />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
