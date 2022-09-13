import React from 'react'
import UtilTwo from './utils/UtilTwo'
import { Lorem } from '../assets/data'

const ComponentOne = ({ data }) => {
  return (
    <>
      <h3>ComponentTwo</h3>
      <p> {Lorem.five} </p>
      <p>{Lorem.twenty}</p>
      <UtilTwo />
    </>
  )
}

export default ComponentOne
