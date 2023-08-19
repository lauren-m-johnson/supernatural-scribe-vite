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
        {user ? (
          <EncounterForm />
        ) : (
          <AuthPage />
        )}
      </aside>
      <main className="App">
        <Encounters />
      </main>
    </div>
  );
}


