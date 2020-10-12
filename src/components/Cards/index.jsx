import React, { useState, useContext } from "react";
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
  CircularProgress,
  Link
} from "@material-ui/core";

import { ModalContext } from '../../App';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import IconPet from '../../assets/icons/icon-pet.svg';

import './styles.css';

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

export default function Cards({ pets, loading }) {
  const classes = useStyles();
  const { setOpenMapModal, setSelectedPet } = useContext(ModalContext);

  function handleWhatsapp(phone) {
  }

  function handleSelectPet(pet) {
    setSelectedPet(pet);
    setOpenMapModal(true);
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
                      <Typography variant="body2" color="textSecondary" component="p">
                        <Link onClick={() => handleSelectPet(pet)}>
                          Ver localização
                        </Link>
                      </Typography>
                    </CardContent>

                  </CardActionArea>
                  <Button onClick={() => handleWhatsapp(pet.whatsapp)} className={classes.ButtonContato} variant="contained" startIcon={<WhatsAppIcon />}>
                    Entrar em contato
                  </Button>
                </Card>
            )))
            : (
              <div className="container-info">
                <img src={IconPet} alt="pet" width="24px" />
                <h3>Nenhum pet nesta categoria</h3>
              </div>
            )
        )
      }
    </Box>
  );
}
