
import Countries_Attestation from '../../components/attorny/Countries.Attestation'
import Countries_Apostille from '../../components/attorny/Countries_Apostille'
import Documents from '../../components/attorny/Documents'
import PersonalHeader from '../../components/attorny/Header'
import Intro from '../../components/attorny/Intro'
import Process from '../../components/attorny/Process'
import What_Apostille from '../../components/attorny/What_Apostille'
import WHY_Apostille from '../../components/attorny/WHY_Apostille'
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
