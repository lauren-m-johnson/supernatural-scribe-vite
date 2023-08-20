import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage/AuthPage';
import Encounters from '../Encounters/Encounters';
import Logo from '../../components/Logo/Logo';
import EncounterForm from '../../components/EncounterForm/EncounterForm';


export default function App() {
  const [user, setUser] = useState(null);
  return (
<div id='main-container'>
      <aside>
        <Logo />
      </aside>
      <main className="App">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/encounterform" element={user ? <EncounterForm /> : <AuthPage />} />
        </Routes>
        <Encounters />
      </main>
    </div>
  );
}


