const dialogueNodes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NODE':
      if (action.nodeType === 'STATE') {
        var color = '#e91e63';
        var name = action.nodeName;
        var type = "state";
      } else if (action.nodeType === 'FUNCTION') {
        var color = '#03a9f4';
        var name = action.nodeName;
        var type = "function";
      } else if (action.nodeType === 'RESPONSE') {
        var color = '#8bc34a';
        var name = action.nodeName;
        var type = 'response';
      }
      var dialogueNode = {
        group_x: 50,
        group_y: 50,
        node_x: 0,
        node_y: 0,
        width: 200,
        height: 100,
        cornerRadius: 20,
        fill: color,
        name: name,
        name_x: 20,
        name_y: 20,
        name_fill: 'white',
        fontSize: 20,
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
