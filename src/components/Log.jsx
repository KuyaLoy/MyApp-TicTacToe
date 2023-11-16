export default function Log({ logsTurn }) {
  return (
    <ol id="log">
      {logsTurn.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} seleccted {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
