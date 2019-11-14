export const CREATE_HOTSPOT = '@hotspots/CREATE_HOTSPOT'

export const EDIT_HOTSPOT = '@hotspots/EDIT_HOTSPOT'

export const DELETE_HOTSPOT = '@hotspots/DELETE_HOTSPOT'

export const TOGGLE_HOTSPOT = '@hotspots/TOGGLE_HOTSPOT'

export const CLOSE_HOTSPOT = '@hotspots/CLOSE_HOTSPOT'

export const createHotspot = hotspot => ({
  type: CREATE_HOTSPOT,
  payload: {
    hotspot,
  },
})

export const editHotspot = (id, field, value) => ({
  type: EDIT_HOTSPOT,
  payload: {
    id,
    field,
    value,
  },
})

export const deleteHotspot = id => ({
  type: DELETE_HOTSPOT,
  payload: {
    id,
  },
})

export const toggleHotspot = id => ({
  type: TOGGLE_HOTSPOT,
  payload: {
    id,
  },
})

export const closeHotspot = id => ({
  type: CLOSE_HOTSPOT,
  payload: {
    id,
  },
})
