import axios from 'axios';

const GET_MISSIONS = 'react-redux-group-project/Missions/GET_MISSIONS';
// const TOGGLE_MISSIONS = 'react-redux-group-project/Missions/TOGGLE_MISSIONS';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const getMission = (payload) => ({
  type: GET_MISSIONS, payload,
});

export const FetchMissions = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  const data = await response.data;
  console.log(data);

  const missions = [];

  data.forEach((mission) => {
    missions.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  dispatch(getMission(missions));
};

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};
export default missionReducer;
