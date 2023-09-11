'use client'
import React, { type ReactElement } from 'react'
import { 
  Box, 
  Flex, 
  Text,
  Link,
  Card,
  CardHeader,
  CardBody,
  ChakraProvider
} from '@chakra-ui/react'
import Image from 'next/image'
import GitHubLogo from '../../../public/github-light.svg'
import GmailLogo from '../../../public/gmail.png'
import LinkedinLogo from '../../../public/linkedin.svg'
import { ContactTheme, BulletItem ,COLOR, FONTS } from '../components/styles'
import { ROUTES, getPageName } from '../utils/router-utils'


export default function Portfolio(): ReactElement<string, string>{
  return(
    <ChakraProvider theme={ContactTheme}>
      <Flex
      minHeight='100vh'
      max-width='100%'
      backgroundColor={COLOR.BLUE} 
      flexDirection='column'
      >
      <Flex
        backgroundColor={COLOR.BLACK}
        height='60%'
        borderBottomRightRadius={50}
        borderBottomLeftRadius={50}
        justifyContent='center'
        py={10}
      >
        

        <Card
          display='flex'
          justifyContent='center'
        >
              <CardHeader>
                Contact
              </CardHeader>
              <CardBody
                display='flex'
                justifyContent='center'
                fontFamily={FONTS.DEFAULT}
                fontSize={16}
                textColor={COLOR.WHITE}
              >
                Select prefered form of contact 
            
              </CardBody>
              <Flex
                direction='row'
                padding={5}
                justifyContent='space-evenly'
              >
                <Link href='https://github.com/chloealbright'>
                  <img src={GitHubLogo.src} width='50px' height='50px' alt='Logo' />
                </Link>

                <Link href='mailto:chloealbright1@gmail.com'>
                  <img src={GmailLogo.src} width='50px' height='50px' alt='Logo' />
                </Link>

                <Link href='https://www.linkedin.com/in/chloe-albright-74a828131/'>
                  <img src={LinkedinLogo.src} width='50px' height='50px' alt='Logo' />
                </Link>


              </Flex>
          </Card>
        
      </Flex>
    </Flex>

    </ChakraProvider>
    
  )
}