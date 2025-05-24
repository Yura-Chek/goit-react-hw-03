import css from "./SearchBox.module.css";
export default function SearchBox({ onFilter, value }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
