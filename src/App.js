
import './App.css';

function App() {
  const tasks = [
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
      {tasks[3].chore}
      </div>
      
    </div>
  );
}

export default App;
