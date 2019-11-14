import {
  CREATE_HOTSPOT,
  EDIT_HOTSPOT,
  DELETE_HOTSPOT,
  TOGGLE_HOTSPOT,
  CLOSE_HOTSPOT,
} from './actions'

const INITIAL_STATE = JSON.parse(localStorage.getItem('hotspots')) || []

const hotspots = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_HOTSPOT:
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.payload.hotspot,
        },
      ]
    case EDIT_HOTSPOT:
      return state.map(hotspot => {
        if (hotspot.id === action.payload.id) {
          return {
            ...hotspot,
            [action.payload.field]: action.payload.value,
          }
        }

        return hotspot
      })
    case DELETE_HOTSPOT:
      return state.filter(hotspot => hotspot.id !== action.payload.id)
    case TOGGLE_HOTSPOT:
      return state.map(hotspot => {
        if (hotspot.id === action.payload.id) {
          return {
            ...hotspot,
            isOpen: !hotspot.isOpen,
          }
        }

        return hotspot
      })
    case CLOSE_HOTSPOT:
      return state.map(hotspot => {
        if (hotspot.id === action.payload.id) {
          return {
            ...hotspot,
            isOpen: false,
          }
        }

        return hotspot
      })
    default:
      return state
  }
}

export default hotspots
