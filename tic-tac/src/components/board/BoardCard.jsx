import React, { useContext } from 'react'
import BlueX from '../icons/BlueX'
import YellowO from '../icons/YellowO'
import BlackX from '../icons/BlackX'
import BlackO from '../icons/BlackO'
import { GameContext } from '../context/GameContext'
export default function BoardCard({
    user = "no-user",
    active,
    index
}) {
    const{handleSquareClick
    }=useContext(GameContext)
    return (
        <div onClick={()=>handleSquareClick(index)}
            className={`card ${active && user === 'x' && "shadow-blue"}
             ${active && user === 'o' && "shadow-yellow"}
             ${ !active ? "shadow-gray":"active"}`}>
                 {(active && user==='x')?<BlackX width = {
                '65px'
            }/>: 
            user === 'x' &&< BlueX width = {
                '65px'
            } />}
             {(active && user==='o')?<BlackO width = {
                '68px'
            }/>:
            user === 'o' &&< YellowO width = {
                '68px'
            } />}
            
        </div>
    )
}
