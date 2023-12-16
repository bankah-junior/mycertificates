import React from 'react'
import PageFrame from '../general/PageFrame'
import { SchoolCerts } from '../../assets/CertsDB'

const School = () => {
  return (
    <PageFrame data={SchoolCerts} />
  )
}

export default School