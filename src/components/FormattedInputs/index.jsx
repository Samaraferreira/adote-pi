import React from "react";
import PropTypes from "prop-types";
import MaskedTextField from "react-text-mask";
// import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Input } from "@material-ui/core/";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      //marginTop: theme.spacing(4),
    },
  },
  textFieldStyle: {
    width: '100%',
    marginBottom: theme.spacing(3),
  }
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedTextField
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "5",
        "5",
        " ",
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};


export default function FormattedInputs({name, whatsapp, handleNameChange, handleWhatsappChange}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <FormControl> */}
        <TextField
          className={classes.textFieldStyle}
          value={whatsapp}
          onChange={handleWhatsappChange}
          name="textmask"
          id="formatted-text-mask-input"
          label="Seu Whatsapp"
          InputProps={{
            inputComponent: TextMaskCustom,
          }}
          variant="outlined"
          startAdornment={
            <i className="material-icons" style={{color: '#49B7C6', marginRight: '10px'}} >call</i>
          }
        />
      {/* </FormControl> */}
      <TextField
        className={classes.textFieldStyle}
        id="outlined-secondary"
        variant="outlined"
        color="secondary"
        placeholder="Nome do Pet"
        label="Nome do Pet"
        type="text"
        InputProps={{
          startAdornment: (
              <i className="material-icons" style={{color: '#49B7C6', marginRight: '10px'}} >pets</i>
          )
        }}
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}
