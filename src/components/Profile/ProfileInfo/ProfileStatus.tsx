import React, {ChangeEvent} from "react";

// types
type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}

// component
export class ProfileStatus extends React.Component<ProfileStatusPropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                        </div>
                    }
                </div>
            </>
        )
    }
}