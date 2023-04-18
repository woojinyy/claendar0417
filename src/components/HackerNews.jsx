const HackerNews = (props) => {//{newsList:Array(30)} 데이터셋 연계가 자유로워짐
const {newsList}=props;//구조분해할당

    return (//UI들어가는 곳 
        <div>
            {//{}중괄호 안은 자바스크립트 문법 가능
            /* [{},{}...]  map으로 꺼낸다*/
            newsList&&Object.keys(newsList).map(key=>(//key로 접근
                    <li>
                        {newsList[key].id}/
                    ({newsList[key].title})/
                   user🙋‍♂️: {newsList[key].user}/
                    ({newsList[key].url})
                        comments_count :({newsList[key].comments_count})
                        </li>//id찍어보기
            ))}
        </div>
     );
}
 
export default HackerNews;