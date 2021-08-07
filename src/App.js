// https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f
// これをやっている。



import { useState, useEffect } from "react";

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
    <div>
      {user ? <p>Singed in as {user.name}</p> : null}

      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}

function Search({ value, onChange, children }) {
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


/*
import { useState } from "react";
import axios from 'axios';

const URL = 'http://hn.algolia.com/api/v1/search';

function App() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  async function handleFetch(event) {
    let result;

    try {
      result = await axios.get(`${URL}?query=React`);

      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch Stories
      </button>

      {error && <span>Something went wrong ...</span>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectId}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/