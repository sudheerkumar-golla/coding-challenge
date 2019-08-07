import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { PulseLoader } from 'react-spinners'
import isEqual from 'lodash/fp/isEqual'

export default class Dashboard extends Component {

  static propTypes = {
    getAllBlocks: PropTypes.func,
    blocks: PropTypes.array,
    getBlockdetails: PropTypes.func,
    blockDetails: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.blockValueChange = this.blockValueChange.bind(this)
    this.state ={
      isLoading: false,
    }
  }

  componentWillReceiveProps(newProps) {
    if(!isEqual(newProps.blockDetails, this.props.blockDetails)) {
      this.setState({isLoading : false })
    }
  }

  componentDidMount() {
    const { getAllBlocks } =  this.props
    getAllBlocks();
  }

  blockValueChange(event) {
    const { getBlockdetails } = this.props
    if(event.target.value) {
      this.setState({isLoading : true })
      getBlockdetails(event.target.value)
    }
  }

  get blockOptions() {
    const { blocks } = this.props
    return blocks.map((item, i) => {
      return (
        <option key={item.hash} value={item.hash}>{item.height}</option>
      )
    });
  }

  get blockUI() {
    const { blockDetails } = this.props
    return(
      <Fragment>
        <div className="header"> Block {blockDetails.height} </div>
        <div className="container">
          <div className="block_item">
            <div className="key"> Hash </div>
            <div className="value"> {blockDetails.hash} </div>
          </div>
          <div className="Inner_container block_item_container">
            <div className="block_item col-50 float-left">
              <div className="key"> Height </div>
              <div className="value"> {blockDetails.height} </div>
            </div>
            <div className="block_item col-50 float-right">
              <div className="key"> Size </div>
              <div className="value"> {blockDetails.size} </div>
            </div>
          </div>
          <div className="Inner_container block_item_container">
            <div className="block_item col-50 float-left">
              <div className="key"> Nonce </div>
              <div className="value"> {blockDetails.nonce} </div>
            </div>
            <div className="block_item col-50 float-right">
              <div className="key"> Bits </div>
              <div className="value"> {blockDetails.bits} </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  render() {
    const { blockDetails } = this.props
    const { isLoading } = this.state
    return (
      <div>
        <select onChange = {this.blockValueChange} className="block_dropdown">
          {this.blockOptions}
        </select>

        {isLoading &&
          <div className="loader">
            <PulseLoader />
          </div>
        }
        { blockDetails.height && this.blockUI}
      </div>
    )
  }
}
