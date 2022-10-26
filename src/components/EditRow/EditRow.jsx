import React from "react";
import "./EditRow.css";

const EditRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Имя...'
          name='name'
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Фамилия...'
          name='surname'
          value={editFormData.surname}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Номер телефона...'
          name='phone'
          value={editFormData.phone}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Адрес...'
          name='adress'
          value={editFormData.adress}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Почта...'
          name='email'
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button className='btn-save' type='submit'>
          Сохранить
        </button>
        <button className='btn-cancel' onClick={handleCancelClick}>
          Отмена
        </button>
      </td>
    </tr>
  );
};

export default EditRow;
