import { StackNavigator } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import SearchDetail from './SearchDetail';

const App = StackNavigator({
    Home: { screen: SearchPage  },
    Results: { screen: SearchResults  },
    Detail: { screen: SearchDetail }
});
export default App;
