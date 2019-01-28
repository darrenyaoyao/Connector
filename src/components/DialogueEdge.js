import React, { Component } from 'react';
import { Group, Text, Arrow } from 'react-konva';

class DialogueEdge extends Component {
  render() {
    var offsetY = 0;
    if (this.props.points[1] < this.props.points[3]) {
      offsetY = -25;
    } else {
      offsetY = 5;
    }
    var points = [...this.props.points]
    return (
      <Group>
        <Arrow
          points={points}
          stroke={this.props.stroke}
          strokeWidth={this.props.strokeWidth}
          tension={0}
        />
        <Text
          x={(this.props.points[0]*3+this.props.points[2]*2)/5}
          y={(this.props.points[1]*3+this.props.points[3]*2)/5+offsetY}
          fontSize={this.props.fontSize}
          text={this.props.name}
        />
      </Group>
    )
  }
}

export default DialogueEdge
