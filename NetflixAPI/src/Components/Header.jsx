import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import Netflix from 'C:/Users/Onepay/Desktop/Portfolio/Netflix/NetflixAPI/Images/netflix.png'

const useStyle = makeStyles(() => ({

root:{
boxShadow:'none',
width:'350px',
height:'auto',
position:'absolute',
background:'transparent',
display: 'flex'

},



}));

export default function Header() {
  const classes = useStyle();
    return (
   
<AppBar  position='static' className={classes.root}>
   <img
src={Netflix} 
  />
</AppBar>
     
    )
}