'use client'
import React, { type ReactElement } from 'react'
import {
  Box,
  Flex,
  Link,
  Button
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { BulletItem ,COLOR, FONTS } from '../components/styles'


interface TextItems {
  text: string
  path: string
  bgColor: string
  textColor: string
}

export function ButtonItem(
  {
    text,
    path,
    bgColor,
    textColor,
  }: TextItems
): ReactElement{
  const router = useRouter()

  const isBlack: boolean = bgColor === COLOR.BLACK

  return(
    
      <Button
        borderRadius={1}
        height='75%'
        width='45%'
        fontFamily={FONTS.HOMEPAGE_BODY}
        bgColor={bgColor}
        border='3px solid'
        borderColor= {isBlack ? COLOR.OFF_WHITE : COLOR.WHITE}
        textColor={textColor}
      >
        <Link
          href={path} onClick={() => router.push(path)}
        >
          {text}
        </Link>
        

      </Button>
    
    

  )
}