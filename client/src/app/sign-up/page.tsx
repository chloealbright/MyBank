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
  SignUpTheme
} from '../components/styles'
import { UseAuth } from '../../../auth-context/auth-context'
import { ValidateName, ValidatePassword } from './sign-up-utils'
import { ROUTES } from '../utils/router-utils'
import { useRouter } from 'next/navigation'


interface SignUpValues {
  firstName: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
}

const SignUpSchema = Yup.object().shape({
  firstName: ValidateName,
   lastName: ValidateName,
  email: Yup.string().email('Invalid email').required('Required'),
  password: ValidatePassword,
  repeatPassword: Yup
  .string()
  .oneOf([Yup.ref('password')], 'Passwords must match')
  .required('Required'),
})



// ReactElement<string, string>
// JSX.Element
export default function SignUp(): JSX.Element{
  const { signUp } = UseAuth()
  const [formError, setFormError] = useState<string>('')
  const [isSubmitting, setFormSubmit] = useState<boolean>(false)
  const router = useRouter()

  return(
    <ChakraProvider theme={SignUpTheme}>
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
            Create Your Account 
          </CardHeader>
          
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              repeatPassword: '',
            }}
            
            onSubmit={ async (values: SignUpValues) => {
              setFormSubmit(true)
              // same shape as initial values
              console.log('SIGNUP FORM SUBMITTED VALUES: '+ values)

              try{
                await signUp(values.firstName, values.lastName, values.email, values.password)
                try{
                  router.push(ROUTES.LOG_IN)
                } catch (error) {
                  console.log(`🚀 Signup error `, error)
                  setFormError(formError)
                  setFormSubmit(false)
                }
              } catch (error) {
                console.log('SignUp Page ON SUBMIT ERROR: '+ error)
                setFormError(formError)
                setFormSubmit(false)
              }
            }}
            validationSchema={SignUpSchema}
          >
          {({ getFieldProps, touched, errors }) => (
            <Form>
              <CardBody>
                <FormControl>
                  <FormLabel> First Name </FormLabel>
                    <Input 
                      placeholder='Tony'
                      {...getFieldProps('firstName')}
                      id='firstName'
                      variant='baseStyle'
                    />
                  {touched.firstName && errors.firstName && (
                    <InputAlert>{errors.firstName}</InputAlert>)}
                </FormControl>
                <FormControl>
                <FormLabel> Last Name </FormLabel>
                    <Input 
                        placeholder='Soprano'
                        {...getFieldProps('lastName')}
                        type='lastName'
                        id='lastName'
                        variant='baseStyle'
                    />
                    {touched.lastName && errors.lastName && (
                      <InputAlert>{errors.lastName}</InputAlert>)}
                </FormControl>
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
                <FormControl>
                <FormLabel> Repeat Password </FormLabel>
                    <Input 
                      placeholder='repeat password'
                      {...getFieldProps('repeatPassword')}
                      type='password'
                        id='repeatPassword'
                        variant='baseStyle'
                    />
                    {touched.repeatPassword && errors.repeatPassword && (
                      <InputAlert>{errors.repeatPassword}</InputAlert>)}
                </FormControl>
              </CardBody>
              <Button 
                type='submit' 
                isLoading={isSubmitting}
               
              >
                Sign Up
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
