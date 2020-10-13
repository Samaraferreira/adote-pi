import React from 'react';
import { TextField, Box, Button} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  boxChildContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: '30px',
    paddingRight: '30px',
    flexWrap: 'wrap'
  },
  boxAgeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  boxGenderContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: '30px',
    paddingRight: '30px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  }
}));



export default function AgeGender({age, sex, handleSubClick, handleAddClick, handleSexChange, handlePeriodChange}) {

    const classes = useStyles();

    return (

    <>
      <Box className={classes.boxContainer}>
        <Box className={classes.boxChildContainer}>

          <FormControl component="fieldset">
            <FormLabel component="legend">Idade</FormLabel>
            <Box className={classes.boxAgeContainer}>
              <Icon color="primary" style={{fontSize: 30}} onClick={handleSubClick}>indeterminate_check_box</Icon>
              <TextField
                id="outlined-number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                style={{width: 50, marginLeft: 10, marginRight: 10}}
                inputProps={{style: { textAlign: 'center' }}}
                value={age.number}
              />
              <Icon color="primary" style={{fontSize: 30}} onClick={handleAddClick}>add_box</Icon>
            </Box>
          </FormControl>

          <Box>
            <FormControl component="fieldset">
              <RadioGroup aria-label="period" name="period1" value={age.period} onChange={handlePeriodChange}>
                <FormControlLabel value="meses" control={<Radio />} label="Meses" />
                <FormControlLabel value="anos" control={<Radio />} label="Anos" />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box className={classes.boxGenderContainer}>
          <FormLabel component="legend">Sexo</FormLabel>
          <Box style={{width: '100%'}}>
            <RadioGroup row aria-label="gender" name="gender1" value={sex} style={{justifyContent: 'space-between'}} onChange={handleSexChange}>
              <FormControlLabel value="femea" control={<Radio />} label="Fêmea" />
              <FormControlLabel value="macho" control={<Radio />} label="Macho" />
            </RadioGroup>
          </Box>
        </Box>
      </Box>
    </>
    );
}
