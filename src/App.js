import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonList from "./Buttons dev/ButtonList";


function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Routes>
         <Route path="/" element={ <ButtonList/>}></Route>
      </Routes>
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
