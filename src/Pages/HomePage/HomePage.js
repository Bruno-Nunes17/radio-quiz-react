import Button from "../../Components/Button/Button";
import RadiologiaLogo from "../../img/radiologiaLogo.svg"
import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { loadQuestionsAction } from "../../context/action";
import "./index.css"


function HomePage() {
 const {dispatch} =useAppContext()
  useEffect(()=>{
    loadQuestionsAction(dispatch)
  }, [dispatch])
  
  return (
    <div className="mt-5">
      <h1>RadioQuiz</h1>
      <p>Este é um quiz interativo sobre Radiologia</p>
      <img className="mt-3 mb-5" src={RadiologiaLogo} alt=""/>
      <Button link='/temas' title={'Iniciar'} variant='warning'/>
    </div>
  );
}

export default HomePage;
