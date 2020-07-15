import styled from 'styled-components/native'

export const Container = styled.View`
    alignItems: flex-start;
`

const getButtonTextStylesByProps = (p) => {
    let styleStr = ``

    const { fluid, disabled, light } = p.theme

    if (light)
        styleStr += `
            color: rgba(129, 129, 129, 0.4);
        `

    return styleStr
}

export const ButtonText = styled.Text`
    color: #fff;
    fontFamily: Montserrat-Bold;
    letterSpacing: 0.5px;
    textTransform: uppercase;
    fontSize: 20px;
    ${p => getButtonTextStylesByProps(p)}
`

const getCustomStyles = (p) => {
    let styleStr = ``

    const { fluid, disabled, light } = p.theme

    if (fluid)
        styleStr += 'width: 100%;'
        
    if (disabled)
        styleStr += `
            backgroundColor: #818181;
        `

    if (light)
        styleStr += `
            color: #818181;
            backgroundColor: #fff;
            border: 1px solid rgba(129, 129, 129, 0.4);
        `

    return styleStr

}

export const TextTouchableContainer = styled.TouchableOpacity<{ fluid?: boolean }>`
    backgroundColor: #533dab;
    height: 40px;
    alignItems: center;
    justifyContent: center;
    borderRadius: 8px;
    minWidth: 130px;
    padding: 0 10px;
    ${p => getCustomStyles(p)}
`