
import Countries_Attestation from '../../components/company-agreements/Countries.Attestation'
import Countries_Apostille from '../../components/company-agreements/Countries_Apostille'
import Documents from '../../components/company-agreements/Documents'
import PersonalHeader from '../../components/company-agreements/Header'
import Intro from '../../components/company-agreements/Intro'
import Process from '../../components/company-agreements/Process'
import What_Apostille from '../../components/company-agreements/What_Apostille'
import WHY_Apostille from '../../components/company-agreements/WHY_Apostille'
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
