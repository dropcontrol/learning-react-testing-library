// https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f
// これをやっている。

import { BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import { App2 } from "./App2";

function getUser() {
  return Promise.resolve({ id: '1', name: 'Robin' });
}

function App() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <BrowserRouter>
      <Route exact path="/">
        <div>
          {user ? <p>Singed in as {user.name}</p> : null}

          <Search value={search} onChange={handleChange}>
            Search:
          </Search>

          <p>Searches for {search ? search : '...'}</p>
        </div>
      </Route>
      <Route path="/app2">
        <App2 />
      </Route>
    </BrowserRouter>
  );
}

export function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;


