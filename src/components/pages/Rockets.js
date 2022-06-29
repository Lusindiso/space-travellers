import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRocketsData from '../../redux/rockets/rocketsActions';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  return (
    <div>Rockets</div>
  );
};

export default Rockets;
