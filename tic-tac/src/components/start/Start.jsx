import React, {useContext} from 'react'
import Xplayer from '../icons/Xplayer'
import Oplayer from '../icons/Oplayer'
import blackX from '../../assest/blue-x.png'
import yellowO from '../../assest/yello-o.png'
import {GameContext} from '../context/GameContext'
export default function Start() {
    const {activeUser, setActiveUser, changePlayMode} = useContext(GameContext)
    return (

        <div className='start'>
            <div className='start__header'>
                <img src={blackX} alt='blackX'/>
                <img src={yellowO} alt='yellowO'/>
            </div>
            <h1 className='text-lg'>
                <span className='.text-blue '>by </span>
                <a target='_blank' href='https://www.linkedin.com/in/saleh-ziad-6b40a1214' rel="noreferrer">saleh ziad</a>
            </h1>
            <div className='card shadow-gray'>
                <h1 className='text-lg'>pick layer 1's mark</h1>
                <div className="start__players">
                    <span
                        className={activeUser === "x"
                        ? "start__players--active"
                        : ""}
                        onClick={() => setActiveUser("x")}>
                        <Xplayer
                            color={activeUser === "x"
                            ? "dark"
                            : "light"}/>
                    </span>
                    <span
                        className={activeUser === "o"
                        ? "start__players--active"
                        : ""}
                        onClick={() => setActiveUser("o")}>
                        <Oplayer
                            color={activeUser === "o"
                            ? "dark"
                            : "light"}/>
                    </span>
                </div>
                <p className='text-light'>
                    remember: x goes first</p>
            </div>
            <div className='start__btns'>
                <button className='btn  btn-yellow' onClick={() => changePlayMode('cpu')}>new game (vs CPU)</button>
                <button className='btn btn-blue ' onClick={() => changePlayMode('user')}>new game (vs player)</button>
            </div>
        </div>
    )
}
