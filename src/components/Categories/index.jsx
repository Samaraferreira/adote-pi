import React from 'react';
import { InputLabel, Box} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import AgeGender from '../AgeGender';
import useStyles from './styles';


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
          <MenuItem value={'cat'}>Gato</MenuItem>
          <MenuItem value={'bird'}>Pássaro</MenuItem>
          <MenuItem value={'other'}>Outro</MenuItem>
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



