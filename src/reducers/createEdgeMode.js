const createEdgeMode = (state = false, action) => {
  switch(action.type) {
    case 'SET_CREATE_EDGE_MODE':
      return action.mode
    default:
      return state
  }
}

export default createEdgeMode
