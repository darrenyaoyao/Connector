import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import DialogueNode from './DialogueNode.js'
import DialogueEdge from './DialogueEdge.js'

class DialogueManager extends Component {
  constructor(props) {
    super(props);
    this.createNode = this.createNode.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.changeCreateEdgeMode = this.changeCreateEdgeMode.bind(this);
    this.createEdge = this.createEdge.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  createNode(mode) {
    this.props.addNode(mode);
    this.props.setCreateEdgeMode(false);
  }

  changeCreateEdgeMode() {
    this.props.setCreateEdgeMode(true);
  }

  createEdge(index) {
    var currentNodeIndex = index;
    if (this.props.createEdgeMode === true) {
      if (this.props.currentEdgeIndex === -1) {
        points = [
          this.props.dialogueNodes[currentNodeIndex].group_x,
          this.props.dialogueNodes[currentNodeIndex].group_y,
          this.props.dialogueNodes[currentNodeIndex].group_x,
          this.props.dialogueNodes[currentNodeIndex].group_y,
        ]
        this.props.setCurrentEdgeIndex(this.props.dialogueEdges.length)
        this.props.addEdge(points)
      } else {
        var points = [
          this.props.dialogueNodes[currentNodeIndex].group_x,
          this.props.dialogueNodes[currentNodeIndex].group_y
        ]
        this.props.changeEdgeEndPoints(this.props.currentEdgeIndex, points)
        this.props.setCurrentEdgeIndex(-1)
      }
    }
  }

  dragEnd(index, e) {
    var position = e.currentTarget.getPosition();
    this.props.changeNodePosition(index, position)
  }

  onMouseMove(e) {
    if (this.props.createEdgeMode === true && this.props.currentEdgeIndex !== -1) {
      var points = [e.evt.offsetX, e.evt.offsetY]
      this.props.changeEdgeEndPoints(this.props.currentEdgeIndex, points)
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
            {this.props.dialogueNodes.map((node, index) => (
              <DialogueNode
                key={index}
                {...node}
                dragEnd={(e) => this.dragEnd(index, e)}
                createEdge={(e) => this.createEdge(index)}
              />
            ))}
            {this.props.dialogueEdges.map((edge, index) => (
              <DialogueEdge
                key={1000+index}
                {...edge}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default DialogueManager;
