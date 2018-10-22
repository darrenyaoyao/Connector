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
        x={this.props.group_x}
        y={this.props.group_y}
        draggable={true}
        onDragEnd={this.props.dragEnd}
        onClick={this.props.createEdge}
        onMouseEnter={this.mouseOver}
        onMouseLeave={this.mouseOut}>
        <Circle
          x={this.props.state_x}
          y={this.props.state_y}
          radius={this.props.radius}
          fill={this.props.fill}
        />
        <Text
          x={this.props.text_x}
          y={this.props.text_y}
          fontSize={this.props.fontSize}
          text={this.props.text}
        />
      </Group>
    )
  }
}

export default DialogueNode
