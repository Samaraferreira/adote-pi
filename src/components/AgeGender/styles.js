import makeStyles from '@material-ui/core/styles/makeStyles';

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

export default useStyles;
