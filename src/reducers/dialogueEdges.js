const dialogueEdges = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EDGE':
      var stroke = 'black'
      var name = 'new intent'
      if (action.edgeType === 'INTENT') {
        stroke = 'black'
        name = action.edgeName
      } else if (action.edgeType === 'FUNCOUTPUT') {
        stroke = 'gray'
        name = action.edgeName
      }
      var newEdge = {
        points: action.points,
        name: name,
        fontSize: 15,
        stroke: stroke,
        strokeWidth: 5,
        type: action.edgeType,
        inNodes: [],
        outNodes: []
      }
      return [
        ...state,
        newEdge
      ]
    case 'CHANGE_EDGE_START_POINTS':
      var newDialogueEdges = [...state];
      newDialogueEdges[action.index].points[0] = action.points[0];
      newDialogueEdges[action.index].points[1] = action.points[1];
      return newDialogueEdges;
    case 'CHANGE_EDGE_END_POINTS':
      var newDialogueEdges = [...state];
      newDialogueEdges[action.index].points[2] = action.points[0];
      newDialogueEdges[action.index].points[3] = action.points[1];
      return newDialogueEdges;
    default:
      return state;
  }
}

export default dialogueEdges;
