import { connect } from 'react-redux'
import { addNode,
         demo1Nodes,
         demo1Edges,
         setCreateEdgeMode,
         setCreateEdgeName } from '../actions'
import DialogueController from '../components/DialogueController'

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => ({
  addNode: (nodeType, nodeName) => dispatch(addNode(nodeType, nodeName)),
  demo1Nodes: () => dispatch(demo1Nodes()),
  demo1Edges: () => dispatch(demo1Edges()),
  setCreateEdgeMode: modeBool => dispatch(setCreateEdgeMode(modeBool)),
  setCreateEdgeName: name => dispatch(setCreateEdgeName(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogueController)
