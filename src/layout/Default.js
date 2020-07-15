import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native'

const DefaultLayout = ({ children }) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#f5f5f5',
        minHeight: '100%',
    },
})

export default DefaultLayout
