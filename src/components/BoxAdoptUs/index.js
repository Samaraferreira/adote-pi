import React from 'react';
import 'fontsource-roboto';
import {
    Typography,
    Button,
    makeStyles, Box
} from '@material-ui/core';
import {ReactComponent as Banner} from '../../assets/img-banner.svg';

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
    background: 'linear-gradient(45deg, #B8EBC8 30%, #8EE1EB 90%)',
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

  textAndImage: {
    display:'flex',
  },

  bannerImage: {
    display: 'flex',
    alignSelf: 'flex-end',
  }
}));

function BoxAdoptUs() {
    const classes = useStyle();
    return (
        <React.Fragment>
            <Box className={classes.headerWithSubHeaderContainer}>
                <Box className={classes.textAndImage}>
                <Typography variant='h2' component='h2'> Encontre um verdadeiro amigo</Typography>
                <Typography variant='p' component='p'> para compartilhar os melhores momentos</Typography>
                <Banner className={classes.bannerImage} />
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default BoxAdoptUs;
