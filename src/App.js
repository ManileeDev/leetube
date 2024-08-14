import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [{
      path: "/watch",
      element: <WatchVideo />
    },
    {
      path: "/",
      element: <MainContainer />
    }]
  }])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
