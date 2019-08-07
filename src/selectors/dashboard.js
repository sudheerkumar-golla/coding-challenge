import { createSelector } from 'reselect'
import get from 'lodash/fp/get'
import concat from 'lodash/fp/concat';

const getDashboard = get('dashboard') || []


export const getAllBlocksList = createSelector(
  getDashboard,
  dashboard => {
    return concat({hash: '', height: 'Please select Block to view details'}, dashboard.blocks)
  }
)

export const getBlocksDetails = createSelector(
  getDashboard,
  dashboard => dashboard.blockDetails
)
