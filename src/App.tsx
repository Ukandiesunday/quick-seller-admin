import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/sharedLayouts/SharedLayout";
import Overview from "./Pages/Overview";
import Category from "./Pages/Category";
import Customers from "./Pages/Customers";
import AdsManager from "./Pages/AdsManager";
import NewsLetter from "./Pages/NewsLetter";
import Settings from "./Pages/Settings";
import PaidPromotion from "./Pages/PaidPromotion";
import PayoutRequest from "./Pages/PayoutRequest";
import ReferralTracker from "./Pages/ReferralTracker";
import Orders from "./Pages/Orders";
import DispatchRiders from "./Pages/DispatchRiders";
import PremiumVendors from "./Pages/PremiumVendors";
import Vendors from "./Pages/Vendors";
import SingleVendor from "./Pages/SingleVendor";
import ProfileSettings from "./Pages/ProfileSettings";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />} path="/">
            <Route index element={<Overview />} />
            <Route element={<Category />} path="/category" />
            <Route element={<Customers />} path="/customers/" />
            <Route
              element={<DispatchRiders />}
              path={"customers/dispatch riders"}
            />
            <Route
              element={<PremiumVendors />}
              path={"/customers/premium vendors"}
            />
            <Route element={<Vendors />} path={"/customers/vendors"} />
            <Route element={<SingleVendor />} path={"/customers/vendors/:id"} />
            <Route element={<AdsManager />} path="/ads manager" />
            <Route element={<NewsLetter />} path="/newsletter" />
            <Route element={<Settings />} path="/settings" />
            <Route element={<PaidPromotion />} path="/paid promotion" />
            <Route element={<PayoutRequest />} path="/payout request" />
            <Route element={<ReferralTracker />} path="/referral tracker" />
            <Route element={<Orders />} path="/orders" />
            <Route element={<ProfileSettings />} path="/profileSetting" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
