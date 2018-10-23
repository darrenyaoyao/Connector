import React, { Component } from 'react';
import { Group, Rect, Text } from 'react-konva';

class DialogueNode extends Component {
  mouseOver() {
    document.body.style.cursor = 'pointer';
  }

  mouseOut() {
    document.body.style.cursor = 'default';
  }

  render() {
    var fontSize = this.props.fontSize;
    if (this.props.name.length > 25) {
      fontSize = 15
    }
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
          width={160}
          height={70}
          align={'center'}
          verticalAlign={'middle'}
          fill={this.props.name_fill}
          fontSize={fontSize}
          text={this.props.name}
        />
      </Group>
    )
  }
}

export default DialogueNode
