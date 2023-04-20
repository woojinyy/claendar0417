import React from 'react'
import styles from './main.module.css'
const TentMain = ({tentList}) => {
//부모컴포넌트에서 DB연동이 유리하다


  return (
    <div styles={styles.preview} >
      <ul>
        {
            tentList.map((tent,index)=>{
                <li key={index}>{`상품명:${tent.title} 가격:${tent.price}`}</li>
            })
        }
      </ul>
    </div>
  )
}

export default TentMain
