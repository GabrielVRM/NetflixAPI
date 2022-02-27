import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

const useStyle = makeStyles (() => ({

  root:{

  },

}))

export default function App() {
  const classes = useStyle();
  return (
  <>
   <Typography variant='body2'>
     Hello wolrd
   </Typography>
  </>
  )
};