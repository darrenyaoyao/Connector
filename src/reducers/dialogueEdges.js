const dialogueEdges = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EDGE':
      var newEdge = {
        points: action.points,
        stroke: 'black',
        strokeWidth: 5
      }
      return [
        ...state,
        newEdge
      ]
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
