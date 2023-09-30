import { Component, createEffect, createSignal, Show } from "solid-js";
import { BookmarkList } from "../organisms/bookmark-list";
import Select from "../atoms/select";
import { useSelector } from "../../store";
import useContent from "../../use/useContent/useContent";
import Login from "./login";

const Home: Component = () => {
  const { nftMarks } = useContent()
  const [category, setCategory] = createSignal('Category');
  const [connected, setConnected] = createSignal(false);

  createEffect(() => {
    nftMarks()
  })

  let bookmarks = nftMarks()
  return (
    <Show when={connected()} fallback={<Login connected={connected} setConnected={setConnected}/>}>
      <div class="px-6">
        <Select value={category} setValue={setCategory} name="Category" options={['Default']} />
        <div class="mt-2">
          <BookmarkList bookmarks={bookmarks} />
        </div>
      </div>
    </Show>

  );
};

export default Home;
