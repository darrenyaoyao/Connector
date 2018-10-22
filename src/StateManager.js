import React, { Component } from 'react';
import { Stage, Layer, Group, Circle, Text, Line } from 'react-konva';
import Konva from 'konva';

class StateManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogueStates: [],
      intentLines: [],
      currentLineIndex: -1,
      createIntentLineMode: false
    };
    this.createState = this.createState.bind(this);
    this.createFunction = this.createFunction.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.changeCreateIntentLineMode = this.changeCreateIntentLineMode.bind(this);
    this.createIntentLine = this.createIntentLine.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  createState() {
    var dialogueState = {
      group_x: 50,
      group_y: 50,
      state_x: 0,
      state_y: 0,
      radius: 50,
      fill: 'red',
      text: 'new state',
      text_x: -40,
      text_y: -10,
      fontSize: 20
    };
    this.setState(state => ({
      dialogueStates: [...state.dialogueStates, dialogueState],
      createIntentLineMode: false
    }));
  }

  createFunction() {
    var dialogueFunction = {
      group_x: 50,
      group_y: 50,
      state_x: 0,
      state_y: 0,
      radius: 50,
      fill: 'yellow',
      text: 'new function',
      text_x: -40,
      text_y: -10,
      fontSize: 15
    };
    this.setState(state => ({
      dialogueStates: [...state.dialogueStates, dialogueFunction],
      createIntentLineMode: false
    }));
  }

  changeCreateIntentLineMode() {
    this.setState({
      createIntentLineMode: true
    })
  }

  createIntentLine(index) {
    var currentStateIndex = index;
    if (this.state.createIntentLineMode === true) {
      if (this.state.currentLineIndex === -1) {
        var newLine = {
          points: [
            this.state.dialogueStates[currentStateIndex].group_x,
            this.state.dialogueStates[currentStateIndex].group_y,
            this.state.dialogueStates[currentStateIndex].group_x,
            this.state.dialogueStates[currentStateIndex].group_y,
          ],
          stroke: 'black',
          strokeWidth: 5
        }
        this.setState({
          intentLines: [...this.state.intentLines, newLine],
          currentLineIndex: this.state.intentLines.length
        })
      } else {
        var lineData = Object.assign({}, this.state.intentLines[this.state.currentLineIndex]);
        lineData.points[2] = this.state.dialogueStates[currentStateIndex].group_x;
        lineData.points[3] = this.state.dialogueStates[currentStateIndex].group_y;
        var lines = Object.assign([], this.state.intentLines);
        lines[this.state.currentLineIndex] = lineData;
        this.setState({
          intentLines: lines,
          currentLineIndex: -1
        })
      }
    }
  }

  dragEnd(index, e) {
    var position = e.currentTarget.getPosition();
    var newState = Object.assign({}, this.state);
    newState.dialogueStates[index].group_x = position.x;
    newState.dialogueStates[index].group_y = position.y;
    this.setState(state => newState)
  }

  mouseOver() {
    document.body.style.cursor = 'pointer';
  }

  mouseOut() {
    document.body.style.cursor = 'default';
  }

  onMouseMove(e) {
    if (this.state.createIntentLineMode === true && this.state.currentLineIndex != -1) {
      var lineData = Object.assign({}, this.state.intentLines[this.state.currentLineIndex]);
      lineData.points[2] = e.evt.offsetX;
      lineData.points[3] = e.evt.offsetY;
      var lines = [...this.state.intentLines];
      lines[this.state.currentLineIndex] = lineData;
      this.setState({
        intentLines: lines
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.createState}>
          create state
        </button>
        <button onClick={this.createFunction}>
          create function
        </button>
        <button onClick={this.changeCreateIntentLineMode}>
          create intent line
        </button>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseMove={this.onMouseMove}>
          <Layer>
            {this.state.dialogueStates.map((state, index) => (
              <Group
                x={state.group_x}
                y={state.group_y}
                key={index}
                draggable={true}
                onDragEnd={(e) => this.dragEnd(index, e)}
                onClick={(e) => this.createIntentLine(index)}
                onMouseEnter={this.mouseOver}
                onMouseLeave={this.mouseOut}>
                <Circle
                  x={state.state_x}
                  y={state.state_y}
                  radius={state.radius}
                  fill={state.fill}
                />
                <Text
                  x={state.text_x}
                  y={state.text_y}
                  fontSize={state.fontSize}
                  text={state.text}
                />
              </Group>
            ))}
            {this.state.intentLines.map((line, index) => {
              return <Line
                key={1000+index}
                zIndex={0}
                points={[line.points[0],line.points[1],line.points[2],line.points[3]]}
                stroke={line.stroke}
                strokeWidth={line.strokeWidth}
              />
            })}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default StateManager;
