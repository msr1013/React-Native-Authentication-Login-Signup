import React from 'react'
import { ScrollView, StyleSheet, View, Text} from 'react-native'
import { Button ,TextInput } from 'react-native-paper'

const LoginScreen = props => {
    const [email,setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return <ScrollView style={styles.screen}>
        <TextInput 
        mode="outlined"
        value={email}
        onChange={text => setEmail(text)}
        placeholder="Email"
        />

        <TextInput 
        mode="outlined"
        value={password}
        onChange={text => setPassword(text)}
        placeholder="Password"
        />

        <Button onPress ={() => { }} mode="contained" style={{marginTop :30, marginBottom :10}}>Login</Button>
        <View style ={{flexDirection: 'row',alignItems:'center',justifyContent:'space-around'}}>
            <Text>Not Registered yet ?</Text>
            <Button onPress ={ () => props.navigation.navigate('Signup')}>SignUp</Button>
        </View>

    </ScrollView>
}

const styles = StyleSheet.create({
    screen:{
        padding:30
    }
})

export default LoginScreen