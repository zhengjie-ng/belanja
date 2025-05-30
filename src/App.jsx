import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import LoginPage from "./routes/LoginPage";
import Welcome from "./routes/Welcome";
import HomePage from "./routes/HomePage";
import Navigation from "./components/Navigation";
import FriendsPage from "./routes/FriendsPage";
import ScanPage from "./routes/ScanPage";
import BillsPage from "./routes/BillsPage";
import WalletPage from "./routes/WalletPage";
import AccountPage from "./routes/AccountPage";
import PaymentPage from "./routes/PaymentPage";
import SettlePage from "./routes/SettlePage";
import Bill from "./routes/Bill";
import Receipt from "./routes/Receipt";
import Notifications from "./routes/Notifications";
import PageNotFound from "./routes/PageNotFound";
import SignUpPage from "./routes/SignUpPage";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigation />}>
              <Route path="home" element={<HomePage />} />
              <Route path="friends" element={<FriendsPage />} />
              <Route path="bills" element={<BillsPage />} />
              <Route path="wallet" element={<WalletPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="bill/:id" element={<Bill />} />
              <Route path="bill/receipt/:id" element={<Receipt />} />
            </Route>
            <Route path="SignUpPage" element={<SignUpPage />} />
            <Route path="paymentMerchant" element={<PaymentPage />} />
            <Route path="scan" element={<ScanPage />} />
            <Route path="settle" element={<SettlePage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
