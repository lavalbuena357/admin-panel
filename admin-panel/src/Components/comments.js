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
export function CommentsList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <ReferenceField source="postId" reference="posts">
                    <TextField source="id"/>
                </ReferenceField>
                <TextField source='id'/>
                <TextField source='name'/>
                <TextField source='email'/>
                <TextField source='body'/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};

//edicion
export function CommentEdit(props) {
    return (
        <Edit {...props}>
            <SimpleForm>
                <ReferenceInput source="postId" reference="posts">
                    <SelectInput optionText="title"/>
                </ReferenceInput>
                <TextInput disabled source="id"/>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <TextInput multiline source='body'/>
            </SimpleForm>
        </Edit>
    )
};

//creacion
export function CommentCreate(props) {
    return (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="postId" reference="posts">
                    <SelectInput optionText="title"/>
                </ReferenceInput>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <TextInput multiline source='body'/>
            </SimpleForm>
        </Create>
    )
}; 