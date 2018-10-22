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
          this.props.line.points[0],
          this.props.line.points[1],
          this.props.line.points[2],
          this.props.line.points[3]
        ]}
        stroke={this.props.line.stroke}
        strokeWidth={this.props.line.strokeWidth}
      />
    )
  }
}

export default DialogueEdge
