import React, { useState } from "react";
//import { useForm } from "react-hook-form";
import "./AddPopup.css";
const AddPopup = ({
  closePopup,
  handlerAddFormSubmit,
  addFormData,
  setAddFormData,
}) => {
  /* // Стейты для валидации

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setAdress] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameDirty, setFirstNameDirty] = useState("");
  const [secondNameDirty, setSecondNameDirty] = useState("");
  const [phoneDirty, setPhoneDirty] = useState("");
  const [educationDirty, setAdressDirty] = useState("");
  const [emailDirty, setEmailDirty] = useState("");

  const [firstNameError, setFirstNameError] = useState("Заполните имя");
  const [secondNameError, setSecondNameError] = useState("Заполните фамилию");
  const [phoneError, setPhoneError] = useState("Укажите номер телефона");
  const [educationError, setAdressError] = useState(
    "Поле не может быть пустым"
  );
  const [emailError, setEmailError] = useState("Email не может быть пустым");

  const firstNameHandler = e => {
    setFirstName(e.target.value);
    const re = /^[a-z ,.'-]+$/i;
    if (!re.test(String(e.target.value))) {
      setFirstNameError("Некорректное имя");
    } else {
      setFirstNameError("");
    }
  };

  const blurHandler = e => {
    switch (e.target.name) {
      case "name":
        setFirstNameDirty(true);
        break;
      case "surname":
        setSecondNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "adress":
        setAdressDirty(true);
        break;
      case "email":
        setEmailDirty(true);
    }
  };
 
    const re = /^[a-z ,.'-]+$/i;
    if (!re.test(String(fieldValue))) {
      setFirstNameError("Некорректное имя");
    } else {
      setFirstNameError("");
    }
  };
*/
  const handleFormChange = e => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  return (
    <div className='popup-wrapper' onClick={closePopup}>
      <div className='popup' onClick={e => e.stopPropagation()}>
        <h2>Добавить данные</h2>
        <form onSubmit={handlerAddFormSubmit}>
          <div>
            {/*
            {firstNameDirty && firstNameError && (
              <div style={{ color: "red" }}>{firstNameError}</div>
            )}
            */}
            <input
              // value={firstName}
              //  onBlur={e => blurHandler(e)}
              name='name'
              required='required'
              placeholder='Введите имя...'
              onChange={handleFormChange}
            />
          </div>
          <div>
            <input
              name='surname'
              required='required'
              placeholder='Введите фамилию...'
              onChange={handleFormChange}
            />
          </div>
          <div>
            <input
              name='phone'
              required='required'
              placeholder='Введите номер телефона...'
              onChange={handleFormChange}
            />
          </div>
          <div>
            <input
              name='adress'
              required='required'
              placeholder='Введите адрес...'
              onChange={handleFormChange}
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              required='required'
              placeholder='Введите почту...'
              onChange={handleFormChange}
            />
          </div>
          <div className='btn-wrapper'>
            <button type='submit' className='btn-add_popup'>
              Добавить
            </button>
            <button className='btn-close_popup' onClick={closePopup}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPopup;
