import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";

export default function Home() {
  const location = useLocation();
  const toastDisplayed = useRef(false);

  useEffect(() => {
    const getQueryParam = (name) => {
      const urlParams = new URLSearchParams(location.search);
      return urlParams.get(name);
    };

    const exibirToastSeErro = () => {
      const erro = getQueryParam('err');

      if (erro && !toastDisplayed.current) {
        toast.error(`Erro detectado: ${erro}`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        toastDisplayed.current = true;
      }
    };

    exibirToastSeErro();
  }, [location.search]);

  return (
    <>
      <NavBar/>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
      <ToastContainer />
    </>
  );
}
