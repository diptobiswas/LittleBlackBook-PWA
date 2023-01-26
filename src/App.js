import { NavbarDesktop, EmergencyTitleDesktop, EmergencyButtonDesktop } from './ui-components';
import { Flex, View} from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
    <NavbarDesktop width={'100vw'}/>
    <Flex overflow={'auto'}>
      <View>
      </View>
      <Flex position={'relative'} overflow={'hidden'} grow={1}>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
