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

    return (
        <Container>
            <FlatList
                data={BOOKS_AVAILABLE || []}
                keyExtractor={(item,index) => (item?.id ?toString() : index.toString())}
                renderItem={({ item }) => (
                    <View>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Image
                            source={BOOKS_IMAGES[item.id ? item.id - 1 : 0]}
                        />
                    </View>
                )}
            />
        </Container>
    )
}

function createStyles(theme,colorScheme) {
    return StyleSheet.create({

    })
}