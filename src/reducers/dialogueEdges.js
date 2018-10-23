const demo1JSON = '[{"points":[161,239,468,118],"name":"智能互动+春秋航空-获取报销凭证","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":0,"outNode":1},{"points":[568,118,859,114],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":1,"outNode":2},{"points":[161,239,470,374],"name":"智能互动+春秋航空-历史报销单查询","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":0,"outNode":3},{"points":[570,374,876,372],"name":"0","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":3,"outNode":4},{"points":[570,374,875,540],"name":"1","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":3,"outNode":5},{"points":[976,372,1248,371],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":4,"outNode":6},{"points":[975,540,1290,540],"name":"0","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":5,"outNode":7},{"points":[1390,540,1694,540],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":7,"outNode":8},{"points":[975,540,1293,739],"name":"1","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":5,"outNode":9},{"points":[1393,739,1745,740],"name":"0","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":9,"outNode":10},{"points":[1393,739,1746,876],"name":"1","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":9,"outNode":11},{"points":[1393,739,1750,1039],"name":"2","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":9,"outNode":12},{"points":[1845,740,2120,736],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":10,"outNode":13},{"points":[1846,876,2109,947],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":11,"outNode":14},{"points":[1850,1039,2109,947],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":12,"outNode":14}]';

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
    case 'DEMO1_EDGES':
      return JSON.parse(demo1JSON);
    default:
      return state;
  }
}

export default dialogueEdges;
