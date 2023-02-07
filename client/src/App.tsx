import React from 'react';
import { Loader } from './components/Loader';
import { User } from './components/User';
import { useUsers } from './hooks/user';


function App() {
  const { users, loading } = useUsers()

  return (
    <div className='container flex flex-wrap'>
      {loading && <Loader/>}
      { users.map(user => <User  user={ user } key={ user.id }/>)}
    </div>
  );
}

export default App;
