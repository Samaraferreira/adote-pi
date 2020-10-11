import React, { useState, useContext, useMemo }  from 'react';

import { createPet } from '../../services/api';

import { ModalContext } from '../../App';
import HeaderWithX from '../HeaderWithX';

import avatarImage from '../../assets/thumb.svg';
import closeIcon from '../../assets/icons/icon-close.svg';

import './styles.css';

function Modal() {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('Chico');
  const [whatsapp, setWhatsapp] = useState('5582945654543');
  const [type, setType] = useState('dog');
  const [age, setAge] = useState('6 meses');
  const [sex, setSex] = useState('macho');
  const [latitude, setLatitude] = useState(2535);
  const [longitude, setLongitude] = useState(36366);

  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : avatarImage;
  }, [avatar]);

  async function handleNewPet(event) {
    event.preventDefault();

    if(avatar && name && whatsapp && type && age && sex) {
      const data = new FormData();

      data.append('avatar', avatar);
      data.append('name', name);
      data.append('whatsapp', whatsapp);
      data.append('type', type);
      data.append('age', age);
      data.append('sex', sex);
      data.append('latitude', latitude);
      data.append('longitude', longitude);

      await createPet(data);
    }
  }

  return (
    <section className={`modal-container ${openModal && 'modal-active' } `}>
      {/* <header className="modal-header">
        <h2>Cadastrar novo pet</h2>
        <button onClick={() => setOpenModal(false)} className="btn-close">
          <img src={closeIcon} alt="fechar"/>
        </button>
      </header> */}
      <HeaderWithX close={setOpenModal} />
      <main>
        <form onSubmit={handleNewPet}>
          <div id="input-file">
            <span
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
            <label className="upload-label" htmlFor="file">
              Adicionar avatar
            </label>
          </div>

          <button type="submit">Adicionar</button>
        </form>
      </main>
    </section>
  );
}

export default Modal;
