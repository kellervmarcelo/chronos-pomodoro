import Container from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';

import './styles/theme.css';
import './styles/global.css';

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
    </>
  );
}

export default App;
