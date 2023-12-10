import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import "./homeAdmin.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBarAdmin from "../../components/navbarAdmin/NavBarAdmin";

export default function HomeAdmin() {
  const location = useLocation();

  const getQueryParam = (name) => {
      const urlParams = new URLSearchParams(location.search);
      return urlParams.get(name);
  };

  const erro = getQueryParam('err');

  if (erro) {
    toast.error(`Erro detectado: ${erro}`);
  }

  return (
    <>
      <NavBarAdmin />
      <Header />
      <div className="homeAdmin">
        <Posts admin={true} />
        <Sidebar className="sidebar" />
      </div>
    </>
  );
}
