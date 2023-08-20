import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage/AuthPage';
import Encounters from '../Encounters/Encounters';
import Logo from '../../components/Logo/Logo';
import EncounterForm from '../../components/EncounterForm/EncounterForm';


export default function App() {
  const [user, setUser] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  function handleFormSubmit(data) {
    setSubmittedData(data);
  }
  
  return (
<div id='main-container'>
      <aside>
        <Logo />
      </aside>
      <main className="App">
        {user ? <EncounterForm /> : <AuthPage />}
        <EncounterForm onSubmit={handleFormSubmit}/>
        <Encounters submittedData={submittedData}/>
      </main>
    </div>
  );
}


