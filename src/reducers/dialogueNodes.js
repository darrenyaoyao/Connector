const demo1JSON = '[{"group_x":138,"group_y":278,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"start","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[],"outEdges":[0]},{"group_x":559,"group_y":276,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"user want to listen songs","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[0],"outEdges":[1,2]},{"group_x":877,"group_y":92,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"Which song do you want?","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[1],"outEdges":[]},{"group_x":1152,"group_y":274,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"search songs","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[2],"outEdges":[3]},{"group_x":1423,"group_y":269,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"search songs in database","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[3],"outEdges":[4,5]},{"group_x":1727,"group_y":61,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"play the song","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[4],"outEdges":[]},{"group_x":1739,"group_y":466,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"ask again","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[5],"outEdges":[]}]';

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
        name_y: 15,
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
    case 'DEMO1_NODES':
      return JSON.parse(demo1JSON);
    default:
      return state;
  }
}

export default dialogueNodes
