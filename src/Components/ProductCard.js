import React from 'react'
import { useNavigate } from 'react-router-dom'

//ProductAll 컴퍼넌트에서 ProductList를 map 으로 돌리면서 카드를 출력함
//item은  ProductAll에서 보내준 props로 가상서버에서 갖고온 배열객체데이터 안에 객체중 하나
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
    //클릭하면 해당 아이템의 아이디가 적힌 곳으로 이동 ( App.js에 Route설정 = path='/product/:id')
  }
  return (
    <div className='card' onClick={showDetail}>
      <img src={item.img}/>
      <div>Conscious Choice</div>
      <div>{ item.title }</div>
      <div>{ item.price }</div>
      <div>{ item.new ? "신제품" : "" }</div>
    </div>
  )
}

export default ProductCard
