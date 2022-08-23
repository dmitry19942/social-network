import React, {ChangeEvent, useEffect, useState} from "react";

// types
type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

// component
export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}> <b>Status</b>: {props.status || '----'}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                }
            </div>
        </>
    )
}