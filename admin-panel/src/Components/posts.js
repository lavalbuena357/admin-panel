import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

//lista
export function PostsList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <ReferenceField source="userId" reference="users">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source='id'/>
                <TextField source='title'/>
                <TextField source='body'/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};
    
//edicion
export function PostEdit(props) {
    return (
        <Edit {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name"/>
                </ReferenceInput>
                <TextInput disabled source="id"/>
                <TextInput source="title"/>
                <TextInput multiline source="body"/>
            </SimpleForm>
        </Edit>
    )
};

//creacion
export function PostCreate(props) {
    return (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name"/>
                </ReferenceInput>
                <TextInput source="title"/>
                <TextInput multiline source="body"/>
            </SimpleForm>
        </Create>
    )
};