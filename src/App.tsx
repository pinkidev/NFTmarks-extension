import type { Component } from "solid-js";
// import styles from "./App.module.css";
import Footer from "./components/organisms/footer";
import Header from "./components/organisms/header";
import Settings from "./components/views/settings";
import Home from "./components/views/home";
import { Router, Route, Routes } from "@solidjs/router";
import { StoreProvider } from "./store";

const App: Component = () => {
  return (
    <StoreProvider>
      <Router>
        <div class="flex w-full h-screen justify-center">
          <div
            class="bg-neutral-700 h-screen relative"
            style={{ width: "400px" }}
          >
            <Header />
            <Routes>
              <Route path="/" component={Home}></Route>
              <Route path="/account" component={Settings}></Route>
            </Routes>
            <div class="fixed bottom-0" style={{ width: "inherit" }}>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
