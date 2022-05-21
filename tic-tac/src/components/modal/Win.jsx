import React, {useContext} from 'react'
import BlueX from '../../components/icons/BlueX'
import {GameContext} from '../context/GameContext'
import YellowO from '../icons/YellowO'
export default function Win() {
    const {winner,handleReset,handleNextRound} = useContext(GameContext)
    return (
        <div className="score">
            {winner&&winner!== 'no'?(
                <>
            <p>you win!</p>
            <h3 className={`score-title ${winner==='x'?"text-blue":"text-yello"}`}>{winner === 'x'
                    ? <BlueX width={'35px'}/>
                    : <YellowO width={'35px'}/>}takes the round</h3>
                    </>
            ):(
                <h3 className='score-title text-yello '>no winner</h3>
            )}

            <div className='score__btn'>
                <button className='btn btn-sm normal-btn' onClick={handleReset}>quit</button>
                <button className='btn btn-sm btn-yellow' onClick={handleNextRound}>next round</button>
            </div>
        </div>
    )
}
