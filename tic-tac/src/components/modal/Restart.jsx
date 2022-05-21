import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { ModalContext } from '../context/ModalContext'

export default function Restart() {
  const {handleReset} = useContext(GameContext)
  const {hideModal} = useContext(ModalContext)
  return (
    <div className='score'>
        <h3 className='restart-title'> restart game ?</h3>
        <div className='score__btn'>
            <button className='btn btn-sm normal-btn' onClick={hideModal}>no, cancel</button>
            <button className='btn btn-sm btn-yellow' onClick={handleReset}>yes, restart</button>
        </div>
    </div>
  )
}
