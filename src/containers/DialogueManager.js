import { connect } from 'react-redux'
import { addNode,
         changeNodePosition,
         addOutputEdgeToNode,
         addInputEdgeToNode,
         addEdge,
         changeEdgeStartPoints,
         changeEdgeEndPoints,
         setCurrentEdgeIndex,
         setCreateEdgeMode } from '../actions'
import DialogueManager from '../components/DialogueManager'

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => ({
  addNode: nodeType => dispatch(addNode(nodeType)),
  changeNodePosition: (index, position) => dispatch(changeNodePosition(index, position)),
  addOutputEdgeToNode: (nodeIndex, edgeIndex) => dispatch(addOutputEdgeToNode(nodeIndex, edgeIndex)),
  addInputEdgeToNode: (nodeIndex, edgeIndex) => dispatch(addInputEdgeToNode(nodeIndex, edgeIndex)),
  addEdge: points => dispatch(addEdge(points)),
  changeEdgeStartPoints: (index, points) => dispatch(changeEdgeStartPoints(index, points)),
  changeEdgeEndPoints: (index, points) => dispatch(changeEdgeEndPoints(index, points)),
  setCurrentEdgeIndex: index => dispatch(setCurrentEdgeIndex(index)),
  setCreateEdgeMode: modeBool => dispatch(setCreateEdgeMode(modeBool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogueManager)
