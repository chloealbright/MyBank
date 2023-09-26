'use client'
import React, { useState, type ReactElement } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import {
  Card,
  Text,
  CardHeader,
  CardBody,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
  Flex,
  Input,
  FormControl,
  Button,
  ChakraProvider,
  FormLabel,
} from '@chakra-ui/react'
import { 
  COLOR,
  FONTS,
  InputAlert,
  LogInTheme
} from '../components/styles'
import { UseAuth } from '../../../auth-context-provider'
import { ValidateName, ValidatePassword } from '../sign-up/sign-up-utils'
import { ROUTES } from '../utils/router-utils'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import Link from 'next/link'

interface LogInValues {
  email: string
  password: string
}

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: ValidatePassword,
})

export default function LogIn(): ReactElement<string, string>{
  const { isAuthenticated, signIn } = UseAuth()
  const [formError, setFormError] = useState<string>('')
  const [isSubmitting, setFormSubmit] = useState<boolean>(false)
  const router = useRouter()

  return(
    <ChakraProvider theme={LogInTheme}>
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
      >
        {isAuthenticated &&
          <Card>
            <CardHeader> 
              Already Signed In 
            </CardHeader>
            <Link href={ROUTES.DASHBOARD} onClick={() => router.push(ROUTES.DASHBOARD)}>        
              <Text 
                fontFamily={FONTS.DEFAULT}
                textColor={COLOR.LIGHT_BLUE}
                fontSize={16}
                fontWeight='bold'
                py={5}
                display='flex'
                justifyContent='center'
              >
                Goto Dashboard 🚀
              </Text>
            </Link>

          </Card>
        }

        {!isAuthenticated &&
          <Card>
            <CardHeader> 
              Log In
            </CardHeader>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}

              onSubmit={ async (values: LogInValues) => {
                setFormSubmit(true)
                console.log('logIn FORM SUBMITTED VALUES: '+ values)
                if( signIn ){
                  try{
                    await signIn(values.email, values.password)
                    try{
                      router.push(ROUTES.DASHBOARD)
                    } catch (error) {
                      console.log(`🚀 logIn error `, error)
                      if (error instanceof Error) { // for type assertion, can't pass any to string
                        setFormError(error.message);
                      }
                      setFormSubmit(false)
                    }
                  } catch (error) {
                    console.log('logIn Page ON SUBMIT ERROR: '+ error)
                    if (error instanceof Error) { 
                      setFormError(error.message);
                    }
                    setFormSubmit(false)
                  }

                }
                
              }}
              validationSchema={LogInSchema}
              >
              {({ getFieldProps, touched, errors }) => (
                <Form>
                  <CardBody>
              
                    <FormControl>
                      <FormLabel> Email </FormLabel>
                        <Input 
                          placeholder='cannoli123o@gmail.com'
                          {...getFieldProps('email')}
                          type='email'
                            id='email'
                            variant='baseStyle'
                        />
                        {touched.email && errors.email && (
                          <InputAlert>{errors.email}</InputAlert>)}
                    </FormControl>
                    <FormControl>
                    <FormLabel> Password </FormLabel>
                        <Input 
                          placeholder='password'
                          {...getFieldProps('password')}
                          type='password'
                            id='password'
                            variant='baseStyle'
                        />
                        {touched.password && errors.password && (
                          <InputAlert>{errors.password}</InputAlert>)}
                    </FormControl>
            
                  </CardBody>
                  <Button 
                    type='submit' 
                    isLoading={isSubmitting}
                  
                  >
                    Log In
                  </Button>
                  
                  {formError && 
                    <Flex
                      justifyContent={'center'}
                      maxWidth={'85%'}
                      my={3}
                      mx={20}
                    >
                      <Alert 
                        status='error'
                        backgroundColor={'inherit'}
                        ringColor={'red.600'}
                        py={0}
                        px={5}
                        
                      >
                        <AlertIcon/>
                          <AlertDescription
                            textColor={'red.600'}
                            textOverflow={'wrap'}
                          >
                            {formError}
                          </AlertDescription>
                      </Alert>

                    </Flex>
                  }

                </Form>
              )}
            </Formik>
          </Card>
        }
        
        
      </Flex>
    </Flex>

    </ChakraProvider>
  )
}