import { StyleSheet, Text } from "react-native"
import { View } from "react-native"

export default function Alternative({ letter, answer}) {
    return (
        <View style={styles.alternative}>
            <Text style={styles.letter}>{letter}</Text>
            <Text style={styles.answer}>{answer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    alternative: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        elevation: 10, // Para Android
        shadowOffset: { width: 0, height: 4 }, // Para iOS
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 6,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5,
        paddingHorizontal:15,
        gap:10,
    },
    letter:{
        fontWeight:"bold",
        fontSize:32,
    },
    answer:{
        fontSize:12,
        width: "90%",
        textAlign:"left"
    }
})