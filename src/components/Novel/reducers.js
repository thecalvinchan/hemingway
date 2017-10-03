import { filterTypes } from './constants';

const filterReducer = (state = filterTypes.FILTER_TYPE_ALL, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filterType
    default:
      return state;
  }
}

const novelsReducer = (state = []) => (state) 

export {
  filterReducer,
  novelsReducer
}
