import React, { useState, useContext } from "react";
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
import useStyles from './styles';


export default function Cards({ pets, loading }) {
  const classes = useStyles();
  const { setOpenMapModal, setSelectedPet } = useContext(ModalContext);

  function handleWhatsapp(phone) {
    let link = `https://api.whatsapp.com/send?phone=${phone}`;
    window.open(link,'_black');
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
                      <Typography variant="h5" component="h2">
                        {pet.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" component="p">
                        {pet.age} - {pet.sex}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" component="p">
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
