import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = React.useState();
  const [description, setDescription ] = React.useState();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm 
        name="edit"
        title="Редактировать профиль"
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}>
          <input minLength="2" maxLength="40" type="text" className="popup__input popup__input_name_name" name="name" id="name-input" placeholder="Имя" defaultValue="Родион Стрелков" onChange={(evt) => setName(evt.target.value)}requiredvalue={name} />
          <span className='popup__input-error popup__input-error_active' id='name-input-error' />
          <input minLength="2" maxLength="200" type="text" className="popup__input popup__input_name_profession" name="profession" placeholder="Вид деятельности" id="profession-input" defaultValue="Городской изучатель" onChange={(evt) => setDescription(evt.target.value)}requiredvalue={description} />
          <span className='popup__input-error popup__input-error_active' id='profession-input-error' />
          <input type="submit" className="popup__button-save" defaultValue="Сохранить" name="submit" />
        </PopupWithForm>
  );
}

export default EditProfilePopup;