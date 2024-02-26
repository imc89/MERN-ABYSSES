import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Info from './pages/Info';
import Index from './pages/Index';
import Creator from './pages/Creator';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/info' element={<Info/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/index' element={<Index/>}></Route>
          <Route path='/addspecie' element={<Creator/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
