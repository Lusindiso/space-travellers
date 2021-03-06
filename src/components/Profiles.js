import React from 'react';
import Profilemission from './Profilemission';
import RocketList from './Pages/RocketList';

const Profiles = () => (
  <div className="profileContainer">
    <hr />
    <div className="row profileRow">
      <div className="missionProfile col-6">
        <h3>My Missions</h3>
        <div className="missionList">
          <ul>
            <Profilemission />
          </ul>
        </div>
      </div>
      <div className="rocketProfile col-6">
        <h3>My Rockets</h3>
        <div className="rocketList">
          <RocketList />
        </div>
      </div>
    </div>
  </div>
);
export default Profiles;
