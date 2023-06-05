import Preferences from "./components/content/preferences/Preferences";
import Notifications from "./components/content/notifications/Notification";
import SecuritySetting from "./components/content/security_setting/SecuritySetting";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Subscription from "./components/content/subscription/Subscription";
import Account from "./components/content/account/Account";
import Company from "./components/content/company/Company";
import Referrals from "./components/content/referrals/Referrals";
import DrawerHome from "./components/drawer/DrawerHome";

const App = () => {
  return ( 
    <Router>
    <div className="main">
      <div className="side-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <div className="">
          <Routes>
            <Route path="/drawer" element={<DrawerHome />} />
            <Route path="/" element={<Notifications />} />
            <Route path="/settings/account" element={<Account />} />
            <Route path="/settings/company" element={<Company />} />
            <Route path="/settings/subscription" element={<Subscription />} />
            <Route path="/settings/security-setting" element={<SecuritySetting />} />
            <Route path="/settings/referrals" element={<Referrals />} />
            <Route path="/settings/notifications" element={<Notifications />} />
            <Route path="/settings/preferences" element={<Preferences />} />
          </Routes>

        </div>
      </div>
    </div>
    </Router>
   );
}
 
export default App;