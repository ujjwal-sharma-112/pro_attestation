
import Countries_Attestation from '../../components/affidavit/Countries.Attestation'
import Countries_Apostille from '../../components/affidavit/Countries_Apostille'
import Documents from '../../components/affidavit/Documents'
import PersonalHeader from '../../components/affidavit/Header'
import Intro from '../../components/affidavit/Intro'
import Process from '../../components/affidavit/Process'
import What_Apostille from '../../components/affidavit/What_Apostille'
import WHY_Apostille from '../../components/affidavit/WHY_Apostille'
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
