import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList,
    View, Text, Image } from "react-native";

import { Colors } from '@/constants/theme';
import { BOOKS_AVAILABLE } from '@/constants/BooksAvailable'
import BOOKS_IMAGES from '@/constants/BooksImages'

export default function BooksScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />

    //const headerComp = () => <Text style ={{ textAlign: "center" , marginVertical: 10 }}>Top of List</Text>
    const footerComp = () => <Text style ={{ textAlign: "center", marginVertical: 10, color: 'white',}}>End of List</Text>

    return (
        <Container>
            <FlatList
                data={BOOKS_AVAILABLE}
                keyExtractor={(item,index) => (item?.id ? item.id.toString() : index.toString())}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
                //ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No items</Text>}

                renderItem={({ item }) => (
                    <View style ={styles.row}>
                        <View style ={styles.booksTextRow}>
                            <Text style={[styles.booksItemTitle, styles.booksItemText]}>{item.title}</Text>
                            <Text style ={styles.booksItemText}>{item.description}</Text>
                        </View>
                        <Image
                            source={BOOKS_IMAGES[item.id ? item.id - 1 : 0]}
                            style={styles.booksImage}
                        />
                    </View>
                )}
            />
        </Container>
    )
}

function createStyles(theme,colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme == 'dark' ? 'papayawhip': "#000",
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        footerComp: {
            marginHorizontal: 'auto',
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        booksTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingRight: 5,
            paddingLeft: 10,
            flexGrow: 1,
        },
        booksItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        booksItemText: {
            color: theme.text,
        },
        booksImage: {
            width: 100,
            height: 100,
        }
    })
}