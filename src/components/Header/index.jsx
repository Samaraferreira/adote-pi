import React, { useContext }  from 'react';
import { ModalContext } from '../../App';

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
    maxWidth:'1100px',
    display: 'flex',
    direction:'row',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'space-between',
    paddingTop: '23px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '23px',
    paddingLeft: '24px',
    paddingRight: '24px',
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
  const { setOpenModal } = useContext(ModalContext);

    return (
        <Box className={classes.headerContainer}>
            <Box className={classes.adoteContainer}>
                <Typography className={classes.textHeader}>
                    Adote
                </Typography>
                <Typography className={classes.textHeader} style={{color:'#7ADDDD'}}>.</Typography>
            </Box>
            <Button onClick={() => setOpenModal(true)} variant="contained" color="primary" className={classes.buttonStyle}>Quero doar</Button>
        </Box>
    );
}

export default Header;
