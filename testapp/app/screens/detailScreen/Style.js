import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
    },
    headerContainer: {
        // height: '45%',
        backgroundColor: '#5F9EA0',
    },
    headingContainer: {
        flexDirection: 'row',
        paddingHorizontal: 6,
        alignItems: 'center',
    },
    backBtnTouch: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
    },
    safeArea: { backgroundColor: 'white' },
    text:{
        marginTop:10,
        color:'rgb(49, 108, 110)',
        fontSize:18}

  });
