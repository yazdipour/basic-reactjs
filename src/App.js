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

import FragmentDemo from "./components-adv/FragmentDemo";
import Table from "./components-adv/Table";
import PureComp from "./components-adv/PureComp";
import MemoComp from "./components-adv/MemoComp";
import RefsDemo from "./components-adv/RefsDemo";
import PortalDemo from "./components-adv/PortalDemo";
import Hero from "./components-adv/Hero";
import ErrorBoundary from "./components-adv/ErrorBoundary";
import ClickCounter from "./components-adv/ClickCounter";
import HoverCounter from "./components-adv/HoverCounter";
import { UserProvider } from "./components-adv/userContext";
import ComponentC from "./components-adv/ComponentC";
import PostForm from "./components-http/PostForm";
import PostList from "./components-http/PostList";

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
      <h5 style={{ background: "yellow" }}>---Advance Section---</h5>
      <FragmentDemo></FragmentDemo>
      <Table></Table>
      <PureComp></PureComp>
      <MemoComp></MemoComp>
      <RefsDemo></RefsDemo>
      <PortalDemo></PortalDemo>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
        <Hero heroName="Jozker"></Hero>
      </ErrorBoundary>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      <UserProvider value="Shah">
        <ComponentC></ComponentC>
      </UserProvider>
      <hline></hline>
      npm install axios
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
