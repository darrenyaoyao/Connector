import { connect } from 'react-redux'
import { addNode,
         setCreateEdgeMode,
         setCreateEdgeName } from '../actions'
import DialogueController from '../components/DialogueController'

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => ({
  addNode: (nodeType, nodeName) => dispatch(addNode(nodeType, nodeName)),
  setCreateEdgeMode: modeBool => dispatch(setCreateEdgeMode(modeBool)),
  setCreateEdgeName: name => dispatch(setCreateEdgeName(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogueController)
