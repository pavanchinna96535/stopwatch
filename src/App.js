
import { Provider } from 'react-redux';
import './App.css';
import { lazy, Suspense } from 'react';
import Stopwatch from "./components/stopwatch.jsx"
import Store from "./redux/store.js"
import {BrowserRouter,Route, Routes} from "react-router-dom"
const Counter=lazy(()=>import("./components/counter.jsx"))


function App() {
  return (
    <div className="App">

      <Provider store={Store}>
        <BrowserRouter>
        
          <Routes>
            <Route path='/stopwatch' element={<Stopwatch/>}></Route>
            
            <Route path='/counter' element={
              <Suspense fallback={<div>loading counter...</div>}>
                <Counter/>
              </Suspense>
            }>
            </Route>
          </Routes>
        
        </BrowserRouter>
         
      </Provider>
      
    </div>
  );
}

export default App;
