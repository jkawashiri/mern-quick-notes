import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Notes from '../Notes/Notes';
import './App.css';
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Notes user={user} />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
