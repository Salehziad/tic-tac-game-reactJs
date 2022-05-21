import Start from './components/start/Start';
import Board from './components/board/Board';
import './App.css';
import Modal from './components/modal/Modal';
import { useContext } from 'react';
import { GameContext } from './components/context/GameContext';

function App() {
    const{screen}=useContext(GameContext)
    return (
        <div className='app'>
            <div className='container'>
                {screen==='start'&&<Start/>}
                {screen==='game'&&<Board/>}
            </div>
            <Modal/>
        </div>
    );
}

export default App;
