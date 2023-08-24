import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {

	return (
		<>
         <Router>
            <Routes>
               {/* <Route path="/portfolio/user-management" Component={Home} /> */}
               <Route path="/" Component={Home} />
            </Routes>
         </Router>
		</>
	);
}

export default App;
