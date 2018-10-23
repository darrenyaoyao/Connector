import React, { Component } from 'react';
import { Group, Rect, Circle, Text } from 'react-konva';

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
        <Rect
          x={this.props.node_x}
          y={this.props.node_y}
          width={this.props.width}
          height={this.props.height}
          cornerRadius={this.props.cornerRadius}
          fill={this.props.fill}
        />
        <Text
          x={this.props.name_x}
          y={this.props.name_y}
          width={150}
          fill={this.props.name_fill}
          fontSize={this.props.fontSize}
          text={this.props.name}
        />
      </Group>
    )
  }
}

export default DialogueNode
