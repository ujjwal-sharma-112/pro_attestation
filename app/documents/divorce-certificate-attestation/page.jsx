
import Countries_Attestation from '../../components/divorce/Countries.Attestation'
import Countries_Apostille from '../../components/divorce/Countries_Apostille'
import Documents from '../../components/divorce/Documents'
import PersonalHeader from '../../components/divorce/Header'
import Intro from '../../components/divorce/Intro'
import Process from '../../components/divorce/Process'
import What_Apostille from '../../components/divorce/What_Apostille'
import WHY_Apostille from '../../components/divorce/WHY_Apostille'
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
