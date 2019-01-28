const demo1JSON = '[{"points":[238,328,559,326],"name":"I want to listen songs","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":0,"outNode":1},{"points":[659,326,877,142],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":1,"outNode":2},{"points":[659,326,1152,324],"name":"I want to listen the song: Perfect","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":1,"outNode":3},{"points":[1252,324,1423,319],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":3,"outNode":4},{"points":[1523,319,1727,111],"name":"yes","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":4,"outNode":5},{"points":[1523,319,1739,516],"name":"no","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":4,"outNode":6}]';

const dialogueEdges = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EDGE':
      var stroke = 'black'
      var name = 'new intent'
      if (action.edgeType === 'INTENT') {
        stroke = 'black'
        name = action.edgeName
      } else if (action.edgeType === 'FUNCOUTPUT') {
        stroke = '#E0E0E0'
        name = action.edgeName
      }
      var newEdge = {
        points: action.points,
        name: name,
        fontSize: 20,
        stroke: stroke,
        strokeWidth: 5,
        type: action.edgeType,
        inNode: -1,
        outNode: -1
      }
      return [
        ...state,
        newEdge
      ]
    case 'SET_EDGE_IN_NODE':
      var newDialogueEdges = [...state];
      newDialogueEdges[action.edgeIndex].inNode = action.nodeIndex;
      return newDialogueEdges;
    case 'SET_EDGE_OUT_NODE':
      var newDialogueEdges = [...state];
      newDialogueEdges[action.edgeIndex].outNode = action.nodeIndex;
      return newDialogueEdges;
    case 'ADD_EDGE_POINTS':
      var newDialogueEdges = [...state];
      newDialogueEdges[action.index].points.push(action.points[0]);
      newDialogueEdges[action.index].points.push(action.points[1]);
      return newDialogueEdges;
    case 'CHANGE_EDGE_START_POINTS':
      var newDialogueEdges = [...state];
      newDialogueEdges[action.index].points[0] = action.points[0];
      newDialogueEdges[action.index].points[1] = action.points[1];
      return newDialogueEdges;
    case 'CHANGE_EDGE_END_POINTS':
      var newDialogueEdges = [...state];
      var length = newDialogueEdges[action.index].points.length;
      newDialogueEdges[action.index].points[length-2] = action.points[0];
      newDialogueEdges[action.index].points[length-1] = action.points[1];
      return newDialogueEdges;
    case 'DEMO1_EDGES':
      return JSON.parse(demo1JSON);
    default:
      return state;
  }
}

export default dialogueEdges;
