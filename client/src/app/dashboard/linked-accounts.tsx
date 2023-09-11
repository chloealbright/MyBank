'use client'
import React, { type ReactElement } from 'react'
import { 
  Text, 
  Box, 
  Link,
  Card,
  CardHeader,
  CardBody,
  Flex,
  ChakraProvider 
} from '@chakra-ui/react'
import { LinkedAccountsTheme ,FONTS, COLOR } from '../components/styles'
import { useRouter } from 'next/navigation'
import { ROUTES } from '../utils/router-utils'


export default function LinkedAccounts(): ReactElement<string, string>{
  const router = useRouter()
  return(
    <ChakraProvider theme={LinkedAccountsTheme}>
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
              <CardHeader
                fontSize={25}
              >
                Linked Accounts Coming Soon! 🚀
              </CardHeader>
              <CardBody
                display='flex'
                justifyContent='center'
                fontFamily={FONTS.DEFAULT}
                fontSize={18}
                textColor={COLOR.WHITE}
                marginLeft={5}
              >
                
                No man is an island, but this woman is 👩🏽‍💼
                We're adding updates to our internal page. 
            
              </CardBody>
              <CardBody
                display='flex'
                flexDirection='row'
                fontFamily={FONTS.DEFAULT}
                fontSize={18}
                textColor={COLOR.WHITE}
                padding={0}
                marginLeft={3}
              >
              
               In the meantime, checkout the portfolio page💫
               
              </CardBody>
        
              
          </Card>
        
      </Flex>
    </Flex>

    </ChakraProvider>
  )
}