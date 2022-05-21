import React, { useContext } from 'react'
import BlueX from '../icons/BlueX'
import GreyX from '../icons/GreyX'
import Restart from '../../assest/redo.png'
import YellowO from '../icons/YellowO'
import BoardCard from './BoardCard'
import '../../App.css'
import { GameContext } from '../context/GameContext'
export default function Board() {
    const{squares,xnext,ties,winner,winnerLine,resetGame,playMode,activeUser}=useContext(GameContext)
    const checkUser=(user)=>{
        if(playMode==='cpu'){
            if (user===activeUser){
                return"(you)"
            }else{
              return"(cpu)"
            }
        }
    }
    return (
        <div className='board'>
            <div className='board-header'>
                <div className='board-header-icon'>
                    <BlueX width={'47px'}/>
                    <YellowO width={'50px'}/>
                </div>
                <div className='board-header-turn' >
                    {!xnext?<GreyX width={'25px'} />:<YellowO width={'25px'}/>}
                    
                    turn
                </div>
                <div>
                    <button onClick={resetGame} className='btn board-restart'>
                        <img  src={Restart} alt='Restart'/>
                    </button>
                </div>
            </div>
            <div className='board-body'>
                {
                    squares.map((square,index) => (
                        <BoardCard key={index} index={index} user={square} active={winner&&winnerLine&&winnerLine.includes(index)}/>
                    ))
                }
            </div>
            <div className='board-footer'>
                <div className='card blue'>
                    <p className='text-light'> x {checkUser('x')}</p>
                    <strong className='text-2xl'>{ties.x}</strong>
                </div>
                <div className="card light">
                    <p className='text-light'>ties</p>
                    <strong className='text-2xl'>{ties.o+ties.x}</strong>
                </div>
                <div className='card yellow'>
                    <p className='text-light'> O {checkUser('o')}</p>
                    <strong className='text-2xl'>{ties.o}</strong>
                </div>
            </div>
        </div>
    )
}
