import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const Info = () => {
    return (
        <Message icon color='black'>
            <Icon name='warning sign' />
            <Message.Content>
                <Message.Header>Atencion</Message.Header>
                Una vez realizada la compra no hay devoluciones, favor de tener cuidado
            </Message.Content>
        </Message>
    )
}

export default Info
