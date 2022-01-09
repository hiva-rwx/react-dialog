import { Fragment, useState } from "react";
import "./app.scss";
import Dialog from "./components/Dialog";
const App = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setIsOpen1((state) => !state)}>dialog1</button>
      <button onClick={() => setIsOpen2((state) => !state)}>dialog2</button>
      <button onClick={() => setIsOpen3((state) => !state)}>dialog3</button>

      <Dialog setClose={setIsOpen1} open={isOpen1} title={"dialog Title 1"}>
        <h4>dialog 1</h4>
        <p>lorem 1</p>
      </Dialog>
      <Dialog setClose={setIsOpen2} open={isOpen2} title={"dialog Title 2"}>
        <h4>dialog 2</h4>
        <p>lorem 1</p>
      </Dialog>
      <Dialog setClose={setIsOpen3} open={isOpen3} title={"dialog Title 3"}>
        <h4>dialog 3</h4>
        <p>lorem 1</p>
      </Dialog>
    </Fragment>
  );
};

export default App;
