export const addNode = (nodeType, nodeName) => ({
  type: 'ADD_NODE',
  nodeType,
  nodeName
})

export const changeNodePosition = (index, position) => ({
  type: 'CHANGE_NODE_POSITION',
  index,
  position
})

export const addOutputEdgeToNode = (nodeIndex, edgeIndex) => ({
  type: 'ADD_OUTPUT_EDGE_TO_NODE',
  nodeIndex,
  edgeIndex
})

export const addInputEdgeToNode = (nodeIndex, edgeIndex) => ({
  type: 'ADD_INPUT_EDGE_TO_NODE',
  nodeIndex,
  edgeIndex
})

export const addEdge = (points, edgeType, edgeName) => ({
  type: 'ADD_EDGE',
  points,
  edgeType,
  edgeName
})

export const changeEdgeStartPoints = (index, points) => ({
  type: 'CHANGE_EDGE_START_POINTS',
  index,
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

export const setCreateEdgeMode = mode => ({
  type: 'SET_CREATE_EDGE_MODE',
  mode
})

export const setCreateEdgeName = name => ({
  type: 'SET_CREATE_EDGE_NAME',
  name
})
