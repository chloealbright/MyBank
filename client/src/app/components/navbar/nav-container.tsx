'use client'
import React, { useState, type ReactElement } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { COLOR } from '../styles'
import NavItem from '../navbar/nav-items'
import { ROUTES, getPageName } from '../../utils/router-utils'
import { usePathname } from 'next/navigation'
import MyBankLogo from '../../../../public/MyBankLogo.png'
import Link from 'next/link'

const NavContainer = (): ReactElement => {

  // set routes
  const pathName = usePathname()
  const pageName = getPageName(pathName)

  //for client signed in view
  // const [auth, setAuth] = useState(false)
  return (
    <>
      <Box bg={COLOR.BLACK} px={4}>
          <Flex 
            backgroundColor= {COLOR.BLACK}
            minHeight='16vh'
            direction='row'
            padding={2}
            px={10}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Link href={ROUTES.INDEX}>
              <img src={MyBankLogo.src} width='250px' height='200px' alt='Logo' />
            </Link>
            <Flex
              justifyContent='flex-end'
            >
              <NavItem
                text='Portfolio'
                isFocused={ pageName === 'Portfolio'}
                path= {ROUTES.PORTFOLIO} 
              />
              <NavItem
                text='Contact'
                isFocused={ pageName === 'Contact'}
                path= {ROUTES.CONTACT} 
              />
            </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default NavContainer
