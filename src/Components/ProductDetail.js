import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown,Button } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams(); //url 아이디값 갖고오기
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  //ProductCard에서 클릭해서 넘어온곳
  //해당 url의 id값과 같은 id를 갖고있는 데이터를 뿌려준다 id는 위에서 useParams를 사용해서 뽑아옴
  //함수가 순서대로 실행 돼야해서 async와 await를 사용 json데이터가 있는 서버에서 정보를 받아온뒤
  //응답받은 JSON데이터를 js객체로 바꿔줌 
  const getProductDetail = async() => {
    // let url = `http://localhost:3004/products/${id}`
    let url = `https://my-json-server.typicode.com/aksen123/reactshowppingmall/products/${id}`
    let response = await fetch(url);
    let data = await response.json()
    // setLoading(false)
    console.log(data, product)
    setProduct(data)
  }

  useEffect(()=>{
    getProductDetail()
  },[])
  if( product == null) return <h1>Loading</h1>
  return (
    <Container>
      <Row>
        <Col className='product-detail-img'>
          <img src={product.img}/>
        </Col>
        <Col>
          <div className='product-info'>{product.title}</div>
          <div className='product-info'>{product.price}</div>
          <div className='choice'>{product.choice ? 'Conscious choice' : ''}</div>
          <Dropdown className='drop-down'>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product.size.map((item)=> (
                  <Dropdown.Item href='#/action-1'>{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button className='add-button' variant='dark'>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
