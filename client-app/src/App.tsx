import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
// import MyComponent from './demo';

function App() {
  const [activities, setactivities ] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setactivities(response.data);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivity' />
          <List>
            {activities.map((activity: any) => (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))}
          </List>
    </div>
  );
}

export default App;