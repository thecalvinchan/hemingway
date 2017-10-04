import { filterTypes } from './constants';

const filterReducer = (state = filterTypes.FILTER_TYPE_ALL, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filterType
    default:
      return state;
  }
}

const entitiesReducer = (state = {}) => (state) 

export {
  filterReducer,
  entitiesReducer
}
