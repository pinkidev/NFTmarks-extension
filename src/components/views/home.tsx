import { Component } from "solid-js";
import { BookmarkList } from "../organisms/bookmark-list";
import { useSelector } from "../../store";

const Home: Component = () => {
  const {app} = useSelector();

  let bookmarks = [
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
  ];
  return (
    <div class="px-6 pb-4">
      {app.appState.theme ? 'dark' : 'light'}
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
};

export default Home;
