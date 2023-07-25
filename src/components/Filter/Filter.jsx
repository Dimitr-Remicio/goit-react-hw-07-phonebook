import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
// import { selectFilter } from "redux/contacts/contacts-selectors";
import { setFilter } from 'redux/contacts/contacts-filter';


const Filter = () => {
  // const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const setFilterValue = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  };
  
  return (
    
    <div className={style.filter}>
    <p>Filter</p>
    <input
      type="name"
      // value={filterValue}
      onChange={setFilterValue}
      />
  </div>
      )
      
}
      
export default Filter;
