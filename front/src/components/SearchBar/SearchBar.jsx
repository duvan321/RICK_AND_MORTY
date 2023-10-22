import { useState } from "react";
import stayle from "../SearchBar/Search.module.css";
const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={stayle.search}>
      <input type="search" onChange={handleChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
};
export default SearchBar;
