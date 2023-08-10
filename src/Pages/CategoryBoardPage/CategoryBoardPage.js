import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Category from "../../Components/Category/Category";
import { useAppContext } from "../../context/AppContext";
import Button from "../../Components/Button/Button";
import { setCategoryAction, setCurrentQuestionAction, answerSelectedAction, setScoreAction } from "../../context/action";

function CategoryBoardPage() {
  const { state, dispatch } = useAppContext();
const  handleClick = (category) =>{
  dispatch(setCategoryAction(category))
  dispatch(setCurrentQuestionAction(1))
  dispatch(setScoreAction(0))
  dispatch(answerSelectedAction(false)) 
}

  return (
    <Container>
      <h1 className="mt-3">Temas</h1>
      <Row>
        {state.questions.map((question, questionIndex) => (
          <Col className=" mt-3 p-4" xs={12} md={3} key={questionIndex}>
            <Category
            img={question.category}
              children={
                <Button
                  title={question.category}
                  variant={"dark"}
                  link={"/quiz"}
                  onClick={() => handleClick(question.category)}
                />
              }
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryBoardPage;
