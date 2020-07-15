import styled from 'styled-components/native'

export const Container = styled.View`
    border: 1px solid #e5e5e5;

    width: 120px;
    height: 120px;

    justifyContent: center;
`

export const CardIconContainer = styled.View`
    alignItems: center;
    marginTop: 17px;

    height: 60px;

`

export const CardLabel = styled.Text`
    fontFamily: Montserrat-Bold;
    color: #BEC3C6;
    textTransform: uppercase;
    letterSpacing: 0.5px;

    marginTop: auto;
    textAlign: center;
    padding: 5px 0;

`

export const PlusContainer = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
`



export const SmallCardIcon = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 40px;
    height: 30px;
    paddingRight: 5px;
`