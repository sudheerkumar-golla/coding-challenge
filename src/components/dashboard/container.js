import { connect } from 'react-redux'
import {
  getAllBlocks,
  getBlockdetails,
} from 'store/actions/dashboard'
import {
  getAllBlocksList,
  getBlocksDetails,
} from 'selectors/dashboard'
import dashboard from './dashboard'

const mapStateToProps = state => ({
  blocks: getAllBlocksList(state),
  blockDetails: getBlocksDetails(state)
})

const mapDispatchToProps = {
  getAllBlocks,
  getBlockdetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)
