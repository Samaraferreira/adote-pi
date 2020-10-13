import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles((theme) => ({

  HeaderWithX: {
    maxWidth:'1100px',
    display: 'flex',
    direction:'row',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'space-between',
    paddingTop: '23px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '16px',
    paddingLeft: '24px',
    paddingRight: '24px',
    alignItems: 'center',
  },

  textHeaderWithX: {
    fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '33px',
      color: '#555',
  },

  adoteContainer: {
    display:'flex',
    direction: 'row',
}
}));
export default useStyle;
