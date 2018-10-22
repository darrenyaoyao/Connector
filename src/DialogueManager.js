import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import DialogueNode from './components/DialogueNode.js'
import DialogueEdge from './components/DialogueEdge.js'

class DialogueManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogueNodes: [],
      dialogueEdges: [],
      currentEdgeIndex: -1,
      createEdgeMode: false
    };
    this.createNode = this.createNode.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.changeCreateEdgeMode = this.changeCreateEdgeMode.bind(this);
    this.createEdge = this.createEdge.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  createNode(mode) {
    if (mode === 'state') {
      var color = 'red';
      var text = 'new state'
    } else if (mode === 'function'){
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
    this.setState(state => ({
      dialogueNodes: [...state.dialogueNodes, dialogueNode],
      createEdgeMode: false
    }));
  }

  changeCreateEdgeMode() {
    this.setState({
      createEdgeMode: true
    })
  }

  createEdge(index) {
    var currentNodeIndex = index;
    if (this.state.createEdgeMode === true) {
      if (this.state.currentEdgeIndex === -1) {
        var newLine = {
          points: [
            this.state.dialogueNodes[currentNodeIndex].group_x,
            this.state.dialogueNodes[currentNodeIndex].group_y,
            this.state.dialogueNodes[currentNodeIndex].group_x,
            this.state.dialogueNodes[currentNodeIndex].group_y,
          ],
          stroke: 'black',
          strokeWidth: 5
        }
        this.setState({
          dialogueEdges: [...this.state.dialogueEdges, newLine],
          currentEdgeIndex: this.state.dialogueEdges.length
        })
      } else {
        var lineData = Object.assign({}, this.state.dialogueEdges[this.state.currentEdgeIndex]);
        lineData.points[2] = this.state.dialogueNodes[currentNodeIndex].group_x;
        lineData.points[3] = this.state.dialogueNodes[currentNodeIndex].group_y;
        var lines = Object.assign([], this.state.dialogueEdges);
        lines[this.state.currentEdgeIndex] = lineData;
        this.setState({
          dialogueEdges: lines,
          currentEdgeIndex: -1
        })
      }
    }
  }

  dragEnd(index, e) {
    var position = e.currentTarget.getPosition();
    var newState = Object.assign({}, this.state);
    newState.dialogueNodes[index].group_x = position.x;
    newState.dialogueNodes[index].group_y = position.y;
    this.setState(state => newState)
  }

  onMouseMove(e) {
    if (this.state.createEdgeMode === true && this.state.currentEdgeIndex !== -1) {
      var lineData = Object.assign({}, this.state.dialogueEdges[this.state.currentEdgeIndex]);
      lineData.points[2] = e.evt.offsetX;
      lineData.points[3] = e.evt.offsetY;
      var lines = [...this.state.dialogueEdges];
      lines[this.state.currentEdgeIndex] = lineData;
      this.setState({
        dialogueEdges: lines
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.createNode('state')}>
          create state
        </button>
        <button onClick={() => this.createNode('function')}>
          create function
        </button>
        <button onClick={this.changeCreateEdgeMode}>
          create intent line
        </button>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseMove={this.onMouseMove}>
          <Layer>
            {this.state.dialogueNodes.map((state, index) => (
              <DialogueNode
                state={state}
                key={index}
                dragEnd={(e) => this.dragEnd(index, e)}
                createEdge={(e) => this.createEdge(index)}
              />
            ))}
            {this.state.dialogueEdges.map((line, index) => (
              <DialogueEdge
                key={1000+index}
                line={line}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default DialogueManager;
