const demo1JSON = '[{"group_x":15,"group_y":535,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_Any","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[],"outEdges":[0]},{"group_x":364,"group_y":384,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_start","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[0],"outEdges":[1,2]},{"group_x":563,"group_y":157,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"您可以到机场售票台领取行程单，我们也可以把行程单邮寄给您，您需要邮寄吗？","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[1],"outEdges":[]},{"group_x":739,"group_y":559,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_ask_for_user_id","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[2],"outEdges":[3,4]},{"group_x":1006,"group_y":151,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"请提供身份证号","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[3],"outEdges":[]},{"group_x":1237,"group_y":674,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"f_update_user_id","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[4],"outEdges":[5,7]},{"group_x":1528,"group_y":389,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_ask_for_phone_number","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[5,9],"outEdges":[6,10]},{"group_x":1903,"group_y":163,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"请提供电话号码","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[6],"outEdges":[]},{"group_x":1509,"group_y":918,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_multi_flights_selection","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[7],"outEdges":[8,19]},{"group_x":1751,"group_y":679,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"f_select_one_flight","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[8],"outEdges":[9]},{"group_x":2119,"group_y":386,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"f_check_phone_number","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[10],"outEdges":[11]},{"group_x":2526,"group_y":380,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_ask_for_confirmation_code","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[11],"outEdges":[12,13]},{"group_x":2897,"group_y":168,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"您收到的验证码是多少呢？ 请及时告诉小叮当噢。","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[12],"outEdges":[]},{"group_x":3104,"group_y":375,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"f_check_confirmation_number","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[13],"outEdges":[14]},{"group_x":3488,"group_y":371,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_ask_for_payment","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[14],"outEdges":[15,18]},{"group_x":3878,"group_y":598,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#03a9f4","name":"f_check_payment","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"function","inEdges":[15],"outEdges":[16]},{"group_x":4167,"group_y":851,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#e91e63","name":"s_done","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"state","inEdges":[16],"outEdges":[17]},{"group_x":4473,"group_y":648,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"支付成功， 如果您需要购买更多的增值服务可以继续告诉小叮当噢。","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[17],"outEdges":[]},{"group_x":3811,"group_y":169,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"请支付费用$price$, 点击进行支付， 支付时限为30分钟， 超时后自动取消。 ","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[18],"outEdges":[]},{"group_x":1782,"group_y":1082,"node_x":0,"node_y":0,"width":200,"height":100,"cornerRadius":20,"fill":"#8bc34a","name":"小叮当为您查到该乘客的$flight_num$张机票， $flight_info$, 请问想给哪个行程买行李额度呢？ 您告诉我序号就行~例如 “1”","name_x":20,"name_y":15,"name_fill":"white","fontSize":20,"type":"response","inEdges":[19],"outEdges":[]}]';

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
