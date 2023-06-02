import { Component, createSignal } from "solid-js";
import { BookmarkList } from "../organisms/bookmark-list";
import Select from "../molecules/select";
import { useSelector } from "../../store";

const Home: Component = () => {
  const { app } = useSelector();
  const [category, setCategory] = createSignal('Category');

  let bookmarks = [
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
    { name: "Preact", url: "https://preact.com" },
    { name: "React", url: "https://react.com" },
  ];
  return (
    <div class="px-6">
      <Select value={category} setValue={setCategory} name="Category" options={['Default']} />
      <div class="mt-2">
        <BookmarkList bookmarks={bookmarks} />
      </div>
    </div>
  );
};

export default Home;
