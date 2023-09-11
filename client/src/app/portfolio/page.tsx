'use client'
import React, { type ReactElement } from 'react'
import { 
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box, 
  Flex, 
  Text,
  Link,
  ChakraProvider
} from '@chakra-ui/react'
import Image from 'next/image'
import { PortfolioTheme, PortfolioBullet ,COLOR, FONTS } from '../components/styles'
import { ROUTES, getPageName } from '../utils/router-utils'


export default function Portfolio(): ReactElement<string, string>{
  return(
    <ChakraProvider theme={PortfolioTheme}>
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
          <Card>
            <Box
              display='flex'
              justifyContent='center'
            >
              <Image
                src="/PortfolioIcon.png"
                width={180}
                height={180}
                alt="Profile Picture"
              />
            </Box>
            <CardHeader>
                Chloé Albright
            </CardHeader>
            <Box
              display='flex'
              justifyContent='center'
              bgColor={COLOR.DARK_GREY}
              width='90%'
              marginLeft={4}
              borderRadius={20}
              
            >
              <Text
                fontFamily={FONTS.DEFAULT}
                fontSize={16}
                textColor={COLOR.WHITE}

              >
                Full-Stack Engineer | Designer
              </Text>
              

            </Box>
            
            <CardBody>
              
              <Text
                fontFamily={FONTS.DEFAULT}
                fontSize={16}
                textColor={COLOR.WHITE}
                width='100%'
              >
                When I'm not coding or curating my life I'm usually playing tennis, learning how to surf, or checking off my extensive bucket-list.✈️🌎
              </Text>

              <Text
                paddingTop={2}
                fontFamily={FONTS.HOMEPAGE_BODY}
                fontSize={16}
                textColor={COLOR.WHITE}
                width='100%'
              >
                Languages | Styling
              </Text>
          
              <PortfolioBullet
                text="React js, Node js, Typescript, C++, C#, Python, HTML/CSS, SQL, GraphQL."
                fontSize={15}
              />

              <Text
                paddingTop={2}
                fontFamily={FONTS.HOMEPAGE_BODY}
                fontSize={16}
                textColor={COLOR.WHITE}
                width='100%'
              >
                Project Management
              </Text>

              <PortfolioBullet
                text="GitHub Projects, Linear, Google Docs, Sheets, Slides, Jamboard, Slack, Airtable."
                fontSize={15}
              />
            </CardBody>
          </Card>


          <Card
            width='70rem'
          >
            <CardHeader>
              Projects
            </CardHeader>


            <Box
              display='flex'
              flexDirection='column'
              padding={5}
              margin={4}
              bgColor={COLOR.DARK_GREY}
              width='80%'
              marginLeft={20}
              borderRadius={10}
              fontFamily={FONTS.DEFAULT}
    
              textColor={COLOR.WHITE}
            >
              <Heading
                fontSize={20}
                marginBottom={2}
              >
                MyBank
              </Heading>
     
              <Text>
                A user-friendly FinTech app that allows users to integrate their bank accounts via Plaid API, view transactions and balances across multiple accounts from a single source, and create custom financial reports.
              </Text>
              <Flex
                fontSize={16}
                marginBottom={2}
                
              >
                <Text
                  fontWeight='bold'
                  marginRight={2}
                >
                  Why I chose this: 
                  <Text
                    fontWeight='normal'
                  >
                    Over the summer I had the opportunity to work with a small team from Harvard on developing financial insights and cash sweeps for franchisee owners. Since we often worked on tight timelines pre-empting our Soc2 Compliance Review and app launch, MyBank provided the opportunity for me to utilize the tech stack I learned and helped in building my decision model as an engineer. (I also love utilizing tech to optimize cash flow/financial decisions ha💵✨)
                  </Text>
                  <Text
                  fontWeight='bold'
                  marginRight={2}
                >
                  Tech/Libraries: 
                  <Text
                    fontWeight='normal'
                  >
                    TypeScript, React js, Node js, Yup, Formik, Chakra UI, Firebase
                  </Text>                  
                </Text>                  
                </Text>
                
              </Flex>

              <Box
                display='flex'
                justifyContent='center'
              >
              <Image
                src="/MyBankPreview.png"
                width={360}
                height={360}
                alt="[MyBankPreview]"
              />
            </Box>
            </Box>

            <Box
              display='flex'
              flexDirection='column'
              padding={5}
              margin={4}
              bgColor={COLOR.DARK_GREY}
              width='80%'
              marginLeft={20}
              borderRadius={10}
              fontFamily={FONTS.DEFAULT}
    
              textColor={COLOR.WHITE}
            >
              <Heading
                fontSize={20}
              >
                Animal Mafia
              </Heading>
     
              <Text>
                A free movement mafia-themed videogame! Animal Mafia lets users to level up via battle play by defeating a “boss” and earn gold from selling, buying, and harvesting crops on the farm.
              </Text>
              <Flex
                fontSize={16}
                marginBottom={2}
                
              >
                <Text
                  fontWeight='bold'
                  marginRight={2}
                >
                  Why I chose this: 
                  <Text
                    fontWeight='normal'
                  >
                    Watched a lot of Sopranos and Narcos over winter break. I knew it was probably the last time I'd get to create a videogame before graduating 🎓
                  </Text>
                  <Text
                  fontWeight='bold'
                  marginRight={2}
                >
                  Tech/Libraries: 
                  <Text
                    fontWeight='normal'
                  >
                    Unity, C#, React.js, Node.js, Firebase
                  </Text>   
                  <Link 
                    textColor={COLOR.LIGHT_BLUE}
                    href='https://test-animal-mafia.web.app/'
                  >
                    Link to App
                  </Link>               
                </Text>                  
                </Text>
                
              </Flex>
              <Box
                display='flex'
                justifyContent='center'
              >
              <Image
                src="/AnimalMafiaPreview.png"
                width={360}
                height={360}
                alt="[AnimalMafiaPreview]"
              />
            </Box>      
            </Box>

            <Box
              display='flex'
              flexDirection='column'
              padding={5}
              margin={4}
              bgColor={COLOR.DARK_GREY}
              width='80%'
              marginLeft={20}
              borderRadius={10}
              fontFamily={FONTS.DEFAULT}
    
              textColor={COLOR.WHITE}
            >
              <Heading
                fontSize={20}
              >
                Lyricee
              </Heading>
     
              <Text>
                A retro-styled music player that authenticates users into their Spotify accounts, and allows users to search, listen to songs, and favorite or un-favorite songs while viewing the song lyrics.
              </Text>

              <Flex
                fontSize={16}
                marginBottom={2}
                
              >
                <Text
                  fontWeight='bold'
                  marginRight={2}
                >
                  Why I chose this: 
                  <Text
                    fontWeight='normal'
                  >
                    Spotify is easily one of my most-used apps and I was a singer before becoming an engineer so this provided a good opportunity to create something fun with the user-experience of an artist in mind.
                  </Text>
                  <Text
                  fontWeight='bold'
                  marginRight={2}
                >
                  Tech/Libraries: 
                  <Text
                    fontWeight='normal'
                  >
                    React.js, Node.js, Spotify Web API, Spotify Web Playback, Lyrics Finder.
                  </Text>
                  <Link 
                    textColor={COLOR.LIGHT_BLUE}
                    href='https://github.com/chloealbright/Lyricee'
                  >
                    Link to App
                  </Link>                  
                </Text>                  
                </Text>
                
              </Flex>

              
              <Box
                display='flex'
                justifyContent='center'
              >
              <Image
                src="/LyriceePreview.png"
                width={360}
                height={360}
                alt="[LyriceePreview]"
              />
            </Box>
            </Box>
           

            

          </Card>
          
          
            
          
        </Flex>
      </Flex>

    </ChakraProvider>
    
  )
}