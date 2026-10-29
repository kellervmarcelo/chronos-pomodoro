import { PlayCircleIcon } from 'lucide-react';
import Button from '../Button';
import Cycles from '../Cycles';
import Input from '../Input';

export default function MainForm() {
  return (
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
  );
}
