import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import device from 'themes/device'

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 120px;

    @media ${device.laptopM} {
        padding: 40px 80px;
    }
`
const LoginHeader = styled(Header)`
    text-align: center;
    padding-bottom: 32px;
`
const StyledButton = styled(Button)`
    font-size: 1.6rem;
`

const Login = () => {
    return (
        <LoginWrapper>
            <LoginHeader as="h3" type="subtitle-1">
                Três dias de conteúdo, networking e novidades.
            </LoginHeader>
            <StyledButton secondary>Cadstre-se aqui</StyledButton>
            <LoginHeader as="div" weight="normal" type="subtitle-1" pt="32px">
                ou, se ja tiver seu acesso ao evento
            </LoginHeader>
            <StyledButton primary>Faça login</StyledButton>
        </LoginWrapper>
    )
}

export default Login
