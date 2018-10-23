import { combineReducers } from 'redux'
import dialogueNodes from './dialogueNodes'
import dialogueEdges from './dialogueEdges'
import currentEdgeIndex from './currentEdgeIndex'
import createEdgeMode from './createEdgeMode'
import createEdgeName from './createEdgeName'

export default combineReducers({
  dialogueNodes,
  dialogueEdges,
  currentEdgeIndex,
  createEdgeMode,
  createEdgeName
})
