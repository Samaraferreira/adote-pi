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
    maxWidth: '1000px',
    width: '100%',
    display:'flex',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    background: 'linear-gradient(45deg, #B8EBC8 30%, #8EE1EB 90%)',
    marginTop: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '24px',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '20px'
  },

  title: {
    marginTop: '38px',
    fontWeight: 'bold',
    fontSize: '2em',
  },

  text: {
    marginTop: '8px',
    fontWeight: 'normal',
    fontSize: '1.3em',
    color: '#ffff'
  },

  textAndImage: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  content: {
    margin: '24px 8px 32px 8px'
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
                  <Box className={classes.content}>
                    <Typography className={classes.title} variant='h2' component='h2'>Encontre um amigo verdadeiro</Typography>
                    <Typography className={classes.text}  variant='p' component='p'> para compartilhar os melhores momentos</Typography>
                  </Box>
                  <Banner className={classes.bannerImage} />
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default BoxAdoptUs;
