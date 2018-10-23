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
        onDragMove={this.props.dragMove}
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
          x={this.props.name_x}
          y={this.props.name_y}
          fontSize={this.props.fontSize}
          text={this.props.name}
        />
      </Group>
    )
  }
}

export default DialogueNode
