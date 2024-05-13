import { useState, useEffect } from "react";
import { Candidate } from "../../components/Candidate";
import { SelectedPresident } from "../../components/SelectedPresident";
import "./style.css";

export const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedPresidentIndex, setSelectedPresidentIndex] = useState(null);

  useEffect(
    () =>
      setCandidates([
        { name: "Ferdinand Mravenec", avatar: "/avatars/candidate01.png" },
        { name: "Markéta Smetana", avatar: "/avatars/candidate02.png" },
        { name: "Beáta Skočdopolová", avatar: "/avatars/candidate03.png" },
        { name: "Lubomír Poňuchálek", avatar: "/avatars/candidate04.png" },
      ]),
    []
  );

  const handleSelect = (id) => {
    setSelectedPresidentIndex(id)
  }

  return (
    <div className="container">
      <div className="castle">
        <div className="castle__image"></div>
        <div className="castle__body">
          <h1>Nový prezident</h1>
          <SelectedPresident selectedPresident={selectedPresidentIndex === null ? null : candidates[selectedPresidentIndex]} />
        </div>
      </div>

      <h2>Kandidáti</h2>
      <div className="candidate-list">
        {candidates.map((c, index) => (
          <Candidate
            key={c.name}
            id={index}
            name={c.name}
            avatar={c.avatar}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};
