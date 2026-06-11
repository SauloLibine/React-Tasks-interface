import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Background from "../components/Background";
import Block from "../components/Block";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <Background>
      <Block>
        <div className="flex justify-center relative">
          <button 
          className="absolute left-0 top-0 bottom-0 text-slate-100"
           onClick={() => window.history.back()}
          >
            <ChevronLeftIcon className="text-slate-100" />
          </button>
          <Title>
            Detalhes da Tarefa
          </Title>
        </div>
        <div className="bg-slate-300 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-slate-700">{title}</h2>
          <p className="text-slate-700 w-screen">{description}</p>
        </div>
      </Block>
    </Background>
  );
}

export default TaskPage;