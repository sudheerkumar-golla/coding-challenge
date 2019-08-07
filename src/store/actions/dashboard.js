import {
  GET_ALL_BLOCKS,
  GET_BLOCK_DETAILS
} from 'store/types'
import {
  BASE_URL,
} from 'const'
import axios from 'axios'

export function getAllBlocks() {
  const url =  `${BASE_URL}/blocks/?format=json&cors=true`
  const request = axios.get(url)
  return {
    type:GET_ALL_BLOCKS,
    payload: request
  }
}

export function getBlockdetails(hashValue) {
  const url =  `${BASE_URL}/rawblock/${hashValue}?format=json&cors=true`
  const request = axios.get(url)
  return {
    type:GET_BLOCK_DETAILS,
    payload: request
  }
}
