import PropTypes from 'prop-types';
import './ReviewCard.style.css';

const ReviewCard = ({ review, onNext, onPrev }) => {
  return (
    <div className="review-card w-full justify-between font-robotoRegular">
      <button className="review-arrow left" onClick={onPrev}>◀</button>
      <div className="review-avatar ">
      <img className="" src="/Logoperfilusuarioengranier.png" alt="" />
      </div>
      <div className="review-text">
        <p>{review.user}</p>
        <p>{review.text}</p>
      </div>
      <button className="review-arrow right " onClick={onNext}>▶</button>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default ReviewCard;
