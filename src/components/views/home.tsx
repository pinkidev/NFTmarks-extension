import { Component, createEffect, createSignal } from "solid-js";
import { BookmarkList } from "../organisms/bookmark-list";
import Select from "../molecules/select";
import { useSelector } from "../../store";
import useContent from "../../use/useContent/useContent";

const Home: Component = () => {
  const {nftMarks} = useContent()
  const [category, setCategory] = createSignal('Category');

  createEffect(() => {
    nftMarks()
  })
  let bookmarks = nftMarks()
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
