import './GameOver.css'

const GameOver = ({onClick}) => {
  return (
    <div className="game-over-container">
    <div className="game-over-image-container">
      <img src="/game_over.jpg" alt="Game Over" />
    </div>
    <button onClick={onClick} className='btn btn-start' id='start-button'>ReStart</button>
    </div>
  );
};

export default GameOver;
