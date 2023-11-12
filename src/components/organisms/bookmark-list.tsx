import { BookmarkRow } from "../molecules/bookmark-row";
import { Component, For, Show } from "solid-js";
import { BookmarkListProps } from "./types";


export const BookmarkList: Component<BookmarkListProps> = (props) => {
  return (
    <div class={`${props.bookmarks.length > 6 ? 'overflow-y-scroll' : ''} scroller-height pb-20`}>
      <For each={props.bookmarks}>
        {(bookmark) =>
          <Show when={bookmark.CATEGORY.toLowerCase() === props.category.toLowerCase()}>
            <BookmarkRow {...bookmark} />
          </Show>
        }
      </For>
    </div>
  );
};
