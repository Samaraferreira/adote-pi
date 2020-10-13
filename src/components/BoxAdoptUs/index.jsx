import React from 'react';
import 'fontsource-roboto';
import {
    Typography,
    Button, Box
} from '@material-ui/core';
import {ReactComponent as Banner} from '../../assets/img-banner.svg';

//import { findByLabelText } from '@testing-library/react';


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
