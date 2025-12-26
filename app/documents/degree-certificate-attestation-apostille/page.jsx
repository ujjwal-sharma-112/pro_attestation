
import Countries_Attestation from '../../components/degree/Countries.Attestation'
import Countries_Apostille from '../../components/degree/Countries_Apostille'
import Documents from '../../components/degree/Documents'
import PersonalHeader from '../../components/degree/Header'
import Intro from '../../components/degree/Intro'
import Process from '../../components/degree/Process'
import What_Apostille from '../../components/degree/What_Apostille'
import WHY_Apostille from '../../components/degree/WHY_Apostille'
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
