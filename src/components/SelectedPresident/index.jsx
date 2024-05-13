import "./style.css";

export const SelectedPresident = ({ selectedPresident }) => {
  return (
    <p className="selected-president">
      {selectedPresident === null ? (
        "Vyberte svého kandidáta"
      ) : (
        <>
          <img
            src={selectedPresident.avatar}
            className="selected-president__avatar"
          />
          <strong>{selectedPresident.name}</strong>
        </>
      )}
    </p>
  );
};
