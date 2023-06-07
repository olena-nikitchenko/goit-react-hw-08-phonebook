import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter, getFilterValue } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };
  return (
    <div className={css.Filter}>
      <label className={css.Label__filter}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilterChange}
          className={css.Input__filter}
        />
      </label>
    </div>
  );
};

export default Filter;
