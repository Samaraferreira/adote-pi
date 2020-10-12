import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ModalContext } from "../../App";

import "./styles.css";
import { Button } from "@material-ui/core";
import HeaderWithX from "../HeaderWithX";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles({
  ButtonContato: {
    textTransform: "none",
    background: "var(--gradient)",
    border: 0,
    borderRadius: 4,
    color: "white",
    fontWeight: "500",
    width: "100%",
  },
});

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
      </div>
      <div className="Botao">
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
  );
}

export default ModalMap;
