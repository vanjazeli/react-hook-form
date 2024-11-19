import MainWrap from "./components/ui/MainWrap";
import MainForm from "./components/containers/MainForm/MainForm";

export default function App() {
  return (
    <MainWrap className="min-h-screen flex items-center">
      <MainForm />
    </MainWrap>
  );
}
