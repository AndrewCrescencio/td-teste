import { Main } from "./styles";
import { Sidebar } from "../Sidebar";
import { Board } from "../Board";

export const HomeContent = () => {
  return (
    <Main>
      <Sidebar />
      <Board />
    </Main>
  );
};
