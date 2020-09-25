import React from 'react';
import 'fontsource-roboto';
import {
    Typography,
    Button,
    makeStyles, Box
} from '@material-ui/core';


import Header from '../../components/Header';
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
    display:'flex',
    direction:'row',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'space-between',
    marginTop: '80px',
    marginLeft: '28px',
    marginRight: '28px',
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
        <>
            <Header />
            <Box className={classes.headerWithSubHeaderContainer}>
                <Box className={classes.textAndButton}>
                    <Typography className={classes.textHeaderWithSubHeader}>
                        Pets que aguardam adoção
                    </Typography>
                </Box>

                <Button variant="outlined" className={classes.buttonStyle}>
                  <i class="material-icons" >filter_alt</i>Filtrar
                </Button>
            </Box>
        </>
    );
}

export default HeaderWithSubHeader;
