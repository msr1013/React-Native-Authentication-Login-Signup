import React from 'react'

import { ScrollView,StyleSheet,View ,Text} from 'react-native'

import { Button,TextInput} from 'react-native-paper'

const SignupScreen = props => {
    const [email,setEmail] = React.useState('')
    const [password,setPassword]= React.useState('')
    const [fullName,setFullName] = React.useState('')

    return <ScrollView style={styles.screen}>
        <TextInput
            mode="outlined"
            value={fullName}
            onChangeText={text => setFullName(text)}
            placeholder="Full Name"
            />

        <TextInput
            mode="outlined"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            />

        <TextInput
            mode="outlined"
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            />

        <Button onPress={() => {}} mode="contained" style={{marginTop:30, marginButtom:10}}>Register Now!</Button>
        <View style ={{flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
            <Text>Already Registered ?</Text>
            <Button onPress ={() => props.navigation.navigate('Login')}>Login</Button>
        </View>
        

    </ScrollView>
}

const styles = StyleSheet.create({
    screen:{
        padding:30
    }
})

export default SignupScreen