import Link from 'next/link'
import Countries_Attestation from '../../components/police/Countries.Attestation'
import Countries_Apostille from '../../components/police/Countries_Apostille'
import Documents from '../../components/police/Documents'
import PersonalHeader from '../../components/police/Header'
import Intro from '../../components/police/Intro'
import Process from '../../components/police/Process'
import What_Apostille from '../../components/police/What_Apostille'
import WHY_Apostille from '../../components/police/WHY_Apostille'
import React from 'react'

const Page = () => {
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

export default Page
