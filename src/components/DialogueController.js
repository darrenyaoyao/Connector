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
    this.changeCreateEdgeMode = this.changeCreateEdgeMode.bind(this);
  }

  createNode(nodeType) {
    this.props.addNode(nodeType);
    this.props.setCreateEdgeMode('default');
  }

  changeCreateEdgeMode(edgeMode) {
    this.props.setCreateEdgeMode(edgeMode);
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
      </div>
    );
  }
}

export default withStyles(styles)(DialogueController);
