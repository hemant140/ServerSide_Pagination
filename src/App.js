import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import PageTable from "./components/pageTable/PageTable"
import ColumnGrouping from "./components/columnGrouping/ColumnGrouping"
import Navbar from "./components/NavBar/Navbar";
import DisplayColumn from "./components/DisplayColumn/DisplayColumn";
import Pagination from "./components/pagination/Pagination";
import BasicTable from "./components/serverPagination/ServerPagination";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pageTable" exact element={<PageTable />} />
        <Route path="/columGrouping" exact element={<ColumnGrouping />} />
        <Route path="/displaycolum" exact element={<DisplayColumn />} />
        <Route path="/pagination" exact element={<Pagination />} />
        <Route path="/serverpagination" exact element={<BasicTable />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
