import { Navigation } from './common/navigation';
import { SafeAreaView } from 'react';
import { Poppins_300Light ,Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from 'react';

const App = () => {

  //Fonts are loaded using CSS in the web app
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  );
};

export {App}; // This component will now be rendered from index.html, not App.js