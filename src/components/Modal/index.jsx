import React, { useState, useContext, useMemo }  from 'react';
import { Map, TileLayer, Marker } from "react-leaflet";
import FormLabel from '@material-ui/core/FormLabel';

import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core/';

import { createPet } from '../../services/api';

import { ModalContext } from '../../App';
import HeaderWithX from '../HeaderWithX';

import avatarImage from '../../assets/thumb.svg';
import FormattedInputs from '../FormattedInputs';
import Categories from '../Categories';

import './styles.css';

const useStyles = makeStyles({
  ButtonContato: {
    textTransform:'none',
    background:'var(--gradient)',
    border: 0,
    borderRadius: 4,
    color: 'white',
    fontWeight:'500',
    width: '100%',
    height: '46px',
    fontSize: '16px',
  }
});

function Modal() {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState("55 (  )     -    ");
  const [type, setType] = useState('');
  const [age, setAge] = useState({number: 0, period: 'meses'});
  const [sex, setSex] = useState('femea');
  const [latitude, setLatitude] = useState(-12.950258);
  const [longitude, setLongitude] = useState(-49.984558);

  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : avatarImage;
  }, [avatar]);

  async function handleNewPet(event) {
    event.preventDefault();

    if(avatar && name && whatsapp && type && age.number && age.period && sex) {
      const data = new FormData();

      data.append('avatar', avatar);
      data.append('name', name);
      data.append('whatsapp', whatsapp);
      data.append('type', type);
      data.append('age', (age.number + ' ' + age.period) );
      data.append('sex', sex);
      data.append('latitude', latitude);
      data.append('longitude', longitude);

      await createPet(data);

      setName('');
      setWhatsapp('55 (  )     -    ');
      setAvatar(null);
      setType('');
      setSex('');

      alert('Pet registrado com sucesso!')
    }
  }

  const classes = useStyles();

  const handleNameChange = React.useCallback((event) => {
    //console.log(event.target.value);
    setName(event.target.value);
  });

  const handleWhatsappChange = React.useCallback((event) => {
    setWhatsapp(
       event.target.value
    );
  });

  const handleTypeChange = React.useCallback((event) => {
    setType(event.target.value);
  });

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleSubClick = (event) => {
    var ageTemp = age.number - 1;
    ageTemp = (ageTemp < 0 ? 0 : ageTemp);
    setAge({number: ageTemp, period: age.period})
  }

  const handleAddClick = (event) => {
    setAge({
      number: age.number + 1,
      period: age.period
    });
  }

  const handlePeriodChange = (event) => {
    setAge({
      number: age.number,
      period: event.target.value
    });
  };

  function handleMapClick(event) {
    setLatitude(event.latlng.lat);
    setLongitude(event.latlng.lng)
  }

  return (
    <section className={`modal-container ${openModal && 'modal-active' } `} >
      <HeaderWithX close={setOpenModal} />
      <main className="modal-content">
        <form onSubmit={handleNewPet}>
          <Box >
            <div id="input-file">
              <label
                htmlFor="file"
                className="avatar-image"
                style={{ backgroundImage: `url(${preview})` }}
              />
              <input
                id="file"
                name="avatar"
                placeholder="Adicionar avatar"
                type="file"
                accept=".png, .jpeg, .jpg"
                onChange={event => setAvatar(event.target.files[0])}
              />
            </div>
            <Box noValidate autoComplete="off">
              <FormattedInputs
                name={name}
                whatsapp={whatsapp}
                handleNameChange={handleNameChange}
                handleWhatsappChange={handleWhatsappChange}
              />
            </Box>
            <Categories
              type={type}
              age={age}
              sex={sex}
              handleTypeChange={handleTypeChange}
              handleSubClick={handleSubClick}
              handleAddClick={handleAddClick}
              handleSexChange={handleSexChange}
              handlePeriodChange={handlePeriodChange}
            />

            <FormLabel component="legend">Localização (selecione no mapa)</FormLabel>
            {latitude ? (
              <Map center={[latitude, longitude]} zoom={5} onClick={handleMapClick}>
                <TileLayer
                  attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} />
              </Map>
            ) : (
                ""
            )}

            <button  type="submit" onClick={handleNewPet} className={classes.ButtonContato} >
              Adicionar
            </button>
          </Box>
        </form>
      </main>
    </section>
  );
}

export default Modal;
