const createEdgeName = (state = 'new name', action) => {
  switch(action.type) {
    case 'SET_CREATE_EDGE_NAME':
      return action.name
    default:
      return state
  }
}

export default createEdgeName
