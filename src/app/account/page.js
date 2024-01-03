'use client'

import Protect from '@/components/layout/Protect'
import Button from '@/components/elements/Button'
import Container from '@/components/layout/Container'
import { useContext } from 'react'
import UserContext from '@/context/UserContext'

export default function page({ }) {

  const { logout } = useContext(UserContext);

  return (
    <Protect>
      <Container>
        <h1 className='mb-10'>My Account</h1>

        <Button onClick={logout}>Log out</Button>
      </Container>

    </Protect>
  )
}