# React Native API Demo

## `TIL`

### react-native-dotenv

-   Import env variables from `.env` file in React Native

```bash
npm install --save-dev react-native-dotenv
```

-   `.bablerc`

```json
{
    "presets": ["babel-preset-expo", "module:react-native-dotenv"]
}
```

-   `.env`

```
SECRET_KEY=VALUE
```

-   Usage

```javascript
import { SECRET_KEY } from 'react-native-dotenv';
```

### Expo Icons

-   [List](https://expo.github.io/vector-icons/)

```jsx
import { AntDesign } from '@expo/vector-icons';
...
return <AntDesign name="check" size={30} />;
```

### TextInput

-   `onEndEditing`

```jsx
<TextInput onEndEditing={() => {}} />
```

### FlatList

-   Re-render FlatList

```jsx
<FlatList key={data.length} /> // Functional or Pure components
<FlatList extraData={data} /> // Class components
```

### Navigation

-   Parameters

```jsx
navigation.navigate('exampleScreen', { id: data.id }); // set
```

```jsx
const id = navigation.getParam('id'); // get
```

-   Styling

```jsx
exampleComponent.navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('name'),
        headerStyle: { backgroundColor: 'blue' },
        headerBackTitle: 'Back',
        headerBackTitleStyle: { color: 'white' },
        headerTintColor: 'white' // '<' Chevron Left Icon
    };
};
```

-   `withNavigation` -> directly pass down `navigation` in props

```jsx
import { withNavigation } from 'react-navigation';
...
export default withNavigation(exampleComponent);
```

### SafeAreaView

-   Render content within the safe area boundaries of a device (only iOS devices)

```jsx
<SafeAreaView>...</SafeAreaView>
```

### ScrollView

-   `contentContainerStyle`

```jsx
<ScrollView contentContainerStyle={styles.contentContainer}>...</ScrollView>
```

### StatusBar

-   `backgroundColor`
-   `barStyle`
    -   light-content
    -   dark-content

```jsx
import { StatusBar } from 'react-native';
...
<StatusBar barStyle="light-content" />;
```
