import { connect } from 'react-redux'
import { changeNodePosition,
         addOutputEdgeToNode,
         addInputEdgeToNode,
         addEdge,
         setEdgeInNode,
         setEdgeOutNode,
         changeEdgeStartPoints,
         changeEdgeEndPoints,
         setCurrentEdgeIndex,
         setCreateEdgeMode } from '../actions'
import DialogueManager from '../components/DialogueManager'

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => ({
  changeNodePosition: (index, position) => dispatch(changeNodePosition(index, position)),
  addOutputEdgeToNode: (nodeIndex, edgeIndex) => dispatch(addOutputEdgeToNode(nodeIndex, edgeIndex)),
  addInputEdgeToNode: (nodeIndex, edgeIndex) => dispatch(addInputEdgeToNode(nodeIndex, edgeIndex)),
  addEdge: (points, edgeType, edgeName) => dispatch(addEdge(points, edgeType, edgeName)),
  setEdgeInNode: (edgeIndex, nodeIndex) => dispatch(setEdgeInNode(edgeIndex, nodeIndex)),
  setEdgeOutNode: (edgeIndex, nodeIndex) => dispatch(setEdgeOutNode(edgeIndex, nodeIndex)),
  changeEdgeStartPoints: (index, points) => dispatch(changeEdgeStartPoints(index, points)),
  changeEdgeEndPoints: (index, points) => dispatch(changeEdgeEndPoints(index, points)),
  setCurrentEdgeIndex: index => dispatch(setCurrentEdgeIndex(index)),
  setCreateEdgeMode: modeBool => dispatch(setCreateEdgeMode(modeBool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogueManager)
