'use client'
import React, { useState, type ReactElement } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import {
  Card,
  CardHeader,
  CardBody,
  Alert,
  Flex,
  Input,
  FormControl,
  Button,
  ChakraProvider,
  FormLabel,
} from '@chakra-ui/react'
import { 
  COLOR,
  InputAlert,
  LogInTheme
} from '../components/styles'
import { UseAuth } from '../../../auth-context/auth-context'
import { ValidateName, ValidatePassword } from '../sign-up/sign-up-utils'
import { ROUTES } from '../utils/router-utils'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
interface LogInValues {
  email: string
  password: string
}

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8).max(200),
})

export default function LogIn(): ReactElement<string, string>{
  const { signIn } = UseAuth()
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
              // same shape as initial values
              console.log('logIn FORM SUBMITTED VALUES: '+ values)
              if( signIn ){
                try{
                  await signIn(values.email, values.password)
                  try{
                    router.push(ROUTES.DASHBOARD)
                  } catch (error) {
                    console.log(`🚀 logIn error `, error)
                  }
                } catch (error) {
                  console.log('logIn Page ON SUBMIT ERROR: '+ error)
                  setFormError(formError)
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
              {formError && <InputAlert>{formError}</InputAlert>}

            </Form>
          )}

        </Formik>
      </Card>
        
      </Flex>
    </Flex>

    </ChakraProvider>
  )
}