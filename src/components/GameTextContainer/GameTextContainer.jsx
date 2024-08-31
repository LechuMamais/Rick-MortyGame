import React from 'react'
import './GameTextContainer.css'

const GameTextContainer = ({charName, correctCharacter}) => {
  return (
    <div className="game-text-container cloud-bg-effect">
      <h3 className="texture-text">They are all {charName}, but...</h3>
      <h2 className="texture-text">
        Who is <span>{correctCharacter?.name}</span> ...?
      </h2>
    </div>
  )
}

export default GameTextContainer
