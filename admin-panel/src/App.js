import * as React from "react";
import { Admin, Resource } from 'react-admin';

//componentes personalizados
import { UserList, UserEdit, UserCreate } from './Components/users.js';
import { CommentsList, CommentEdit, CommentCreate } from './Components/comments.js';
import { PostsList, PostEdit, PostCreate } from './Components/posts.js';

//proveedor de datos
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dataProvider={dataProvider} >
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
      <Resource name="posts" list={PostsList} edit={PostEdit} create={PostCreate}/>
      <Resource name="comments" list={CommentsList} edit={CommentEdit} create={CommentCreate}/>
    </Admin>
  );
}

export default App;
