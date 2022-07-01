import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './MissionCard.css';
import { changeStatus } from '../../redux/missions/MissionSlice';

const MissionCard = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr className="innerTable-row">
        <td className="bord">{mission.mission_name}</td>
        <td>{mission.description}</td>
        <td className="btn-act">{mission.reserved ? <p className="act-user">Active User</p> : <p className="not-act">Not Member</p>}</td>
        <td>
          {(
          mission.reserved ? <button type="button" className="leave-btn" onClick={() => dispatch(changeStatus(mission.mission_id))}>Leave mission</button> : <button type="button" className="join-btn" onClick={() => dispatch(changeStatus(mission.mission_id))}>Join mission</button>
        )}
        </td>
      </tr>
    </>
  );
};
MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
export default MissionCard;
