import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/homepage/Sidebar";
import Topbar from "./components/homepage/Topbar";
import Dashboard from "./components/homepage/Dashboard";
import Users from "./components/users/Users";
import Products from "./components/products/Products";
import CreateUser from "./components/users/CreateUser";
import EditUser from "./components/users/EditUser";
import CreateProduct from "./components/products/CreateProduct";
import EditProduct from "./components/products/EditProduct";
import { UserProvider } from "./components/users/UserContext";
import { ProductProvider } from "./components/products/ProductContext";

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Switch>
                <UserProvider>
                  <Route path="/" component={Dashboard} exact="true" />
                  <Route path="/users" component={Users} exact="true" />
                  <Route
                    path="/create-user"
                    component={CreateUser}
                    exact="true"
                  />
                  <Route
                    path="/edit-user/:id"
                    component={EditUser}
                    exact="true"
                  />
                  <ProductProvider>
                    <Route path="/products" component={Products} exact="true" />
                    <Route
                      path="/create-product"
                      component={CreateProduct}
                      exact="true"
                    />
                    <Route
                      path="/edit-product/:id"
                      component={EditProduct}
                      exact="true"
                    />
                  </ProductProvider>
                </UserProvider>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
