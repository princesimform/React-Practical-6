import UserList from "./components/UserList";
import { Provider } from "react-redux";
import store from "./store/store";
import { useMemo } from "react";
function App() {
  const userListComponent = useMemo(() => {
    return <UserList />;
  }, []);
  return (
    <>
      <div>{process.env.NODE_ENV}</div>
      {/* <Provider store={store}>{userListComponent}</Provider> */}
    </>
  );
}

export default App;
