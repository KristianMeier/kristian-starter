import React from 'react'
import { Lorem } from '../../assets/data'

const UtilOne = ({ data }) => {
  return (
    <>
      <h3>UtilOne</h3>
      <p> {Lorem.five} </p>
      <p>{Lorem.five}</p>
    </>
  )
}

export default UtilOne
