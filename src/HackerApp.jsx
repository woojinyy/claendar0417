import axios from "axios";
import { useEffect, useState } from "react";
import HackerNews from "./components/HackerNews";

const HackerApp = () => {
    const [newsList,setNewsList]=useState([]);//array타입 object{}
    //url가져오기
    const NEWS_URL="https://api.hnpwa.com/v0/news/1.json"//여기에 jsp, 서블릿 오면 된다
    useEffect(()=>{
                            //주소                          응답
            axios.get(NEWS_URL).then(response=>{
                console.log(response.data);
                console.log(newsList);
                //6번에서 서언한 useState 훅에 데이터 초기화
                setNewsList(response.data);
                console.log(newsList);
            })
    },[])//두번째요소 array 등록
    return ( 
        //태그를통해서 주소번지 넘기기
        <HackerNews newsList={newsList}/>
     );
}
 
export default HackerApp;