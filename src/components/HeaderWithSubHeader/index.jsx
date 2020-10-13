import React from 'react';
import 'fontsource-roboto';
import {
  Typography,
  Button, Box, Divider
} from '@material-ui/core';
import useStyle from './styles';

import Header from '../Header';

//import { findByLabelText } from '@testing-library/react';

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

                {/* <Button variant="outlined" className={classes.buttonStyle}>
                  <i className="material-icons" >filter_alt</i>Filtrar
                </Button> */}
            </Box>
        </React.Fragment>
    );
}

export default HeaderWithSubHeader;
