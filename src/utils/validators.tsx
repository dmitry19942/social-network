export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (!value) {
        return 'Field is required'
    } else if (value.trim() === '') {
        return 'Field is required'
    } else {
        return undefined
    }

}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}


