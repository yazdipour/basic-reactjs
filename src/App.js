import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import "./Styles/GlobalStyle.css";
import styles from "./Styles/Style.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";

function App() {
  return (
    <div className="App">
      <Greet name="shah">
        <h1>prop.children here</h1>
      </Greet>
      <Welcome name="shah" />
      <Hello></Hello>
      <Message></Message>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <NameList></NameList>
      <Stylesheet xclass="italicText"></Stylesheet>
      <h1 className="error">From GlobalStyle</h1>
      <h1 className={styles.ok}>From ModuleStyle</h1>
      <Form></Form>
      <br />
      <LifecycleA></LifecycleA>
    </div>
  );
}

export default App;
