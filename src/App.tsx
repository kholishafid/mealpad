import { Outlet, ScrollRestoration } from 'react-router-dom'


function App() {

  return (
    <div className='min-h-[100vh] h-full'>
      <Outlet />
      <ScrollRestoration />
    </div>
  )
}

export default App
