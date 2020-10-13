import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles((theme) => ({

  buttonStyle: {
      color: theme.palette.textColor.secundario,
      boxShadow: 'none',
      '&:hover': {
          boxShadow: 'none',
      },
      fontWeight: '400',
      fontSize: '18px',
      textTransform: 'none',
      width:'160px',
      height:'56px',
      borderRadius: '8px',

  },
  headerContainer: {
    maxWidth:'1100px',
    display: 'flex',
    direction:'row',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'space-between',
    paddingTop: '23px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '23px',
    paddingLeft: '24px',
    paddingRight: '24px',
    alignItems: 'center',

  },
  textHeader: {
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '33px',
      color: '#555',
  },
  adoteContainer: {
      display:'flex',
      direction: 'row',
      cursor:'pointer',
  }
}));
export default useStyle;
