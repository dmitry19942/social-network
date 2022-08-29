import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users-reducer";

type UsersSearchFormType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm = (props: UsersSearchFormType) => {

    const submit = (values: FilterType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        props.onFilterChanged(values)
        setSubmitting(false)
    }

    const usersSearchFormValidate = (values: any) => {
        const errors = {}
        return errors
    }

    return <div>
        <Formik initialValues={{term: ''}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type='text' name='term'/>
                    <button type='submit' disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}

        </Formik>
    </div>
}