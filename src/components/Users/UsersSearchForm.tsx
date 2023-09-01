import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users-selectors";
import {Button} from "../common/Button/Button";

// types
type UsersSearchFormType = {
    onFilterChanged: (filter: FilterType) => void
}
type FriendFormType = 'true' | 'false' | 'null';
type FormType = {
    term: string
    friend: FriendFormType
}

// component
export const UsersSearchForm = (props: UsersSearchFormType) => {

    const filter = useSelector(getUsersFilter)

    const submit = (values: FormType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'

        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    const usersSearchFormValidate = (values: any) => {
        return {}
    }

    return <div>
        <Formik enableReinitialize
                initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type='text' name='term'/>
                    <Field name='friend' as='select' style={{marginLeft: '5px', marginRight: '5px', height: '30px'}}>
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                        <Button name={'Find'} disabled={isSubmitting} />
                </Form>
            )}
        </Formik>
    </div>
}