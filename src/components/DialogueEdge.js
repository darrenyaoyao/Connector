import React, { Component } from 'react';
import { Group, Text, Line, Arrow } from 'react-konva';

class DialogueEdge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Group zIndex={0}>
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
          x={(this.props.points[0]+this.props.points[2])/2}
          y={(this.props.points[1]+this.props.points[3])/2}
          fontSize={this.props.fontSize}
          text={this.props.name}
        />
      </Group>
    )
  }
}

export default DialogueEdge
