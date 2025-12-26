
import Countries_Attestation from '../../components/death/Countries.Attestation'
import Countries_Apostille from '../../components/death/Countries_Apostille'
import Documents from '../../components/death/Documents'
import PersonalHeader from '../../components/death/Header'
import Intro from '../../components/death/Intro'
import Process from '../../components/death/Process'
import What_Apostille from '../../components/death/What_Apostille'
import WHY_Apostille from '../../components/death/WHY_Apostille'
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
