import React from 'react'
import {useState} from 'react';
import  MyCalendar from '../components/cal'
const ViewCalendar = (params) => {
  console.log(params)
  return (
    <div>
      <MyCalendar></MyCalendar>
    </div>
  )
}

export default ViewCalendar
