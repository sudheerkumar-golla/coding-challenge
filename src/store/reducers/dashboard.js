import {
  GET_ALL_BLOCKS,
  GET_BLOCK_DETAILS
} from 'store/types'

const initialState = {
  isLoading: false,
  blocks: [],
  blockDetails: {},
}
export default function(state =  initialState, action={}) {

  switch(action.type) {

    case GET_ALL_BLOCKS:
      const blocks = action.payload.data.blocks || []
      return {
        ...state,
        blocks: blocks,
      }
    case GET_BLOCK_DETAILS:
      const blockDetails = action.payload.data || {}
      return {
        ...state,
        blockDetails: blockDetails,
      }
    default:
      return state
  }

}
