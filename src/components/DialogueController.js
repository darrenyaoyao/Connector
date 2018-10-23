import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

class DialogueController extends Component {
  constructor(props) {
    super(props);
    this.createNode = this.createNode.bind(this);
    this.dragMove = this.dragMove.bind(this);
    this.changeCreateEdgeMode = this.changeCreateEdgeMode.bind(this);
    this.createEdge = this.createEdge.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  createNode(nodeType) {
    this.props.addNode(nodeType);
    this.props.setCreateEdgeMode('default');
  }

  changeCreateEdgeMode(edgeMode) {
    this.props.setCreateEdgeMode(edgeMode);
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
        this.props.addEdge(points, createEdgeType)
      } else {
        var points = [
          this.props.dialogueNodes[currentNodeIndex].group_x,
          this.props.dialogueNodes[currentNodeIndex].group_y
        ]
        this.props.changeEdgeEndPoints(this.props.currentEdgeIndex, points)
        this.props.addInputEdgeToNode(currentNodeIndex, this.props.currentEdgeIndex)
        this.props.setCurrentEdgeIndex(-1)
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
        <Button
          color='secondary'
          variant='contained'
          className={classes.button}
          onClick={() => this.createNode('state')}>
          create state
        </Button>
        <Button
          color='secondary'
          variant='contained'
          className={classes.button}
          onClick={() => this.createNode('function')}>
          create function
        </Button>
        <Button
          color='secondary'
          variant='contained'
          className={classes.button}
          onClick={() => this.createNode('response')}>
          create response
        </Button>
        <Button
          color='primary'
          variant='contained'
          className={classes.button}
          onClick={() => this.changeCreateEdgeMode('intent')}>
          create intent line
        </Button>
        <Button
          color='primary'
          variant='contained'
          className={classes.button}
          onClick={() => this.changeCreateEdgeMode('funcOutput')}>
          create function output line
        </Button>
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

export default withStyles(styles)(DialogueManager);