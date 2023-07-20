import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

// header, nav, main and footer 
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header>
          <Nav/>
        </Header>
        <Main></Main>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
