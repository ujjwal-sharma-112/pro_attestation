
import Countries_Attestation from '../../components/marriage/Countries.Attestation'
import Countries_Apostille from '../../components/marriage/Countries_Apostille'
import Documents from '../../components/marriage/Documents'
import PersonalHeader from '../../components/marriage/Header'
import Intro from '../../components/marriage/Intro'
import Process from '../../components/marriage/Process'
import What_Apostille from '../../components/marriage/What_Apostille'
import WHY_Apostille from '../../components/marriage/WHY_Apostille'
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
