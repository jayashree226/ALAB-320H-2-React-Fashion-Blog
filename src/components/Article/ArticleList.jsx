import { Article } from "../../data/Article";
import ArticleItem from "./ArticleItem";


function ArticleList() {
  return (
    <div>
      <ArticleItem data={Article[0]} />
      <ArticleItem data={Article[1]} />
    </div>
  );
}

export default ArticleList