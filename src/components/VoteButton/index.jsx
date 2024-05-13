import './style.css';

export const VoteButton = ({ label, onClick }) => {
  return (
    <button className="btn-vote" onClick={onClick}>
      {label}
    </button>
  );
};
