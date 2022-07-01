import { useSelector } from 'react-redux';
import MissionCard from './Pages/MissionCard';
import './mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr className="table-row">
            <th className="th">Missions</th>
            <th className="th">Description</th>
            <th className="th">Status</th>
            <th className="th"> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => <MissionCard key={mission.mission_id} mission={mission} />)
          }
        </tbody>
      </table>
    </>
  );
};
export default Missions;
