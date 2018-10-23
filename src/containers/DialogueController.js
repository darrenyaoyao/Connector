import { connect } from 'react-redux'
import { addNode,
         setCreateEdgeMode } from '../actions'
import DialogueController from '../components/DialogueController'

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => ({
  addNode: nodeType => dispatch(addNode(nodeType)),
  setCreateEdgeMode: modeBool => dispatch(setCreateEdgeMode(modeBool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogueController)
