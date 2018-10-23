const demo1JSON = '[{"group_x":61,"group_y":189,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_Any","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[],"outEdges":[0,2]},{"group_x":468,"group_y":68,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_start","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[0],"outEdges":[1]},{"group_x":859,"group_y":64,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"您可以到机场售票台领取行程单，我们也可以把行程单邮寄给您，您需要邮寄吗？","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[1],"outEdges":[]},{"group_x":470,"group_y":324,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"f_update_user_id","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[2],"outEdges":[3,4]},{"group_x":876,"group_y":322,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_ask_for_user_id","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[3],"outEdges":[5]},{"group_x":875,"group_y":490,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"f_update_phone_number","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[4],"outEdges":[6,8]},{"group_x":1248,"group_y":321,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"请提供身份证号","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[5],"outEdges":[]},{"group_x":1290,"group_y":490,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_ask_for_phone_number","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[6],"outEdges":[7]},{"group_x":1694,"group_y":490,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"请提供身份电话","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[7],"outEdges":[]},{"group_x":1293,"group_y":689,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"f_update_spring_airlines_transaction_id","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[8],"outEdges":[9,10,11]},{"group_x":1745,"group_y":690,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_ask_for_spring_airlines_transaction_id","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[9],"outEdges":[12]},{"group_x":1746,"group_y":826,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_Not_Started","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[10],"outEdges":[13]},{"group_x":1750,"group_y":989,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_Other","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[11],"outEdges":[14]},{"group_x":2120,"group_y":686,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"请提供订单号","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[12],"outEdges":[]},{"group_x":2109,"group_y":897,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"完毕","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[13,14],"outEdges":[]}]';

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
