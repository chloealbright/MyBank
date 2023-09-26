'use client'
import React, { type ReactElement } from 'react'
import { Button, Box, Flex } from '@chakra-ui/react'
import { COLOR } from '../styles'
import NavItem from '../navbar/nav-items'
import { ROUTES, getPageName } from '../../utils/router-utils'
import { usePathname } from 'next/navigation'
import MyBankLogo from '../../../../public/MyBankLogo.png'
import Link from 'next/link'
import { UseAuth } from '../../../../auth-context-provider'

const NavContainer = (): ReactElement => {
  const { userAuth, isAuthenticated, logOut } = UseAuth()

  function onLogOut(): void{
    logOut(userAuth)
  }

  // set routes
  const pathName = usePathname()
  const pageName = getPageName(pathName)

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
              
              {isAuthenticated && //for client signed in view
              <Button 
                backgroundColor={COLOR.OFF_WHITE}
                my={5}
                px={0}
                onClick={onLogOut}
              >
                <NavItem
                  text='Dashboard'
                  isFocused={ pageName === 'Dashboard' }
                  path= {ROUTES.DASHBOARD} 
                />
              </Button>
              }
              {isAuthenticated &&
              <Button 
                backgroundColor={COLOR.OFF_WHITE}
                my={5}
                px={0}
                onClick={onLogOut}
              >
                <NavItem
                  text='Sign Out'
                  isFocused={ pageName === 'Sign Out'}
                  path= {ROUTES.INDEX} 
                />
              </Button>
              }
            </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default NavContainer
