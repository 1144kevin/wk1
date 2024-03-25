import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     light400: '#a8a29e',
     primary700: '#0e7490',
     purple:'#6200EE',
     white:'#fff'
   },
 };

 export default MyTheme;