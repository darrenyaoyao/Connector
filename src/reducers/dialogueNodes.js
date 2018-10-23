const dialogueNodes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NODE':
      if (action.nodeType === 'state') {
        var color = 'red';
        var name = 'new state';
        var fontSize = 20;
        var type = "state";
      } else if (action.nodeType === 'function') {
        var color = 'yellow';
        var name = 'new function';
        var fontSize = 15;
        var type = "function";
      } else if (action.nodeType === 'response') {
        var color = 'blue';
        var name = 'new response';
        var fontSize = 20;
        var type = 'response';
      }
      var dialogueNode = {
        group_x: 50,
        group_y: 50,
        state_x: 0,
        state_y: 0,
        radius: 50,
        fill: color,
        name: name,
        name_x: -40,
        name_y: -10,
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
