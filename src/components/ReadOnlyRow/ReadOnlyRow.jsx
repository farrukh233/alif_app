import React from "react";
import "./ReadOnlyRow.css";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const ReadOnlyRow = ({ post, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className='items'>
      <td>{post.name}</td>
      <td>{post.surname}</td>
      <td>{post.phone}</td>
      <td>{post.adress}</td>
      <td>{post.email}</td>
      <td className='edit-post'>
        <AiOutlineEdit onClick={e => handleEditClick(e, post)} />
        <BsTrash onClick={() => handleDeleteClick(post.id)} />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
