export const required = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}


export const maxLenghtCreator = (maxLenght: number) => (value: string) => {
    if (value.length > maxLenght) return `Max lenght is ${maxLenght} symbols`
    return undefined
}
