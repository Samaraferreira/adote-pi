import makeStyles from '@material-ui/core/styles/makeStyles';

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
export default useStyles;
