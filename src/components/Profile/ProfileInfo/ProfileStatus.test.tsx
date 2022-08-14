import React from "react";
import {create} from 'react-test-renderer'
import {ProfileStatus} from "./ProfileStatus";

describe('ProfieStatus component', () => {
    test('status from props should be in the state', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'yo'}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance.state.status).toBe('yo')
    })
    test('after creation span should be displayed', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'yo'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test(`after creation input shouldn't be displayed`, () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'yo'}/>)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test('after creation span should contains correct status', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'yo'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('yo')
    })
    test('input should be displayed in editMode instead of span', () => {
        // @ts-ignore
        const component = create(<ProfileStatus status={'yo'}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('yo')
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'yo'} updateStatus={mockCallback} />)
        const instance = component.getInstance()
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
