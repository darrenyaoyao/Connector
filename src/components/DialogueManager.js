import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import DialogueNode from './DialogueNode.js';
import DialogueEdge from './DialogueEdge.js';

class DialogueManager extends Component {
  constructor(props) {
    super(props);
    this.dragMove = this.dragMove.bind(this);
    this.createEdge = this.createEdge.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  createEdge(index) {
    var currentNodeIndex = index;
    if (this.props.createEdgeMode !== 'default') {
      if (this.props.currentEdgeIndex === -1) {
        points = [
          this.props.dialogueNodes[currentNodeIndex].group_x,
          this.props.dialogueNodes[currentNodeIndex].group_y,
          this.props.dialogueNodes[currentNodeIndex].group_x,
          this.props.dialogueNodes[currentNodeIndex].group_y,
        ]
        this.props.setCurrentEdgeIndex(this.props.dialogueEdges.length)
        this.props.addOutputEdgeToNode(currentNodeIndex, this.props.dialogueEdges.length)
        var createEdgeType = this.props.createEdgeMode
        this.props.addEdge(points, createEdgeType, this.props.createEdgeName)
        this.props.setEdgeInNode(this.props.currentEdgeIndex, currentNodeIndex)
      } else {
        var points = [
          this.props.dialogueNodes[currentNodeIndex].group_x,
          this.props.dialogueNodes[currentNodeIndex].group_y
        ]
        this.props.changeEdgeEndPoints(this.props.currentEdgeIndex, points)
        this.props.addInputEdgeToNode(currentNodeIndex, this.props.currentEdgeIndex)
        this.props.setEdgeOutNode(this.props.currentEdgeIndex, currentNodeIndex)
        this.props.setCurrentEdgeIndex(-1)
        this.props.setCreateEdgeMode('default');
      }
    }
  }

  dragMove(index, e) {
    var position = e.currentTarget.getPosition();
    var points = [position.x, position.y]
    var node = this.props.dialogueNodes[index];
    this.props.changeNodePosition(index, position);
    node.inEdges.forEach((edgeIndex) => {
      this.props.changeEdgeEndPoints(edgeIndex, points);
    })
    node.outEdges.forEach((edgeIndex) => {
      this.props.changeEdgeStartPoints(edgeIndex, points);
    })
  }

  onMouseMove(e) {
    if (this.props.createEdgeMode !== 'default' && this.props.currentEdgeIndex !== -1) {
      var points = [e.evt.offsetX, e.evt.offsetY]
      this.props.changeEdgeEndPoints(this.props.currentEdgeIndex, points)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseMove={this.onMouseMove}>
          <Layer>
            {this.props.dialogueNodes.map((node, index) => (
              <DialogueNode
                key={index}
                {...node}
                dragMove={(e) => this.dragMove(index, e)}
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
