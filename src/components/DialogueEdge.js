import React, { Component } from 'react';
import { Group, Text, Line } from 'react-konva';

class DialogueEdge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Line
        zIndex={0}
        points={[
          this.props.points[0],
          this.props.points[1],
          this.props.points[2],
          this.props.points[3]
        ]}
        stroke={this.props.stroke}
        strokeWidth={this.props.strokeWidth}
      />
    )
  }
}

export default DialogueEdge
