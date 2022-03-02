import React from 'react'

  type Props={
    error:string;
 }
const ErrorMsg :React.FC<Props>= ({error}) => {
  return (
   <>{!!error?<small style={{color:'red'}}>{error}</small>:null}</>
  )
}

export default ErrorMsg