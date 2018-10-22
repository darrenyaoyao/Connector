const dialogueNodes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NODE':
      if (action.nodeType === 'state') {
        var color = 'red';
        var text = 'new state'
      } else if (action.nodeType === 'function'){
        var color = 'yellow'
        var text = 'new function'
      }
      var dialogueNode = {
        group_x: 50,
        group_y: 50,
        state_x: 0,
        state_y: 0,
        radius: 50,
        fill: color,
        text: text,
        text_x: -40,
        text_y: -10,
        fontSize: 20
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
    default:
      return state
  }
}

export default dialogueNodes
