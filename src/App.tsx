// import UserList from "./components/UserList";
import React, { Suspense } from "react";
const UserList = React.lazy(() => import("./components/UserList"));

import { Provider } from "react-redux";
import store from "./store/store";
import { useMemo } from "react";
import Loading from "./components/Loading";
function App() {
  const userListComponent = useMemo(() => {
    return (
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    );
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="absolute w-full bottom-0 z-99 bg-black">
          <p className="text-base text-gray-900 my-4 text-center w-full text-white">
            You are in {process.env.NODE_ENV} mode
          </p>
        </div>
        <Provider store={store}>{userListComponent}</Provider>
      </div>
    </>
  );
}

export default App;
