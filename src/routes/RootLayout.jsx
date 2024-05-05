import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";


function RootLayout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function showModalHandler() {
    setIsModalVisible(true);
  }
  return <>
  <MainHeader onCreatePost={showModalHandler}/>
  <Outlet />
  </>
}

export default RootLayout;