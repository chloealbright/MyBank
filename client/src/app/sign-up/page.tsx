'use client'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Input,
  Text,
  FormControl,
  Button,
  ChakraProvider,
  FormLabel,
} from '@chakra-ui/react'
import { 
  COLOR,
  FONTS,
  InputAlert,
  SignUpTheme
} from '../components/styles'
import { UseAuth } from '../../../auth-context-provider'
import { ValidateName, ValidatePassword } from './sign-up-utils'
import { ROUTES } from '../utils/router-utils'
import { useRouter } from 'next/navigation'
import { addDoc, collection } from "@firebase/firestore"
import { db } from '../../../firebase/firebase'
import Link from 'next/link'

interface SignUpValues{
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
export default function SignUp():  React.ReactElement{
  const { isAuthenticated, signUp } = UseAuth()
  const [formError, setFormError] = useState<string>('')
  const [isSubmitting, setFormSubmit] = useState<boolean>(false)
  const router = useRouter()
  const ref = collection(db, "users")

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
            Create Your Account 
          </CardHeader>
          
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            
            onSubmit={ async (values: SignUpValues) => {
              
              // same shape as initial values
              console.log('SIGNUP FORM SUBMITTED VALUES: ', 
                values.firstName, 
                values.lastName, 
                values.email, 
                values.password
              )
              const data = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
              }

              try{
                addDoc(ref, data)
                setFormError('')
                setFormSubmit(true)
                
                await signUp(values.firstName, values.lastName, values.email, values.password)
                alert("successfully registered!")
                router.push(ROUTES.LOG_IN)
                
              } catch (error) {
                console.log(`🚀 Signup error `, error)
                setFormError(formError)
                setFormSubmit(false)
              }
              setFormSubmit(false)
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
                      placeholder='cannoli123@gmail.com'
                      {...getFieldProps('email')}
                      type='email'
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
      }    
      </Flex>
    </Flex>

    </ChakraProvider>
    
  )
}