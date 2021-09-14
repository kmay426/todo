import './App.css';
import Tasks from './Components/Tasks';

function App() {
  const task = [
    {
      chore: 'Buy groceries ',
      id: 0
    },
    {
      chore: 'Feed dogs ',
      id: 1
    },
    {
      chore: 'Mow grass ',
      id: 2
    },
    {
      chore: 'Wash golf cart ',
      id: 3
    }
  ];
  return (
    <div>
      <h1>
        May family to do list:
      </h1>
      <div className='items'>
        <Tasks chore={task[0].chore} />
        <Tasks chore={task[1].chore} />
        <Tasks chore={task[2].chore} />
        <Tasks chore={task[3].chore} />
      </div>

    </div>
  );
}

export default App;
