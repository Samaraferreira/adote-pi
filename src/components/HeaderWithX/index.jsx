import React from 'react';
import 'fontsource-roboto';
import {
    Typography,
    makeStyles, Box, Divider
} from '@material-ui/core';

import closeIcon from '../../assets/icons/icon-close.svg';

//import { findByLabelText } from '@testing-library/react';

const useStyle = makeStyles((theme) => ({

  HeaderWithX: {
    maxWidth:'1100px',
    display: 'flex',
    direction:'row',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'space-between',
    paddingTop: '23px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '16px',
    paddingLeft: '24px',
    paddingRight: '24px',
    alignItems: 'center',
  },

  textHeaderWithX: {
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
