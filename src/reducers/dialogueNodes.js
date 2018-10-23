const dialogueNodes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NODE':
      if (action.nodeType === 'STATE') {
        var color = 'red';
        var name = action.nodeName;
        var fontSize = 20;
        var type = "state";
      } else if (action.nodeType === 'FUNCTION') {
        var color = 'blue';
        var name = action.nodeName;
        var fontSize = 15;
        var type = "function";
      } else if (action.nodeType === 'RESPONSE') {
        var color = 'green';
        var name = action.nodeName;
        var fontSize = 14;
        var type = 'response';
      }
      var dialogueNode = {
        group_x: 50,
        group_y: 50,
        node_x: 0,
        node_y: 0,
        radius: 50,
        fill: color,
        name: name,
        name_x: -40,
        name_y: -10,
        name_fill: 'white',
        fontSize: fontSize,
        type: type,
        inEdges: [],
        outEdges: []
      };
      return [
        ...state,
        dialogueNode
      ];
    case 'CHANGE_NODE_POSITION':
      var newDialogueNodes = [...state];
      newDialogueNodes[action.index].group_x = action.position.x;
      newDialogueNodes[action.index].group_y = action.position.y;
      return newDialogueNodes;
    case 'ADD_OUTPUT_EDGE_TO_NODE':
      var newDialogueNodes = [...state];
      newDialogueNodes[action.nodeIndex].outEdges.push(action.edgeIndex);
      return newDialogueNodes;
    case 'ADD_INPUT_EDGE_TO_NODE':
      var newDialogueNodes = [...state];
      newDialogueNodes[action.nodeIndex].inEdges.push(action.edgeIndex);
      return newDialogueNodes;
    default:
      return state;
  }
}

export default dialogueNodes
