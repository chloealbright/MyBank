import React, { type ReactElement } from 'react'
import {
  Box,
  Flex,
  extendTheme,
  List,
  ListItem,
  Alert,
  AlertIcon, 
  Progress,
  FormLabel, 
  createMultiStyleConfigHelpers,
  Card,
  CardHeader,
  CardBody
} from '@chakra-ui/react'
import { cardAnatomy } from '@chakra-ui/anatomy'
import { Cardo } from 'next/font/google'
import MyBankBulletLogo from '../../../public/MyBankBulletLogo.png'
import MyBankPortfolioBulletLogo from '../../../public/MyBankPortfolioBulletLogo.png'
// use Loader
export function Loading() {
  return <Progress size='xs' isIndeterminate />
}

// use as default for Chakra UI components
export const spacing = {
  space: {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
  },
}  
export enum COLOR{
  OFF_WHITE = '#f1efe7',
  WHITE = '#ffffff',
  BLACK= '#000000',
  BLUE= '#3060D6',
  LIGHT_BLUE= '#86a9ff',
  GREY = '#5f6a79',
  DARK_GREY = '#1a202c',
  LIGHT_GREY= '#edede9',
  BOX_GREY = 'rgba(95, 106, 121, 0.5)',
  ERROR_RED= 'red.500'
  
}

export enum SIZE {
  small = '10px',
  large = '30px',
  xlarge = '60px',
  xxlarge = '90px'
}
interface SpacerComponentProps {
  spacing: SIZE
}

export const SpacerComponent = (
  { spacing }: SpacerComponentProps): ReactElement => {
  return <Box py={spacing}></Box>
}

export const theme = extendTheme({
  fonts: {
    heading: `'Quicksand', sans-serif`,
    body: `'Merriweather Sans', sans-serif`,
  }
})


export const FONTS = {
  NAVBAR: `'Quicksand', sans-serif`,
  DEFAULT: `'Poppins', sans-serif`,
  HOMEPAGE_BODY: `'DM Sans', sans-serif`,
  MERRIWEATHER: `'Merriweather Sans', sans-serif`,
  VERDANA: `'Verdana', sans-serif`,
}


// HomePage
interface BulletItems {
  text: string
  fontSize: number | string
}



export function BulletItem(
  {
    text,
    fontSize
  }: BulletItems,
): ReactElement{
  return(
    <Flex>
      <List
        display='flex'
        flexDirection='row'
        py={4}
      >
        <ListItem
          py={2}
          width= '10%'
        > 
          <img 
            src={MyBankBulletLogo.src} 
            width='14px' 
            height='14px' 
            alt='[Bullet Logo]'
          />
          
        </ListItem>
        <ListItem
            fontFamily={FONTS.HOMEPAGE_BODY}
            fontSize={fontSize}
            textColor={COLOR.WHITE}
          >
            {text}
          </ListItem>
      </List>

    </Flex>

  )
}

// END HomePage

// SignUp Page
export function InputAlert (
  { children }: { children: string }
): ReactElement<string, string>  {
  
  return (
    <Alert 
      fontFamily={FONTS.HOMEPAGE_BODY}
      fontSize={16}
      textColor={COLOR.ERROR_RED}
      variant='error'
    >
      <AlertIcon />
        {children}
    </Alert>
  )
}

// export function InputLabel (
//   { children }: { children: string }
// ): ReactElement<string, string>  {
  
//   return (
//     <FormLabel 
//       paddingTop={4} 
//       fontFamily={FONTS.HOMEPAGE_BODY}
//       fontSize={18}
//       textColor={COLOR.WHITE}
//       max-width='100%'
//     >
//       {children}
//     </FormLabel>
//   )
// }

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

/** CARD STYLE
padding={[10, 20, 10, 10]}
          my={20}
          max-width='100%'
          bg={COLOR.BOX_GREY}
          textColor={COLOR.WHITE}
header:
      fontFamily={FONTS.DEFAULT}
            textColor={COLOR.WHITE}
            fontSize={30}
            fontWeight='bold'
 body:
      
            fontFamily={FONTS.HOMEPAGE_BODY}
            fontSize={20}
            textColor={COLOR.WHITE}   
            
button:
         width='60%'
          mx={50}
          marginTop={4}
          justifyContent='center'
          fontFamily={FONTS.HOMEPAGE_BODY}
          fontSize={18}
 */
// export const variants = definePartsStyle({
//   // define the part you're going to style
//   container: {
//     backgroundColor: COLOR.BOX_GREY,
//     textColor:COLOR.WHITE,
//     my:20,
//     maxWidth: '100%',
//     padding:[10, 20, 10, 10],
//   },
//   header: {
//     paddingBottom: '2px',
//   },
//   body: {
//     paddingTop: '2px',
//   },
//   footer: {
//     paddingTop: '2px',
//   },
// })

// export const cardTheme = defineMultiStyleConfig({ variants })

export const SignUpTheme = extendTheme({
  components: {
    Card:{
      baseStyle: {
        container: {
          backgroundColor: COLOR.BOX_GREY,
          textColor: COLOR.WHITE,
          my: 20,
          width: '30rem',
          maxWidth: '100%',
          padding: [10, 20, 10, 10],
          borderRadius: '10%'
        },
        header: {
          display:'flex',
          justifyContent: 'center',
          fontFamily:FONTS.DEFAULT,
          textColor:COLOR.WHITE,
          fontSize:20,
          fontWeight:'bold',
          py: 1
        },
        body: {
          spacing: 4
        }
      },
      
    },
    FormLabel:{
      baseStyle: {
      paddingTop: 4,
      fontFamily: FONTS.HOMEPAGE_BODY,
      fontSize: 16,
      color: COLOR.WHITE,
      maxWidth: '100%',
      }
    },
    Button: {
      baseStyle: {
        bg: COLOR.OFF_WHITE,
        textColor: COLOR.BLACK,
        fontFamily:FONTS.DEFAULT,
        fontWeight:'bold',
        fontSize: 16,
        width:'50%',
        marginTop:4,
        mx:'25%',
      },
    },
    Input:{
      variants:{
        baseStyle:{
          field:{
            bg: COLOR.BOX_GREY,
            placeholderTextColor: COLOR.LIGHT_GREY,
            color: COLOR.WHITE,
            fontFamily:FONTS.HOMEPAGE_BODY,
            fontSize: 16,
          }
        }
      }
    }

  }
})

// END SignUp Page

// LogIn Page
export const LogInTheme = extendTheme({
  components: {
    Card:{
      baseStyle: {
        container: {
          backgroundColor: COLOR.BOX_GREY,
          textColor: COLOR.WHITE,
          my: 20,
          width: '30rem',
          maxWidth: '100%',
          padding: 10,
          borderRadius: '10%'
        },
        header: {
          display:'flex',
          justifyContent: 'center',
          fontFamily:FONTS.DEFAULT,
          textColor:COLOR.WHITE,
          fontSize:25,
          fontWeight:'bold',
          py: 1
        },
        body: {
          spacing: 4
        }
      },
      
    },
    FormLabel:{
      baseStyle: {
      paddingTop: 4,
      fontFamily: FONTS.HOMEPAGE_BODY,
      fontSize: 16,
      color: COLOR.WHITE,
      maxWidth: '100%',
      }
    },
    Button: {
      baseStyle: {
        bg: COLOR.OFF_WHITE,
        textColor: COLOR.BLACK,
        fontFamily:FONTS.DEFAULT,
        fontWeight:'bold',
        fontSize: 16,
        width:'50%',
        marginTop:4,
        mx:'25%',
      },
    },
    Input:{
      variants:{
        baseStyle:{
          field:{
            bg: COLOR.BOX_GREY,
            placeholderTextColor: COLOR.LIGHT_GREY,
            color: COLOR.WHITE,
            fontFamily:FONTS.HOMEPAGE_BODY,
            fontSize: 16,
          }
        }
      }
    }

  }
})
// END LogIn Page

// Contact Page
export const ContactTheme = extendTheme({
  components: {
    Card:{
      baseStyle: {
        container: {
          backgroundColor: COLOR.BOX_GREY,
          my: 10,
          mx: 10,
          width: '30rem',
          height:'fit-content',
          maxWidth: '100%',
          padding: 5,
          borderRadius: '5%'
        },
        header: {
          display:'flex',
          justifyContent: 'center',
          fontFamily:FONTS.DEFAULT,
          textColor:COLOR.WHITE,
          fontSize:30,
          fontWeight:'bold',
          paddingBottom: 2,
        },
        body: {
          spacing: 4
        }
      },   
    },

  }
})

// END Contact Page

// Portfolio Page
export const PortfolioTheme = extendTheme({
  components: {
    Card:{
      baseStyle: {
        container: {
          backgroundColor: COLOR.BOX_GREY,
          my: 10,
          mx: 10,
          width: '30rem',
          height:'fit-content',
          maxWidth: '100%',
          padding: 5,
          borderRadius: '5%'
        },
        header: {
          display:'flex',
          justifyContent: 'center',
          fontFamily:FONTS.DEFAULT,
          textColor:COLOR.WHITE,
          fontSize:30,
          fontWeight:'bold',
          paddingBottom: 2,
        },
        body: {
          spacing: 4
        }
      },   
    },

  }
})


export function PortfolioBullet(
  {
    text,
    fontSize
  }: BulletItems
): ReactElement{
  return(
    <Flex>
      <List
        display='flex'
        flexDirection='row'
        py={2}
      >
        <ListItem
          py={2}
          width= {20}
        >
          <img 
            src={MyBankPortfolioBulletLogo.src} 
            width='14px' 
            height='14px' 
            alt='[Bullet Logo]'
          />
        </ListItem>
        <ListItem
            mx={4}
            fontFamily={FONTS.DEFAULT}
            fontSize={fontSize}
            textColor={COLOR.WHITE}
          >
            {text}
          </ListItem>
      </List>

    </Flex>

  )
}
// END Portfolio Page

// Dashboard Page

export const DashboardTheme = extendTheme({
  components: {
    Card:{
      baseStyle: {
        container: {
          backgroundColor: COLOR.BOX_GREY,
          my: 10,
          mx: 10,
          width: '30rem',
          height:'fit-content',
          maxWidth: '100%',
          padding: 5,
          borderRadius: '5%'
        },
        header: {
          display:'flex',
          justifyContent: 'center',
          fontFamily:FONTS.DEFAULT,
          textColor:COLOR.WHITE,
          fontSize:30,
          fontWeight:'bold',
          paddingBottom: 2,
        },
        body: {
          spacing: 4
        }
      },   
    },

  }
})

// END DashboardPage

// LinkedAccounts Page

export const LinkedAccountsTheme = extendTheme({
  components: {
    Card:{
      baseStyle: {
        container: {
          backgroundColor: COLOR.BOX_GREY,
          my: 10,
          mx: 10,
          width: '30rem',
          height:'fit-content',
          maxWidth: '100%',
          padding: 5,
          borderRadius: '5%'
        },
        header: {
          display:'flex',
          justifyContent: 'center',
          fontFamily:FONTS.DEFAULT,
          textColor:COLOR.WHITE,
          fontSize:30,
          fontWeight:'bold',
          paddingBottom: 2,
        },
        body: {
          spacing: 4
        }
      },   
    },

  }
})

// END LinkedAccounts Page