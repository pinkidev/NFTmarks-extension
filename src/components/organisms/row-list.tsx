import { Component, For, Show } from "solid-js";
import { ListProps } from "./types";


export const RowList: Component<ListProps> = (props) => {
  return (
    <div class={`${props.list.length > 6 ? 'overflow-y-scroll' : ''} scroller-height pb-20`}>
      <For each={props.list}>
        {(row) =>
          <Show when={row.CATEGORY.toLowerCase() === props.category.toLowerCase()}>
            <props.RowComponent {...row} />
          </Show>}
      </For>
    </div>
  );
};
