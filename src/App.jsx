import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// import ArticleItem from './components/Article/ArticleItem';
import ArticleList from './components/Article/ArticleList';


function App() {
  
  return (
    <>
      <Header/>
      <Navbar/>
      <ArticleList/>
      <Footer/>
    </>
  )
}

export default App;
