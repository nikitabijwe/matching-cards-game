// Write your Card Component here
import Educative from '../Images/Cover.png';

const Card = ({card, flipped, disabled, handleChoice}) => {
    const handleClick = () => {
        // Check if the card is disabled (already matched) before handling the click
        if (!disabled) {
            // Call the handleChoice function passed as a prop with the current card
            handleChoice(card);
        }
    };
    return (
        <div className = "card" key={card.id}>
            {/* Conditionally render the card as flipped if the 'flipped' prop is true */}
            <div className ={flipped ? "flipped" : ""}>
                {/* Render the front of the card using the 'src' from the 'card' object */}
            <img src={card.src} alt="card front" className="front" />
            {/* Render the back of the card using the Educative icon image */}
            <img 
            onClick = {handleClick}
            src = {Educative}
            alt="card back"
            className="back"
            />
        </div>
    </div>
    );
};

export default Card;