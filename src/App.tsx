import Container from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';

import './styles/theme.css';
import './styles/global.css';
import CountDown from './components/CountDown';
import Input from './components/Input';
import Cycles from './components/Cycles';
import Button from './components/Button';
import { PlayCircleIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <div className='content'>
          <Menu />
        </div>
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <Input
              id='input'
              type='text'
              labelText='Task'
              placeholder='Digite Algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <Button color='danger' icon={<PlayCircleIcon size={32} />} />
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
