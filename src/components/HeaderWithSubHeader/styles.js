import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles((theme) => ({

  buttonStyle: {
    borderColor:'#EBEBF1',
    border:'1px solid',
    width:'109px',
    height:'48px',
    textTransform:'none',
  },

  headerWithSubHeaderContainer: {
    maxWidth:'1100px',
    display:'flex',
    direction:'row',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'space-between',
    marginTop: '64px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '8px',
    paddingRight: '28px',
    alignItems: 'center',
  },

  textHeaderWithSubHeader: {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: '500'
  },

  textAndButton: {
    display:'flex',
    direction:'row'
  },
}));
export default useStyle;
