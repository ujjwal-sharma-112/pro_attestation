
import Countries_Attestation from '../../components/single/Countries.Attestation'
import Countries_Apostille from '../../components/single/Countries_Apostille'
import Documents from '../../components/single/Documents'
import PersonalHeader from '../../components/single/Header'
import Intro from '../../components/single/Intro'
import Process from '../../components/single/Process'
import What_Apostille from '../../components/single/What_Apostille'
import WHY_Apostille from '../../components/single/WHY_Apostille'
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
