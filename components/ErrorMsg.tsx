import { Text } from '@chakra-ui/react'
import React from 'react'

  type Props={
    error:string;
 }
const ErrorMsg :React.FC<Props>= ({error}) => {
  return (
   <>{!!error?<Text style={{color:'red'}}>{error}</Text>:null}</>
  )
}

export default ErrorMsg