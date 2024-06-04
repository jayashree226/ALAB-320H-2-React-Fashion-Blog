function ArticleItem({ data, id }) {
    console.log(data);
  return (
    <>
      <h4>{data.date}</h4>
      <h2>{data.title}</h2>
      <img src={data.image} alt="" />
      <p>{data.content}</p>
      <button>Continues...</button>
      <br/>
      <hr/>
    </>
  );
}

export default ArticleItem;
