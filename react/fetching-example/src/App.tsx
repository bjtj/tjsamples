import React, { useReducer } from 'react';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsers = ({ page, append }: { page?: number, append?: boolean }) => {
    dispatch({ type: 'loading', clear: !append });
    fetch(`https://reqres.in/api/users${page ? `?page=${page}` : ''}`)
      .then(res => res.json())
      .then(({ page, data, total_pages }) => {
        dispatch({ type: append ? 'success-append' : 'success', data, page, hasNextPage: page < total_pages });
      })
      .catch(error => {
        dispatch({ type: 'error', error: error.message });
      });
  }

  const removeUser = (user: User) => {
    dispatch({ type: 'remove-user', user });
    setTimeout(() => {
      Math.random() > 0.5 ? dispatch({ type: 'remove-user-failed', user, error: 'Failed: Something went wrong' }) :
        dispatch({ type: 'remove-user-success', user });
    }, Math.random() * 1000 + 500);
  }

  return (
    <div>
      <button onClick={() => {
        getUsers({});
      }}>Get Users</button>
      <ul style={{ padding: '0 1rem' }}>
        {state.data.map(user => (
          <li key={user.id} style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 10, opacity: user.removing ? '50%' : '' }}>
            <img src={user.avatar} alt="avatar" width={75} height={75} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ lineHeight: 0 }}>{user.first_name} {user.last_name}</h3>
              <div>E-mail: {user.email}</div>
            </div>
            <div style={{position: 'relative'}}>
              <button onClick={() => {
                removeUser(user);
              }}
                disabled={user.removing}
              >{user.removing ? 'Removing' : 'Remove'}</button>
              { user.removingError && (<div style={{position: 'absolute', color: 'red', right: 0, fontSize: '.75rem'}}>{user.removingError}</div>) }
            </div>
          </li>))}
      </ul>
      <div style={{textAlign: 'center'}}>
      {state.hasNextPage && (<button onClick={() => {
        getUsers({ page: state.page! + 1, append: true });
      }}>More</button>)}
      {state.loading && (<p>Loading...</p>)}
      </div>
    </div>
  );
}

type User = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
  removing?: boolean,
  removingError?: string,
}

type State = {
  loading: boolean,
  data: User[],
  page?: number,
  hasNextPage?: boolean,
  result: 'success' | 'error' | null,
  error: string | null
}

const initialState: State = {
  loading: false,
  data: [],
  result: null,
  error: null,
}

type Action = {
  type: 'loading',
  clear?: boolean,
} | {
  type: 'success',
  data: User[],
  page: number,
  hasNextPage: boolean,
} | {
  type: 'success-append',
  data: User[],
  page: number,
  hasNextPage: boolean,
} | {
  type: 'error',
  error: string,
} | {
  type: 'remove-user',
  user: User,
} | {
  type: 'remove-user-success',
  user: User,
} | {
  type: 'remove-user-failed',
  user: User,
  error: string,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        data: action.clear ? [] : state.data,
        loading: true,
        hasNextPage: false,
      }
    case 'success':
      return {
        loading: false,
        data: action.data,
        result: 'success',
        error: null,
        page: action.page,
        hasNextPage: action.hasNextPage,
      };
    case 'success-append':
      return {
        loading: false,
        data: [...state.data, ...action.data],
        result: 'success',
        error: null,
        page: action.page,
        hasNextPage: action.hasNextPage,
      };
    case 'error':
      return {
        loading: false,
        data: [],
        result: 'error',
        error: action.error,
      };
    case 'remove-user':
      return {
        ...state,
        data: state.data.map(user => user.id === action.user.id ? { ...user, removing: true } : user),
      }
    case 'remove-user-success':
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.user.id),
      }
    case 'remove-user-failed':
      return {
        ...state,
        data: state.data.map(user => user.id === action.user.id ? { ...user, removing: false, removingError: action.error } : user),
      }
  }
}

export default App;
