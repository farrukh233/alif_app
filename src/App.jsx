import { useEffect, useState, Fragment } from "react";
import "./App.css";
import axios from "axios";
import AddPopup from "./components/AddPopup/AddPopup";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow/ReadOnlyRow";
import EditRow from "./components/EditRow/EditRow";
import { BeatLoader } from "react-spinners";

function App() {
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/posts").then(data => {
      setPosts(data.data);
      setIsLoading(false);
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false); //стейт сниппера загрузки
  const [posts, setPosts] = useState([]); //стейт постов
  const [popup, setPopup] = useState(false); //стейт попапа
  const [addFormData, setAddFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    adress: "",
    email: "",
  }); //стейт добавление данных

  const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    adress: "",
    email: "",
  }); //стейт изменения данных

  const [editPosts, setEditPosts] = useState(null); //стейт редактирования полей

  const handleEditClick = (e, post) => {
    e.preventDefault();

    setEditPosts(post.id);

    const formValues = {
      name: post.name,
      surname: post.surname,
      phone: post.phone,
      adress: post.adress,
      email: post.email,
    };

    setEditFormData(formValues);
  };

  const handleFormChange = e => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  //редактирование данных
  const handleEditFormChange = e => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handlerAddFormSubmit = e => {
    e.preventDefault();

    const newPost = {
      id: nanoid(),
      name: addFormData.name,
      surname: addFormData.surname,
      phone: addFormData.phone,
      adress: addFormData.adress,
      email: addFormData.email,
    };

    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    popupHandler();
  };

  const popupHandler = () => {
    setPopup(!popup);
  };

  //сохранение
  const handleSaveForm = e => {
    e.preventDefault();

    const editPost = {
      id: editPosts,
      name: editFormData.name,
      surname: editFormData.surname,
      phone: editFormData.phone,
      adress: editFormData.adress,
      email: editFormData.email,
    };
    const newPosts = [...posts];

    const index = posts.findIndex(post => post.id === editPosts);

    newPosts[index] = editPost;
    setPosts(newPosts);
    setEditPosts(null);
  };

  const handleCancelClick = () => {
    setEditPosts(null);
  };

  //удаление
  const handleDeleteClick = postId => {
    const newPosts = [...posts];
    const index = posts.findIndex(post => post.id === postId);
    newPosts.splice(index, 1);
    setPosts(newPosts);
    console.log(newPosts);
  };

  return (
    <div>
      {isLoading ? (
        <div className='loader'>
          <BeatLoader color={"#D0021B"} loading={isLoading} size={20} />
        </div>
      ) : (
        <>
          <form onSubmit={handleSaveForm}>
            <table id='custumers'>
              <thead>
                <tr>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Телефон</th>
                  <th>Адрес</th>
                  <th>Почта</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <Fragment>
                    {editPosts === post.id ? (
                      <EditRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        post={post}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
          <button className='btn_add' onClick={popupHandler}>
            Добавить данные
          </button>
          {popup ? (
            <AddPopup
              handleFormChange={handleFormChange}
              handlerAddFormSubmit={handlerAddFormSubmit}
              closePopup={popupHandler}
              addFormData={addFormData}
              setAddFormData={setAddFormData}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
