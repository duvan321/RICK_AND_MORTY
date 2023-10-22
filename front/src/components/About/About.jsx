import style from "../About/About.module.css";
import { get_characters } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";
const About = () => {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_characters());
  }, [dispatch]);
  console.log(characters);
  return (
    <div className={style.characters}>
      {characters?.map((char) => {
        return (
          <div key={char.id} className={style.character}>
            <img src={char.image} alt="" />
            <NavLink className={style.name} to={`/detail/${char.id}`}>
              <h2>{char.name} </h2>
            </NavLink>
            <h2>{char.gender}</h2>
            <h2>{char.status}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default About;
