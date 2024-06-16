import { useState } from 'react';
import Navs from './components/Navs';
import Hero from './components/Hero';
import './App.css';
import MainContainer from './components/MainContainer';
import CustomPhoneModal from './components/CustomPhoneModal';


function App() {
  const [phoneModal, setphoneModal] = useState(false);
  const windowSize = window.innerWidth;
  console.log(windowSize);
  return (
    <div>
        {windowSize < 768 && <div className='quesried-edit'>
          <img width={80} src="/images/edit.svg" alt="edit-something" onClick={() => setphoneModal(true)} />
        </div>}
        {phoneModal && <CustomPhoneModal setphoneModal={setphoneModal}/>}
        {windowSize >= 768 && <Navs />}
        <Hero windowSize={windowSize} />
        <MainContainer windowSize={windowSize} />
    </div>
  );
}

export default App;
