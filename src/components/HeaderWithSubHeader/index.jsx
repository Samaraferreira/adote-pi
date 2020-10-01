import React from 'react';
import 'fontsource-roboto';
import {
  Typography,
  Button,
  makeStyles, Box, Divider
} from '@material-ui/core';

import Header from '../Header';

//import { findByLabelText } from '@testing-library/react';

const useStyle = makeStyles((theme) => ({

  buttonStyle: {
    borderColor:'#EBEBF1',
    border:'1px solid',
    width:'109px',
    height:'48px',
    textTransform:'none',
  },

  headerWithSubHeaderContainer: {
    maxWidth:'1100px',
    display:'flex',
    direction:'row',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'space-between',
    marginTop: '64px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '28px',
    paddingRight: '28px',
    alignItems: 'center',
  },

  textHeaderWithSubHeader: {
    fontSize: '24px',
    lineHeight: '28px',
  },

  textAndButton: {
    display:'flex',
    direction:'row'
  },
}));

function HeaderWithSubHeader() {
    const classes = useStyle();
    return (
        <React.Fragment>
            <Box className={classes.headerWithSubHeaderContainer}>
                <Box className={classes.textAndButton}>
                    <Typography className={classes.textHeaderWithSubHeader}>
                        Pets que aguardam adoção
                    </Typography>
                </Box>

                <Button variant="outlined" className={classes.buttonStyle}>
                  <i className="material-icons" >filter_alt</i>Filtrar
                </Button>
            </Box>
        </React.Fragment>
    );
}

export default HeaderWithSubHeader;
