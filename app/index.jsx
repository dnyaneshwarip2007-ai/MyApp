import { View, Text, StyleSheet , ImageBackground, Pressable} from "react-native";
import { Link } from 'expo-router'
import icedMandalaImg from "../assets/images/library.jpeg"
const App = () => {
  return (
          <View style={styles.container}>
          <ImageBackground
          source={icedMandalaImg}
          resizeMode="cover"
          style={styles.image}
          >
            <Text style={styles.title}>CSE Department Library</Text>

            <Link href="/books" style={{ marginHorizontal: 'auto'}} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Books Available</Text>
              </Pressable>
            </Link>
            <Link href="/login" style={{ marginHorizontal: 'auto'}} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </Link>
            </ImageBackground>
          </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  Link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  }
})