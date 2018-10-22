const currentEdgeIndex = (state = -1, action) => {
  switch(action.type) {
    case 'SET_CURRENT_EDGE_INDEX':
      return action.index
    default:
      return state
  }
}

export default currentEdgeIndex
