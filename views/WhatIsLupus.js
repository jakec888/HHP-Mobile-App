import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text,
} from 'native-base'

export class WhatIsLupus extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Text>
                    Lupus is a systemic autoimmune disease that occurs when the
                    body’s immune system attacks its own tissues and organs.
                    Inflammation caused by lupus can damage many different parts
                    of the body including the joints, skin, kidneys, blood
                    cells, brain, heart, and lungs.
                </Text>
                <Text>There are several types of lupus:</Text>
                <Text>
                    {'\u2B24'} Systemic lupus erythematosus (SLE) is the most
                    common type. It can be mild or severe and can affect many
                    parts of the body.
                </Text>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
    },
    input: {
        borderColor: '#1B6FF0',
    },
    label: {
        color: '#1B6FF0',
    },
    buttonContainer: {
        margin: '5%',
    },
    button: {
        borderColor: '#1B6FF0',
        color: '#1B6FF0',
        alignSelf: 'center',
        width: '50%',
    },
    buttonText: {
        color: '#1B6FF0',
    },
})

export default WhatIsLupus
