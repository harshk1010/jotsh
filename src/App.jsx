import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import PhotoResultPage from "./pages/PhotoResultPage";
import BarGraphPage from "./pages/BarGraphPage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/photo-result" element={<PhotoResultPage />} />
        <Route path="/bar-graph" element={<BarGraphPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
