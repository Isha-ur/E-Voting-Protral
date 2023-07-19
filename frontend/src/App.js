import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Frogot from './components/forms/Forgot';
import Login from './components/forms/Login';
import RegistrationForm from './components/forms/RegistrationForm';
import { apiUrl, centralApiUrl, govApi } from './data';
import Spinner from './components/Spinner';
import Cards from './components/pages/Cards/Cards';
import Result from './components/Results/Result';
import { toast } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Layout/Home';
import PageNotFound from './components/Layout/PageNotFound';
import Profile from './components/Layout/Profile';
import ShabhaLogin from './components/Rashtrapati/ShabhaLogin';

function App() {
  const [stateData, setStateData] = useState(null);
  const [centralData, setCentralData] = useState(null);
  const [govData, setGovData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const S_data = await response.json();
      const centralResponse = await fetch(centralApiUrl);
      const C_Data = await centralResponse.json();

      setStateData(S_data);
      setCentralData(C_Data);
    } catch (error) {
      alert("Something went wrong while fetching data from the API");
    }
  }

  async function fetchDataGov() {
    try {
      const govDataResponse = await fetch(govApi);
      const G_Data = await govDataResponse.json();

      setGovData(G_Data);
      console.log(G_Data);
    } catch (error) {
      toast.error("Something went wrong while fetching data from the government API");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDataGov();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path= '/vote' element={loading === true ? <Spinner/> : <Cards stateData={stateData} centralData={centralData} govData={govData} fun = {"renderGovDataInParties"}/>}/>
        <Route path= '/political' element={loading === true ? <Spinner/> : <Cards stateData={stateData} centralData={centralData} govData={govData} fun = {"political"}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/result" element={<Result/>} />
        <Route path="/rashtrapati" element={<ShabhaLogin/>} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
