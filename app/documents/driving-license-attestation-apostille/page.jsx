
import Countries_Attestation from '../../components/Driving/Countries.Attestation'
import Countries_Apostille from '../../components/Driving/Countries_Apostille'
import Documents from '../../components/Driving/Documents'
import PersonalHeader from '../../components/Driving/Header'
import Intro from '../../components/Driving/Intro'
import Process from '../../components/Driving/Process'
import What_Apostille from '../../components/Driving/What_Apostille'
import WHY_Apostille from '../../components/Driving/WHY_Apostille'
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
