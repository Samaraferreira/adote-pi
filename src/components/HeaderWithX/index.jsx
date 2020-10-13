import React from 'react';
import 'fontsource-roboto';
import {
    Typography, Box
} from '@material-ui/core';
import useStyle from './styles';

import closeIcon from '../../assets/icons/icon-close.svg';


function HeaderWithX({ close }) {
    const classes = useStyle();
    return (
      <Box className={classes.HeaderWithX}>
        <Box className={classes.adoteContainer}>
            <Typography className={classes.textHeaderWithX}>
                Adote
            </Typography>
            <Typography className={classes.textHeaderWithX} style={{color:'#7ADDDD'}}>.</Typography>
        </Box>
        {/* <i className="material-icons">CloseIcon</i> */}
        <button onClick={() => close(false)} className="btn-close">
          <img src={closeIcon} alt="fechar"/>
        </button>
      </Box>
    );
}

export default HeaderWithX;
