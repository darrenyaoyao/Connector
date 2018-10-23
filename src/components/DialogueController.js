import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { graph2text, saveTextToFile } from '../actions/graph2text'

const pinkTheme = createMuiTheme({
  palette: {
    primary: pink,
  },
});

const lightBlueTheme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});

const lightGreenTheme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
})

class DialogueController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      createPayload: {
        mode: 'NODE',
        type: 'STATE'
      },
      title: 'STATE',
      name: 'new name',
      intentSelected: false,
      funcOutputSelected: false
    };
    this.createNode = this.createNode.bind(this);
    this.changeCreateEdgeMode = this.changeCreateEdgeMode.bind(this);
    this.handleClickDialogOpen = this.handleClickDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.intentSelectedValue = this.intentSelectedValue.bind(this);
    this.funcOutputSelectedValue = this.funcOutputSelectedValue.bind(this);
    this.generateOutput = this.generateOutput.bind(this);
  }

  intentSelectedValue() {
    if (this.props.createEdgeMode === 'INTENT') {
      return true;
    } else {
      return false;
    }
  }

  funcOutputSelectedValue() {
    if (this.props.createEdgeMode === 'FUNCOUTPUT') {
      return true;
    } else {
      return false;
    }
  }

  createNode(nodeType) {
    this.setState({
      createPayload: {
        mode: 'NODE',
        type: nodeType
      },
      title: nodeType
    });
    this.handleClickDialogOpen();
  }

  changeCreateEdgeMode(edgeMode) {
    this.setState({
      createPayload: {
        mode: 'EDGE',
        type: edgeMode
      },
      title: edgeMode
    });
    this.handleClickDialogOpen();
  }

  handleClickDialogOpen = () => {
    this.setState({
      open: true,
      name: 'new name'
    });
  };

  handleDialogClose = (message) => {
    this.setState({ open: false });
    if (message === 'CONFIRM') {
      if (this.state.createPayload.mode === 'NODE') {
        this.props.addNode(this.state.createPayload.type, this.state.name);
        this.props.setCreateEdgeMode('default');
      } else if (this.state.createPayload.mode === 'EDGE') {
        this.props.setCreateEdgeMode(this.state.createPayload.type);
        this.props.setCreateEdgeName(this.state.name);
      }
    }
  };

  handleTextFieldChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  generateOutput() {
    var output = graph2text(this.props.dialogueNodes, this.props.dialogueEdges);
    saveTextToFile(output, 'dialogue.config');
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={pinkTheme}>
          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => this.createNode('STATE')}>
            create state
          </Button>
        </MuiThemeProvider>
        <MuiThemeProvider theme={lightBlueTheme}>
          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => this.createNode('FUNCTION')}>
            create function
          </Button>
        </MuiThemeProvider>
        <MuiThemeProvider theme={lightGreenTheme}>
          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => this.createNode('RESPONSE')}>
            create response
          </Button>
        </MuiThemeProvider>
        <ToggleButton
          className={classes.button}
          value={0}
          selected={this.intentSelectedValue()}
          onClick={() => this.changeCreateEdgeMode('INTENT')}>
          create intent line
        </ToggleButton>
        <ToggleButton
          className={classes.button}
          value={0}
          selected={this.funcOutputSelectedValue()}
          onClick={() => this.changeCreateEdgeMode('FUNCOUTPUT')}>
          create function output line
        </ToggleButton>
        <Button
          color='default'
          variant='contained'
          className={classes.button}
          onClick={this.generateOutput}>
          get output
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleDialogClose}
        >
          <DialogTitle>{'Set your ' + this.state.title + ' name'}</DialogTitle>
          <DialogContent>
            <TextField
              label='Name'
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleTextFieldChange('name')}
              margin='normal'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleDialogClose('CANCEL')} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleDialogClose('CONFIRM')} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(DialogueController);
