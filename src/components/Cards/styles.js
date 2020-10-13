import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  containerPai: {
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
  },

  root: {
    width: '300px',
    marginTop:'40px',
    margin: '8px',
    boxShadow: '0px 4px 8px rgba(119, 119, 119, 0.25)'
  },

  ButtonContato: {
    textTransform:'none',
    background:'var(--gradient)',
    border: 0,
    borderRadius: 4,
    color: 'white',
    fontWeight:'500',
    fontSize: '16px',
    width:'100%',
    height: '46px'
  }
});

export default useStyles;
