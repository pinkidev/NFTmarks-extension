import type { Component } from "solid-js";
import styles from "./App.module.css";
import Footer from "./components/organisms/footer";
import Header from "./components/organisms/header";
import { BookmarkList } from "./components/organisms/bookmark-list";


let bookmarks = [
  {name: "React", url: "https://react.com"},
  {name: "Preact", url: "https://preact.com"},
  {name: "React", url: "https://react.com"},
  {name: "Preact", url: "https://preact.com"},
  {name: "React", url: "https://react.com"},


]
const App: Component = () => {
  return (
    <div class="flex w-full h-screen justify-center">
      <div class="bg-neutral-700 h-screen relative" style={{width:"400px"}}>
        <Header />
        <BookmarkList bookmarks={bookmarks} />
        <div class="fixed bottom-0" style={{width: "inherit"}}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
