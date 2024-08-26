import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import ViewMain from '../Components/CustomView/ViewMain';
import TextH1 from '../Components/CustomText/TextH1';
import SearchBar from '../Components/SearchBar/SearchBar';
import colors from '../Utilities/colors';
import AspectRatioCard from '../Components/Dasboard/AspectRatioCard';

function Dashboard({ navigation }) {
    const [message, setMessage] = useState('message to be entered');
    const [isSearchBarCollapsed, setIsSearchBarCollapsed] = useState(false);
    const searchBarRef = useRef(null);

    const handleScroll = (event) => {
        const currentScrollY = event.nativeEvent.contentOffset.y;
        if (currentScrollY > 0 && !isSearchBarCollapsed) {
            searchBarRef.current.collapseSearchBar(); 
            setIsSearchBarCollapsed(true);
        } else if (currentScrollY <= 0 && isSearchBarCollapsed) {
            searchBarRef.current.expandSearchBar();
            setIsSearchBarCollapsed(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchBar ref={searchBarRef} onChangeText={setMessage}  />
            </View>

            <ViewMainContainer onScroll={handleScroll} scrollViewContentStyle={{ justifyContent: 'flex-start', paddingTop: '30%'}}>
                <ViewMain>
                    <AspectRatioCard
                        title="Title: 16:9"
                        name="John Doe"
                        dateTime="12 Aug 2024"
                        ratio={16/9}  // Image card with 16:9 aspect ratio
                        audio={true}
                        containerStyle={{backgroundColor: colors.MainColor}}
                    />
                </ViewMain>
                <ViewMain>
                    <AspectRatioCard
                        title="Announcement"
                        content="This is a text-only card designed for displaying short messages or announcements."
                        name="Admin"
                        dateTime="18 Aug 2024"
                        ratio={3}  // Use a higher ratio for text-only cards
                    />
                </ViewMain>
                <ViewMain>
                    <AspectRatioCard
                        title="Another Title"
                        imageUrl="https://via.placeholder.com/300"
                        name="Jane Smith"
                        dateTime="15 Aug 2024"
                        ratio={4/3}  // Image card with 4:3 aspect ratio
                    />
                </ViewMain>
                <ViewMain>
                    <AspectRatioCard
                        title="Another Title"
                        imageUrl="https://via.placeholder.com/300"
                        name="Jane Smith"
                        dateTime="15 Aug 2024"
                        ratio={1}  // Image card with 4:3 aspect ratio
                    />
                </ViewMain>
            </ViewMainContainer>

            
        </View>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkShade,
        
    },
    searchBar: {
        zIndex: 2,  // Ensure it is above the scroll content
        backgroundColor: 'transparent'
    },
});
