import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Table from './components/Table';
import AdminPage from './components/AdminPage';
import Footer from './components/Footer';
import AdminUpload from './components/AdminUpload';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Navbar />}  >
            <Route path="/" exact element={<Home />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/SignUp" exact element={<SignUp />} />
            <Route path="/Table" exact element={<Table />} />
            <Route path="/AdminPage" element={<AdminPage />} />
          </Route>
          {/* <Route path="/AdminPage" element={<AdminPage />}>
            <Route path="/AdminUpload" element={<AdminUpload />} />
          </Route> */}

          {/* <Route path="/AdminPage" element={<AdminPage />}>
            <Route path="/AdminUpload" element={<AdminUpload />} />
          </Route> */}
        </Routes>
      </Router>
      <Footer></Footer>
      {/* <AdminPage></AdminPage> */}
    </>
  );
}

export default App;
