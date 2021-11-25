import React from 'react'
import {green, orange, red} from '@mui/material/colors';

const getNumberColor = number => {
  switch(number) {
    case 1:   
      return red[600]
    case 2:   
      return red[400]
    case 3:   
      return orange[300]
    case 4:   
      return green[400]
    default:
      return green[600]
  }
}

const OutlinedNumber = ({number}) => {

  const styles = {
    numberStyle: {
      color: 'black',
      fontFamily: 'Doppio One',
      textAlign: 'center',
      paddingTop: 7
    },
    containerStyle: {
      backgroundColor: getNumberColor(number),
      width: 35,
      height: 35,
      borderRadius: 35,
    }
  }
  
  return ( 
    <div style={styles.containerStyle}><div style={styles.numberStyle}>{number}</div></div>
  )
}

export default OutlinedNumber