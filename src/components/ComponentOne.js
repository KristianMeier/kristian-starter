import React from 'react'
import { Lorem } from '../assets/data'
import UtilOne from './utils/UtilOne'

const ComponentOne = ({ data }) => {
  return (
    <>
      <h3>ComponentOne</h3>
      <p> {Lorem.five} </p>
      <p>{Lorem.twenty}</p>
      <UtilOne />
    </>
  )
}

export default ComponentOne
