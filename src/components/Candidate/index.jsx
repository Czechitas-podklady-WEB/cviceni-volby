import { VoteButton } from '../VoteButton';
import './style.css';

export const Candidate = ({ name, avatar, id, onSelect }) => {
  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <VoteButton label="Vybrat" onClick={() => onSelect(id)}/>
    </div>
  );
};
