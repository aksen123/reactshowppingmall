import React from 'react'
import ProductDetail from './ProductDetail';
import { Navigate } from 'react-router-dom';

//로그인상태에 따라사 디테일 페이지 or 로그인 페이지로 보내줌
const PrivateRouter = ({ authenticate }) => {
  return authenticate ? <ProductDetail /> : <Navigate to={'/login'}/>
}

export default PrivateRouter
