import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection:'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  innerContainer: {
    padding: 10,
    flex : 1,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27
  },
  infoContainer: {
    flex: 1,
    flexDirection : 'row'
  },
  artist: {},
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: 'lightgrey',
    fontWeight: 'bold',
  },
  tukendiView: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding : 3
  },
  tukendiText: {
    color: 'red',
    fontSize: 11
  },
  contentContainer:{
    flexDirection:'row'
    
  }
});
