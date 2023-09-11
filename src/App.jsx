
import './App.css'
import CryptoDetailPage from "./Pages/CryptoDetailPage/CryptoDetailPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import {Route, Routes} from 'react-router-dom'
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";


function App() {

  return (
    <div className={"dark-mode"}>
      <Routes>
          <Route path={'/'} element={<HomePage/>}></Route>
          <Route path={'/detail/:cryptoID'} element={<CryptoDetailPage/>}></Route>

          <Route path={'*'} element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
