import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const getQueryParam = (name) => {
      const urlParams = new URLSearchParams(location.search);
      return urlParams.get(name);
    };

    const exibirToastSeErro = () => {
      const erro = getQueryParam('err');

      if (erro) {
        toast.error(`Erro detectado: ${erro}`);
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
        <Sidebar className="sidebar" />
      </div>
    </>
  );
}
