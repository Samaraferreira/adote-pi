import React, { useContext }  from 'react';
import {
    Typography,
    Button,
    Box
} from '@material-ui/core';
import 'fontsource-roboto';
import useStyle from './styles';

import { ModalContext } from '../../App';


function Header() {
  const classes = useStyle();
  const { setOpenModal } = useContext(ModalContext);
  function handleClick () {
    window.location.href = "https://adote.vercel.app/";
  }

    return (
        <Box className={classes.headerContainer}>
            <Box className={classes.adoteContainer} onClick={() => handleClick()}>
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
