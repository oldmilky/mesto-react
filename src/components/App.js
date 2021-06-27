import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} />
        <Footer />
      </div>

      <PopupWithForm 
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <input 
            minLength="2" 
            maxLength="40" 
            type="text" 
            className="popup__input popup__input_name_name" 
            name="name" 
            id="name-input" 
            placeholder="Имя" 
            defaultValue="Родион Стрелков" 
            required />
          <span 
            className='popup__input-error popup__input-error_active' 
            id='name-input-error' />
          <input 
            minLength="2" 
            maxLength="200" 
            type="text" 
            className="popup__input popup__input_name_profession" 
            name="profession" 
            placeholder="Вид деятельности" 
            id="profession-input" 
            defaultValue="Городской изучатель" 
            required />
          <span 
            className='popup__input-error popup__input-error_active' 
            id='profession-input-error' />
          <input 
            type="submit" 
            className="popup__button-save" 
            defaultValue="Сохранить" 
            name="submit" />
        </PopupWithForm>
      <PopupWithForm 
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input 
            minLength="1" 
            maxLength="30" 
            type="text" 
            placeholder="Название" 
            className="popup__input popup__input_name_title-card" 
            name="title-card" 
            id="title-input" 
            required />
          <span 
            className='popup__input-error' 
            id='title-input-error'>Вы пропустили это поле.</span>
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            className="popup__input popup__input_name_link-card" 
            name="link-card" 
            id="link-input" 
            required />
          <span 
            className='popup__input-error' 
            id='link-input-error'>Вы пропустили это поле.</span>
          <input 
            type="submit" 
            className="popup__button-save" 
            value="Создать" 
            name="submit" />
        </PopupWithForm>
      <PopupWithForm 
        name="avatar"
        title="Обновить аватар"
        children=""
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            className="popup__input popup__input_name_link-avatar" 
            name="avatar-input" 
            id="avatar-input" 
            required />
          <span 
            className='popup__input-error' 
            id='avatar-input-error'>Заполните это поле.</span>
          <input 
            type="submit" 
            className="popup__button-save" 
            value="Сохранить" 
            name="submit" />
        </PopupWithForm>
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} />
    </>
  );
}

export default App;
