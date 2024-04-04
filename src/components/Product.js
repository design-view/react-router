import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    item1: {
        title: "아이폰",
        price: 150,
        desc: "성능이 좋습니다."
    },
    item2: {
        title: "갤럭시",
        price: 120,
        desc: "AS가 좋습니다."
    }
}
function Product() {
    const { productName } = useParams()
    const product = data[productName];
    return ( 
        <div>
            <h2>제품페이지</h2>
            <div>제품 페이지입니다.</div>
            { product ? <div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.desc}</p>
            </div> : <div>존재하지 않는 제품입니다.</div>}
        </div>
     );
}
export default Product;