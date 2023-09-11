'use client'
import React, { type ReactElement } from 'react'
import { Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { COLOR } from '../styles'
import { useRouter } from 'next/navigation'
import { FONTS } from '../styles'

interface NavBarItems {
  text: string
  path: string
  isFocused: boolean
}

export default function NavItem (
  {
    text,
    path,
    isFocused
  }: NavBarItems
): ReactElement {
  const router = useRouter()
  
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      px={5}
      py={5}
      color={isFocused ? COLOR.OFF_WHITE : COLOR.WHITE}
      _hover={{ cursor: 'pointer', backgroundColor: COLOR.GREY }}
      backgroundColor={isFocused ? COLOR.DARK_GREY : COLOR.BLACK}
      borderRadius={20}
    >
      <Link href={path} onClick={() => router.push(path)}>        
        <Text 
          fontFamily={FONTS.NAVBAR} 
          fontSize={28} 
          fontWeight='bold'
          px='14px'
        >
          {text}
        </Text>
      </Link>
    </Flex>
  )
}
