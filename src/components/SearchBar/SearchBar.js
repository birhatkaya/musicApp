import { View, TextInput } from "react-native";
import styles from "./SearchBarStyle";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={props.onSearch}
        placeholder="Ara..."
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBar;
