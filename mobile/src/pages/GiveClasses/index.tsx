import React from 'react'
import { View, ImageBackground } from 'react-native'
 // Imagem de Background
import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses() {
    return (
        <View style={styles.container}>
            <ImageBackground source={giveClassesBgImage} style={styles.content}>

            </ImageBackground>
        </View>
    )
}

export default GiveClasses;