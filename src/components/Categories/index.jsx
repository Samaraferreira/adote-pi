import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Box} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import AgeGender from '../AgeGender';

const useStyles = makeStyles((theme) => ({
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

export default function Categories({type, age, sex, handleTypeChange, handleSubClick, handleAddClick, handleSexChange, handlePeriodChange}) {
  const classes = useStyles();

  return (
    <Box className={classes.boxContainer}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="tipoAnimal-label">Tipo</InputLabel>
        <Select
          labelId="tipoAnimal-label"
          id="tipoAnimal"
          value={type}
          onChange={handleTypeChange}
          label="Tipo"
        >
          <MenuItem value="" disabled>
            <em>Selecione</em>
          </MenuItem>
          <MenuItem value={'dog'}>Cachorro</MenuItem>
          <MenuItem value={'cat'}>Gatos</MenuItem>
          <MenuItem value={'bird'}>Pássaros</MenuItem>
          <MenuItem value={'others'}>Outros</MenuItem>
        </Select>
      </FormControl>

      <AgeGender
        age={age}
        sex={sex}
        handleSubClick={handleSubClick}
        handleAddClick={handleAddClick}
        handleSexChange={handleSexChange}
        handlePeriodChange={handlePeriodChange}
      />
     </Box>
  );
}



