import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  CircularProgress
} from "@material-ui/core";

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import dogImg from '../../assets/dog.png';

import '../../App.css';

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

export default function Cards({ pets, loading }) {
  const classes = useStyles();

  function handleWhatsapp(phone) {
  }

  return (
    <Box className={classes.containerPai}>
      {loading
        ? <CircularProgress color="secondary" />
        : (pets.length > 0
            ? (pets.map(pet => (
                <Card key={pet._id} className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={pet.type}
                      height="300"
                      image={pet.avatar_url}
                      title={pet.type}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {pet.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {pet.age}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {pet.sex}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button onClick={() => handleWhatsapp(pet.whatsapp)} className={classes.ButtonContato} variant="contained" startIcon={<WhatsAppIcon />}>
                      Entrar em contato
                    </Button>
                  </CardActions>
                </Card>
            )))
            : (
              <Typography variant="h6" color="textSecondary" component="h2">
                Nenhum pet nessa categoria
              </Typography>
            )
        )
      }
    </Box>
  );
}
