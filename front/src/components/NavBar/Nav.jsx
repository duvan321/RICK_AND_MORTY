import SearchBar from "../SearchBar/SearchBar";
import stayle from "../NavBar/Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Nav = ({ onSearch }) => {
  const NumRandom = Math.floor(Math.random() * (826 - 1 + 1)) + 1;

  const characters = useSelector((state) => state.characters);

  const dispatch = useDispatch();

  const agree = () => {
    dispatch(onSearch(NumRandom, characters));
  };
  return (
    <div className={stayle.div}>
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button className={stayle.botone1}>Home</button>
      </Link>
      <Link to="/abaout">
        <button className={stayle.botone2}>Abaout</button>
      </Link>
      <Link to="/favorites">
        <button className={stayle.botone3}>Favorite</button>
      </Link>
      <Link to="/">
        <button className={stayle.botone4}>Salir</button>
      </Link>
      <button className={stayle.botone5} onClick={agree}>
        Personaje Random
      </button>
    </div>
  );
};
export default Nav;
