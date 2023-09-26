'use client'
import Image from 'next/image'
import { 
  Box, 
  Flex, 
  Text,
  Button
} from '@chakra-ui/react'
import { BulletItem ,COLOR, FONTS } from './components/styles'
import { ButtonItem } from './components/buttons'
import { ROUTES, getPageName } from '../app/utils/router-utils'


export default function Home() {
  return (

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
      >
        <Flex
          padding={16}
          justifyContent='flex-start'
          flexDirection='row'
        >
          <Box>
            <Image
              src="/MyBankPreview.png"
              width={1080}
              height={600}
              alt="MyBank Preview"
            />
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            flex-wrap='wrap'
            marginLeft={30}
            width='30%'
            py={2}
          >

            <Text
              fontFamily={FONTS.DEFAULT}
              fontSize={40}
              fontWeight='bold'
              textColor={COLOR.WHITE}
              paddingBottom={2}
            >
              Financial Insights
            </Text>
            <Flex 
              direction= 'column'
              marginLeft={2}
            >
              <Text
                fontFamily={FONTS.HOMEPAGE_BODY}
                fontSize={16}
                textColor={COLOR.WHITE}
                width='95%'
              >
                  A thoughtful combination of design and function to support your everyday finances.
              </Text>
              <BulletItem
                text="Integrate your bank accounts in real time and track your spending across multiple accounts."
                fontSize={16}
              />
              <BulletItem
                text="Create a budget and make optimal decisions with our personalized financial reports."
                fontSize={16}
              />

            </Flex>
            
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              my={4}
              paddingLeft={5}
              paddingRight={5}
              height={16}
              max-width='100%'
            >
              <ButtonItem
                text='Join Now'
                path={ROUTES.SIGN_UP}
                bgColor={COLOR.WHITE}
                textColor={COLOR.BLACK}
              />
              <ButtonItem
                text='Log In'
                path={ROUTES.LOG_IN}
                bgColor={COLOR.BLACK}
                textColor={COLOR.WHITE}
              />
            </Box>

          </Box>

        </Flex>

      </Flex>

    </Flex>

  )
  
}
