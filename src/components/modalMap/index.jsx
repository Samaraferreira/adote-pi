import React, { useContext } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import useStyles from "./styles";
import { Button } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import { ModalContext } from "../../App";

import "./styles.css";

import HeaderWithX from "../HeaderWithX";


function ModalMap() {
  const classes = useStyles();
  const { openMapModal, setOpenMapModal, selectedPet } = useContext(
    ModalContext
  );

  function handleWhatsapp(phone) {
    let link = `https://api.whatsapp.com/send?phone=${phone}`;
    window.open(link, "_black");
  }

  return (
    <div className={`janelaModal ${openMapModal && "modal-map-active"} `}>
      <HeaderWithX close={setOpenMapModal} />
      <div className="info">
        <h1>
          Localização do pet <span className="nomePet">{selectedPet.name}</span>
        </h1>

        {selectedPet.latitude ? (
          <Map center={[selectedPet.latitude, selectedPet.longitude]} zoom={12}>
            <TileLayer
              attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[selectedPet.latitude, selectedPet.longitude]} />
            <Popup position={[selectedPet.latitude, selectedPet.longitude]}>
              <div>
                <h2>{selectedPet.name}</h2>
                <p>está aqui</p>
              </div>
            </Popup>
          </Map>
        ) : (
          ""
        )}
        <div className="btn">
          <Button
            onClick={() => handleWhatsapp(selectedPet.whatsapp)}
            className={classes.ButtonContato}
            variant="contained"
            startIcon={<WhatsAppIcon />}
          >
            Entrar em contato
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalMap;
