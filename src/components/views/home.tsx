import { Component } from "solid-js";
import { BookmarkList } from "../organisms/bookmark-list";

const Home: Component = () => {
  let bookmarks = [
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
  ];
  return (
    <div>
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
};

export default Home;
