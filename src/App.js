import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Booking from './components/Booking';
import ConfirmedBooking from "./components/ConfirmedBooking";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// header, nav, main and footer
function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Header>
            <Nav />
          </Header>
          <Routes>
            <Route path="/little-lemon-web/" element={<Main />}></Route>
            <Route path="/little-lemon-web/About" element={<About />}></Route>
            <Route path="/little-lemon-web/Reservations" element={<Booking />}></Route>
            <Route path="/little-lemon-web/ConfirmedBooking" element={<ConfirmedBooking />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
