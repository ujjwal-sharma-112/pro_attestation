
import Countries_Attestation from '../../components/incorporation/Countries.Attestation'
import Countries_Apostille from '../../components/incorporation/Countries_Apostille'
import Documents from '../../components/incorporation/Documents'
import PersonalHeader from '../../components/incorporation/Header'
import Intro from '../../components/incorporation/Intro'
import Process from '../../components/incorporation/Process'
import What_Apostille from '../../components/incorporation/What_Apostille'
import WHY_Apostille from '../../components/incorporation/WHY_Apostille'
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
