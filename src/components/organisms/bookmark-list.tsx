import { BookmarkRow } from "../molecules/bookmark-row";
import { Component } from "solid-js";
import { BookmarkListProps } from "./types";
import { Bookmark } from "../molecules/types";
export const BookmarkList: Component<BookmarkListProps> = ({ bookmarks }) => {
  return (
    <div class={`px-6 pb-4 ${bookmarks.length > 6 ? 'overflow-y-scroll' : '' } scroller-height`}>
      {bookmarks.map((bookmark: Bookmark) => {
        return <BookmarkRow bookmark={bookmark} />;
      })}
    </div>
  );
};
