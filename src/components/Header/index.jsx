import React from 'react';

import './styles.css';
import 'fontsource-roboto';
import {
    Typography,
    Button,
    makeStyles,
    Box
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({

  buttonStyle: {
      color: theme.palette.textColor.secundario,
      boxShadow: 'none',
      '&:hover': {
          boxShadow: 'none',
      },
      fontWeight: '400',
      fontSize: '18px',
      textTransform: 'none',
      width:'160px',
      height:'56px',
      borderRadius: '8px',

  },
  headerContainer: {
      display: 'flex',
      direction:'row',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      justifyContent: 'space-around',
      marginTop: '23px',
      marginLeft: '28px',
      marginRight: '28px',
      marginBottom: '23px',
      alignItems: 'center',

  },
  textHeader: {
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '33px',
      color: '#555',
  },
  adoteContainer: {
      display:'flex',
      direction: 'row',
  }
}));


function Header() {
  const classes = useStyle();

    return (
        <Box className={classes.headerContainer}>
            <Box className={classes.adoteContainer}>
                <Typography className={classes.textHeader}>
                    Adote
                </Typography>
                <Typography className={classes.textHeader} style={{color:'#7ADDDD'}}>.</Typography>
            </Box>
            <Button variant="contained" color="primary" className={classes.buttonStyle}>Quero doar</Button>
        </Box>
    );
}

export default Header;
