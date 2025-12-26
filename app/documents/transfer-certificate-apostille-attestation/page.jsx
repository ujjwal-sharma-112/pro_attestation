
import Countries_Attestation from '../../components/transfer-leave/Countries.Attestation'
import Countries_Apostille from '../../components/transfer-leave/Countries_Apostille'
import Documents from '../../components/transfer-leave/Documents'
import PersonalHeader from '../../components/transfer-leave/Header'
import Intro from '../../components/transfer-leave/Intro'
import Process from '../../components/transfer-leave/Process'
import What_Apostille from '../../components/transfer-leave/What_Apostille'
import WHY_Apostille from '../../components/transfer-leave/WHY_Apostille'
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
