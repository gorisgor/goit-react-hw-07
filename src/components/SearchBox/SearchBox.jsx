import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilters = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };
  
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(evt) => handleFilters(evt.target.value)}
      />
    </div>
  );
}
