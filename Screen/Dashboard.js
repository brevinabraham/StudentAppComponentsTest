import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, RefreshControl } from 'react-native';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import ViewMain from '../Components/CustomView/ViewMain';
import TextH1 from '../Components/CustomText/TextH1';
import SearchBar from '../Components/SearchBar/SearchBar';
import colors from '../Utilities/colors';
import AspectRatioCard from '../Components/Dasboard/AspectRatioCard';
import NavigationBar from '../Components/NavigationBar/NavigationBar';

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
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        console.log('hi')
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchBar ref={searchBarRef} onChangeText={setMessage}  />
            </View>

            <ViewMainContainer onScroll={handleScroll} scrollViewContentStyle={{ justifyContent: 'flex-start', paddingTop: '30%'}} 
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>} style={styles.container}>
               
                <AspectRatioCard
                    title="Title: 16:9"
                    name="John Doe"
                    dateTime="12 Aug 2024"
                    ratio={3}  
                    audio={true}
                    containerStyle={{backgroundColor: colors.LightAccent}}
                />
                
                <AspectRatioCard
                    title="Title 1"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utyjkgyjhugyuk labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uttyhtghj aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,quis nostrud exercitation ullamco laboris nisi uttyhtghj aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumelit, sed do eiusmod tempor incididunt utyjkgyjhugyuk labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uttyhtghj aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,quis nostrud exercitation ullamco laboris nisi uttyhtghj aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumelit, sed do eiusmod tempor incididunt utyjkgyjhugyuk labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uttyhtghj aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,quis nostrud exercitation ullamco laboris nisi uttyhtghj aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    imageUrl={["https://picsum.photos/500", "https://picsum.photos/1900/2000"]}
                    name="Admin"
                    dateTime="18 Aug 2024"
                    ratio={1} 
                    containerStyle={{backgroundColor: 'lightyellow'}}
                />
            
            
                <AspectRatioCard
                    title="Title 4/3"
                    imageUrl={["https://picsum.photos/500/300", "https://picsum.photos/200/300", "https://picsum.photos/600/300"]}
                    content={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","testing this works?"]}
                    name="Jane Smith"
                    dateTime="15 Aug 2024"
                    ratio={4/3}
                    containerStyle={{backgroundColor: 'lightgray'}}
                />
            
            
                <AspectRatioCard
                    title="Title 3"
                    imageUrl="https://picsum.photos/800/900"
                    name="Jane Smith"
                    dateTime="15 Aug 2024"
                    ratio={3}
                    containerStyle={{backgroundColor: 'lightpink'}}
                />

                <AspectRatioCard
                    title="Title 16/9"
                    content={["Lorem ipsum occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","testing this works?", "testing this works? occaecat cupidatat non proident, sunt in culpa qui off"]}
                    imageUrl="https://picsum.photos/2800/2020"
                    name="Jane Smith"
                    dateTime="15 Aug 2024"
                    ratio={16/9}
                    containerStyle={{backgroundColor: 'lightgray'}}
                />
            
            </ViewMainContainer>
            <NavigationBar addOnPress={()=>navigation.navigate('AddQuestion')} chatsOnPress={()=>navigation.navigate('OnlineChats')}/>
        </View>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LightShade,
        //#2C3E50 - night mode version will need to check the svg also for these colors to be added dynamically
    },
    searchBar: {
        zIndex: 2,  // Ensure it is above the scroll content
        backgroundColor: 'transparent'
    },
});
