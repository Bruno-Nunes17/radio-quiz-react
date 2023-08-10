import { useAppContext } from "../../context/AppContext";
import Button from "../../Components/Button/Button";

function GameOverPage() {
  const { state } = useAppContext();
  return (
    <>
      <div>
        <h1 className="mt-3">Fim de Jogo</h1>
        <h2 className="mt-5">{`Você acertou ${state.score} de ${state.totalQuestion} questões`}</h2>
      </div>
      <div className="mt-5">
        <Button link="/" variant={'warning'} title={'Jogue novamente'}></Button>
      </div>
    </>
  );
}

export default GameOverPage;
