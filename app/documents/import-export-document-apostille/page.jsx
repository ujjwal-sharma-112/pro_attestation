
import Countries_Attestation from '../../components/import-export/Countries.Attestation'
import Countries_Apostille from '../../components/import-export/Countries_Apostille'
import Documents from '../../components/import-export/Documents'
import PersonalHeader from '../../components/import-export/Header'
import Intro from '../../components/import-export/Intro'
import Process from '../../components/import-export/Process'
import What_Apostille from '../../components/import-export/What_Apostille'
import WHY_Apostille from '../../components/import-export/WHY_Apostille'
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
