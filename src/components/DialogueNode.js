import React, { Component } from 'react';
import { Group, Circle, Text } from 'react-konva';

class DialogueNode extends Component {
  constructor(props) {
    super(props);
  }

  mouseOver() {
    document.body.style.cursor = 'pointer';
  }

  mouseOut() {
    document.body.style.cursor = 'default';
  }

  render() {
    return (
      <Group
        x={this.props.state.group_x}
        y={this.props.state.group_y}
        draggable={true}
        onDragEnd={this.props.dragEnd}
        onClick={this.props.createEdge}
        onMouseEnter={this.mouseOver}
        onMouseLeave={this.mouseOut}>
        <Circle
          x={this.props.state.state_x}
          y={this.props.state.state_y}
          radius={this.props.state.radius}
          fill={this.props.state.fill}
        />
        <Text
          x={this.props.state.text_x}
          y={this.props.state.text_y}
          fontSize={this.props.state.fontSize}
          text={this.props.state.text}
        />
      </Group>
    )
  }
}

export default DialogueNode
