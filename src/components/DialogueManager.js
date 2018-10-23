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
    this.onStageMouseClick = this.onStageMouseClick.bind(this);
  }

  nodeCenterPosition(node) {
    return {
      x: Math.floor(node.group_x+node.width/2),
      y: Math.floor(node.group_y+node.height/2)
    }
  }

  nodeLeftPosition(node) {
    return {
      x: node.group_x,
      y: Math.floor(node.group_y+node.height/2)
    }
  }

  createEdge(index) {
    var currentNodeIndex = index;
    if (this.props.createEdgeMode !== 'default') {
      if (this.props.currentEdgeIndex === -1) {
        var currentNode = this.props.dialogueNodes[currentNodeIndex]
        var nodeCenterPosition = this.nodeCenterPosition(currentNode)
        var points = [
          nodeCenterPosition.x,
          nodeCenterPosition.y,
        ]
        this.props.setCurrentEdgeIndex(this.props.dialogueEdges.length)
        this.props.addOutputEdgeToNode(currentNodeIndex, this.props.dialogueEdges.length)
        var createEdgeType = this.props.createEdgeMode
        this.props.addEdge(points, createEdgeType, this.props.createEdgeName)
        this.props.setEdgeInNode(this.props.currentEdgeIndex, currentNodeIndex)
      } else {
        var currentNode = this.props.dialogueNodes[currentNodeIndex]
        var nodeLeftPosition = this.nodeLeftPosition(currentNode)
        var points = [
          nodeLeftPosition.x,
          nodeLeftPosition.y
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
      var nodeLeftPosition = this.nodeLeftPosition(node)
      points = [
        nodeLeftPosition.x,
        nodeLeftPosition.y
      ]
      this.props.changeEdgeEndPoints(edgeIndex, points);
    })
    node.outEdges.forEach((edgeIndex) => {
      var nodeCenterPosition = this.nodeCenterPosition(node)
      points = [
        nodeCenterPosition.x,
        nodeCenterPosition.y,
      ]
      this.props.changeEdgeStartPoints(edgeIndex, points);
    })
  }

  onMouseMove(e) {
    if (this.props.createEdgeMode !== 'default' && this.props.currentEdgeIndex !== -1) {
      var points = [e.evt.offsetX, e.evt.offsetY]
      this.props.changeEdgeEndPoints(this.props.currentEdgeIndex, points)
    }
  }

  onStageMouseClick(e) {
    if (this.props.createEdgeMode !== 'default' && this.props.currentEdgeIndex !== -1) {
      var points = [e.evt.offsetX, e.evt.offsetY]
      this.props.addEdgePoints(this.props.currentEdgeIndex, points)
    }
  }

  render() {
    return (
      <div>
        <Stage
          width={window.innerWidth*3}
          height={window.innerHeight*3}
          onMouseMove={this.onMouseMove}
          onClick={this.onStageMouseClick}>
          <Layer>
            {this.props.dialogueEdges.map((edge, index) => (
              <DialogueEdge
                key={1000+index}
                {...edge}
              />
            ))}
            {this.props.dialogueNodes.map((node, index) => (
              <DialogueNode
                key={index}
                {...node}
                dragMove={(e) => this.dragMove(index, e)}
                createEdge={(e) => this.createEdge(index)}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default DialogueManager;
