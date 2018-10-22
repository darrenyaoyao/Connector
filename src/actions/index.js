export const addNode = nodeType => ({
  type: 'ADD_NODE',
  nodeType
})

export const changeNodePosition = (index, position) => ({
  type: 'CHANGE_NODE_POSITION',
  index,
  position
})

export const addEdge = points => ({
  type: 'ADD_EDGE',
  points
})

export const changeEdgeEndPoints = (index, points) => ({
  type: 'CHANGE_EDGE_END_POINTS',
  index,
  points
})

export const setCurrentEdgeIndex = index => ({
  type: 'SET_CURRENT_EDGE_INDEX',
  index
})

export const setCreateEdgeMode = modeBool => ({
  type: 'SET_CREATE_EDGE_MODE',
  modeBool
})

