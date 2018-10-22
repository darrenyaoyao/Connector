import { connect } from 'react-redux'
import { addNode,
         changeNodePosition,
         addEdge,
         changeEdgeEndPoints,
         setCurrentEdgeIndex,
         setCreateEdgeMode } from '../actions'
import DialogueManager from '../components/DialogueManager'

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => ({
  addNode: nodeType => dispatch(addNode(nodeType)),
  changeNodePosition: (index, position) => dispatch(changeNodePosition(index, position)),
  addEdge: points => dispatch(addEdge(points)),
  changeEdgeEndPoints: (index, points) => dispatch(changeEdgeEndPoints(index, points)),
  setCurrentEdgeIndex: index => dispatch(setCurrentEdgeIndex(index)),
  setCreateEdgeMode: modeBool => dispatch(setCreateEdgeMode(modeBool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogueManager)
