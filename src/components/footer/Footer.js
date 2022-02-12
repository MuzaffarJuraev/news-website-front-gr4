import React, { useState, useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {

  const d = new Date();
let year = d.getFullYear();
  const [data, setData] = useState([])
useEffect(() => {
  axios.get("http://localhost:5000/api/category/")
    .then((result) => {
      if (result.status === 200) {
        console.log(result);
        setData(result.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}, []);  



  return (
    <div style={{ height: 280}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} ></Grid>
        <Grid item xs={5} >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
          <Grid item xs={12} sx={{ fontSize: 30, paddingRight: 30}}> WEB<b>MAG</b> </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={3} sx={{marginLeft: 14, fontSize: 20, color: 'gray'}}>Privacy Policy</Grid>
          <Grid item xs={2} sx={{fontSize: 20, color: 'gray'}}>Advertisement</Grid>
          <Grid item xs={12} sx={{fontSize: 15, color: 'gray',marginBottom: 0, paddingBottom: 0}}> ©️ Copyright ©️ {year} All rights reserved | This template is made with ❤️ by  </Grid>
          <Grid item xs={12} sx={{ paddingRight: 30, marginTop: 0, color: 'gray', paddingTop: 0}}>  <b style={{paddingRight: 40  }}>Colorlib</b>  </Grid>

          </Grid>
          </Box>      </Grid>
        <Grid item xs={7} style={{}}>
          <Grid container spacing={2}>
        <Grid item xs={12} ></Grid>

              <Grid item xs={2} sx={{fontSize: 20}}> <b> About as</b>
              <Grid container spacing={2}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>

                <Grid item xs={12} sx={{color: 'gray', fontSize: 18}}>About Us</Grid>
                <Grid item xs={12} sx={{color: 'gray', fontSize: 18}}>Join Us</Grid>
                <Grid item xs={12} sx={{color: 'gray', fontSize: 18}}>Contacts</Grid>
              </Grid>
               </Grid>
              <Grid item xs={1} sx={{backgroundColor: 'white'}}></Grid>
              <Grid item xs={2} sx={{fontSize: 20}}> <b> Categories</b>
              <Grid container spacing={2}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
                  {data.map(item => {
                    return (
                <Grid key={item.id} item xs={12} sx={{color: 'gray', fontSize: 18}}> {item.name} </Grid>

                    )
                  })}
                
              </Grid>
               </Grid>
              <Grid item xs={1} sx={{backgroundColor: 'white'}}></Grid>

              <Grid item xs={4} sx={{fontSize: 20, paddingLeft: 30}}> <b>Join our Newsletter </b> 
              <Grid container spacing={2}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>

                <Grid item xs={12} sx={{color: 'gray', fontSize: 18}}>
                <TextField
                sx={{border: '1px solid gray'}}
                placeholder='Enter your email'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <TelegramIcon />
            </InputAdornment>
          ),
        }}
        
      />
                </Grid>
                <Grid item xs={12} sx={{color: 'gray', marginRight: 18, fontSize: 20, paddingLeft: 30}} > <FacebookIcon /> <TwitterIcon /><GoogleIcon /><PinterestIcon />  </Grid>
               
              </Grid>
              </Grid>
              
          </Grid>
        </Grid>
       
        </Grid>
    </Box>
      </div>
  )
}

export default Footer