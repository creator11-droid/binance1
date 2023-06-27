import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Crypto from "./components/Crypto";
import Dashboard from "./components/Dashboard";
import Wallet from "./components/Wallet";
import CryptoCurrencies from "./components/CryptoCurrencies";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/wallets" element={<Wallet />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route
                path="/cryptocurrencies"
                element={<CryptoCurrencies />}
              ></Route>
              <Route
                path="/cryptocurrencies/crypto/:coinId"
                element={<Crypto />}
              ></Route>
              <Route path="/crypto/:coinId" element={<Crypto />}></Route>

              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </Layout>
        </div>
        <footer>
          <Typography.Title
            level={5}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Raven Bank.plc
            <br />
            All rights reserved &copy;
          </Typography.Title>
          <Space>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
            <Link to="/dashboard" style={{ color: "white" }}>
              Dashboard
            </Link>
            <Link to="/wallet" style={{ color: "white" }}>
              Profile
            </Link>
          </Space>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
