const demo1JSON = '[{"points":[115,585,364,434],"name":"智能互动+春秋航空-获取报销凭证","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":0,"outNode":1},{"points":[464,434,563,207],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":1,"outNode":2},{"points":[464,434,739,609],"name":"通用控制-确定","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":1,"outNode":3},{"points":[839,609,1006,201],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":3,"outNode":4},{"points":[839,609,1237,724],"name":"智能互动+春秋航空-提供身份证号","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":3,"outNode":5},{"points":[1337,724,1528,439],"name":"1","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":5,"outNode":6},{"points":[1628,439,1903,213],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":6,"outNode":7},{"points":[1337,724,1509,968],"name":"2","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":5,"outNode":8},{"points":[1609,968,1751,729],"name":"智能互动+春秋航空-选择航班","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":8,"outNode":9},{"points":[1851,729,1528,439],"name":"1","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":9,"outNode":6},{"points":[1628,439,2119,436],"name":"智能互动+春秋航空-提供手机号","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":6,"outNode":10},{"points":[2219,436,2526,430],"name":"1","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":10,"outNode":11},{"points":[2626,430,2897,218],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":11,"outNode":12},{"points":[2626,430,3104,425],"name":"智能互动+春秋航空-提供验证码","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":11,"outNode":13},{"points":[3204,425,3488,421],"name":"1","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":13,"outNode":14},{"points":[3588,421,3878,648],"name":"智能互动+春秋航空-获取报销凭证","fontSize":20,"stroke":"black","strokeWidth":5,"type":"INTENT","inNode":14,"outNode":15},{"points":[3978,648,4167,901],"name":"1","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":15,"outNode":16},{"points":[4267,901,4473,698],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":16,"outNode":17},{"points":[3588,421,3811,219],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":14,"outNode":18},{"points":[1609,968,1782,1132],"name":"","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":8,"outNode":19},{"points":[1337,724,997,915,739,609],"name":"0","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":5,"outNode":3},{"points":[1851,729,2061,937,1509,968],"name":"0","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":9,"outNode":8},{"points":[2219,436,1881,589,1528,439],"name":"0","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":10,"outNode":6},{"points":[3204,425,2852,619,2526,430],"name":"0","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":13,"outNode":11},{"points":[3978,648,3643,738,3488,421],"name":"0","fontSize":20,"stroke":"#E0E0E0","strokeWidth":5,"type":"FUNCOUTPUT","inNode":15,"outNode":14}]';

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
