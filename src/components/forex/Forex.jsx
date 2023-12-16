import React from 'react'
import PageFrame from '../general/PageFrame'
import { ForexCerts } from '../../assets/CertsDB'

const Forex = () => {
  return (
    <PageFrame data={ForexCerts} />
  )
}

export default Forex