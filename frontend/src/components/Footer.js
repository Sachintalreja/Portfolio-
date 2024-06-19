import { Heading, Link, Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Heading textAlign='center' marginTop='2rem'>
         Contact me 
      </Heading>
      <Text textAlign='center' color='blue.600' > <Link href='mailto:sachintalreja94@gmail.com'>sachintalreja94@gmail.com</Link></Text>
    </div>
  )
}

export default Footer

