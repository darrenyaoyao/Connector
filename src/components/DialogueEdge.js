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
    return (
      <Group>
        <Arrow
          points={[
            this.props.points[0],
            this.props.points[1],
            this.props.points[2],
            this.props.points[3]
          ]}
          stroke={this.props.stroke}
          strokeWidth={this.props.strokeWidth}
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
