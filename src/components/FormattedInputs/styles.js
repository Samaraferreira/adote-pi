import makeStyles from "@material-ui/core/styles/makeStyles";

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

export default useStyles;
