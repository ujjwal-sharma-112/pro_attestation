
import Countries_Attestation from '../../components/birth/Countries.Attestation'
import Countries_Apostille from '../../components/birth/Countries_Apostille'
import Documents from '../../components/birth/Documents'
import PersonalHeader from '../../components/birth/Header'
import Intro from '../../components/birth/Intro'
import Process from '../../components/birth/Process'
import What_Apostille from '../../components/birth/What_Apostille'
import WHY_Apostille from '../../components/birth/WHY_Apostille'
import React from 'react'

const page = () => {
  return (
    <div>
      <PersonalHeader />
      <Intro />
      <What_Apostille />
      <WHY_Apostille />
      <Process />
      <Documents />
      <Countries_Apostille />
      <Countries_Attestation />
    </div>
  )
}

export default page
