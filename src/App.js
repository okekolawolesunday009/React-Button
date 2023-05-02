import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Step from "./StepperAnimation/Step";
// import ButtonList from "./Buttons dev/ButtonList";
// import InputList from "./Inputs dev/InputList";
import HomePage from "./Stepper/pages/HomePage";
import { FirstPage, MainPage, SecondPage } from "./Stepper/pages/Pages";
import InputList from "./Inputs dev/InputList";
// import { FirstPage, MainPage, SecondPage } from "./pages/Pages";


function App() {

  return (
    <div className="">
      <BrowserRouter>
    
    
      <Routes>
      {/* <Route path='/' element={<MainPage/>}/> */}
      
        <Route path='/' element ={<InputList/>}></Route>
         {/* <Route path="/" element={ <ButtonList/>}></Route> */}
         {/* <Route path="/" element={ <Step/>}></Route> */}
         {/* <Route path="/" element={ <Step/>}></Route> */}

      
      </Routes>
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
