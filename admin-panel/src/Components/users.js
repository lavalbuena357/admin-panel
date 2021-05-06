import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    UrlField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

//lista
export function UserList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="name"/>
                <TextField source="username"/>
                <EmailField source="email"/>
                <TextField source="phone"/>
                <UrlField source="website"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};

//edicion
export function UserEdit(props) {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id"/>
                <TextInput source="name"/>
                <TextInput source="username"/>
                <TextInput source="email"/>
                <TextInput source="phone"/>
                <TextInput source="website"/>
            </SimpleForm>
        </Edit>
    )
};

//creacion
export function UserCreate(props) {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput source="username"/>
                <TextInput source="email"/>
                <TextInput source="phone"/>
                <TextInput source="website"/>
            </SimpleForm>
        </Create>
    )
};