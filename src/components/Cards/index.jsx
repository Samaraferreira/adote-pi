import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Box } from "@material-ui/core";
import '../../App.css';
import dogImg from '../../assets/dog.png'

const useStyles = makeStyles({
  containerPai: {
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
  },

  root: {
    maxWidth: '300px',
    marginTop:'40px',
    margin: '8px',
  },

  ButtonContato: {
    textTransform:'none',
    background:'var(--gradient)',
    border: 0,
    borderRadius: 4,
    color: 'white',
    fontWeight:'500',
    width:'100%'
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
  <Box className={classes.containerPai}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Dog"
          height="300"
          image={dogImg}
          title="Image Dog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lucky
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Macho - 8 meses
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.ButtonContato} variant="contained" startIcon={<WhatsAppIcon />}>
          Entrar em contato
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Dog"
          height="300"
          image={dogImg}
          title="Image Dog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lucky
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Macho - 8 meses
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.ButtonContato} variant="contained" startIcon={<WhatsAppIcon />}>
          Entrar em contato
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Dog"
          height="300"
          image={dogImg}
          title="Image Dog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lucky
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Macho - 8 meses
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.ButtonContato} variant="contained" startIcon={<WhatsAppIcon />}>
          Entrar em contato
        </Button>
      </CardActions>
    </Card>
  </Box>
  );
}
