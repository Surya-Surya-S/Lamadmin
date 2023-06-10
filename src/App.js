import "./style/Media.css";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import New from "./Pages/New/New";
import Single from "./Pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode";
import Order from "./Pages/order/Order";
import Delivery from "./Pages/delivery/Delivery";
import Stats from "./Pages/stats/Stats";
import Notification from "./Pages/notification/Notification";
import Health from "./Pages/system/Health";
import Setting from "./Pages/setting/Setting";
import Login from "./Pages/login/Login";
import Logout from "./Pages/logout/Logout";
import Product from "./Pages/product/Product";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />}/>
            </Route>
            <Route path="products">
              <Route index element={<Product />} />        
            </Route>
            <Route path="orders">
              <Route index element={<Order />} />
            </Route>
            <Route path="delivery">
              <Route index element={<Delivery />} />
            </Route>
            <Route path="stats">
              <Route index element={<Stats />} />
            </Route>
            <Route path="notifications">
              <Route index element={<Notification />} />
            </Route>
            <Route path="system">
              <Route index element={<Health/>} />
            </Route>
            <Route path="setting">
              <Route index element={<Setting/>} />
            </Route>
            <Route path="login">
              <Route index element={<Login/>} />
            </Route>
            <Route path="logout">
              <Route index element={<Logout/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
