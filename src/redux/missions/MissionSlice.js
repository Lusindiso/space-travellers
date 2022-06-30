import axios from 'axios';

const GET_MISSIONS = 'react-redux-group-project/Missions/GET_MISSIONS';
const CHANGE_STATUS = 'react-redux-group-project/Missions/TOGGLE_MISSIONS';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const getMission = (payload) => ({
  type: GET_MISSIONS, payload,
});

export const changeStatus = (payload) => (
  { type: CHANGE_STATUS, payload }
);

export const changeStatusMission = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== id) return mission;
    return { ...mission, reserved: !mission.reserved };
  });
  return newState;
};
export const FetchMissions = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  const data = await response.data;

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
    case CHANGE_STATUS:
      return changeStatusMission(state, action.payload);
    default:
      return state;
  }
};
export default missionReducer;
