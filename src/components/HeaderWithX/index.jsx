import React from 'react';
import 'fontsource-roboto';
import {
    Typography,
    makeStyles, Box, Divider
} from '@material-ui/core';
import CloseIcon from '../../assets/icons/icon-close.svg';

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
    paddingBottom: '23px',
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

function HeaderWithX() {
    const classes = useStyle();
    return (
      <React.Fragment>
        <Box className={classes.HeaderWithX}>
          <Box className={classes.adoteContainer}>
              <Typography className={classes.textHeaderWithX}>
                  Adote
              </Typography>
              <Typography className={classes.textHeaderWithX} style={{color:'#7ADDDD'}}>.</Typography>
          </Box>
          {/* <i className="material-icons">CloseIcon</i> */}
          <img src={CloseIcon} alt={'Fechar'}></img>
        </Box>
      </React.Fragment>
    );
}

export default HeaderWithX;
