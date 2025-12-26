
import Countries_Attestation from '../../components/medical/Countries.Attestation'
import Countries_Apostille from '../../components/medical/Countries_Apostille'
import Documents from '../../components/medical/Documents'
import PersonalHeader from '../../components/medical/Header'
import Intro from '../../components/medical/Intro'
import Process from '../../components/medical/Process'
import What_Apostille from '../../components/medical/What_Apostille'
import WHY_Apostille from '../../components/medical/WHY_Apostille'
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
