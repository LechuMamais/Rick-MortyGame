import { Link } from "react-router-dom";
import './ButtonsContainer.css';

const ButtonsContainer = ({ restart, startNewGame, dispatch, UnSelectedCharacters, allCharacters }) => {
  return (
    <div className="buttons-container">
      {restart && (
        <button
          onClick={() =>
            startNewGame(dispatch, UnSelectedCharacters, allCharacters)
          }
          className="btn btn-restart"
        >
          ReStart
        </button>
      )}
      <Link to={`/`}>
        <button className="btn btn-back">Back</button>
      </Link>
    </div>
  )
}

export default ButtonsContainer;
