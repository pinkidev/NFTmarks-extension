import { Component, createSignal } from "solid-js";
import Select from "../molecules/select";

const AddNftMark: Component<{}> = () => {
  let categories = ['Default', 'Kinky'];
  let [name, setName] = createSignal('');
  let [nftMark, setNftMark] = createSignal('');

  const [category, setCategory] = createSignal('Category');

  return (
    <div class="px-6 text-textLight dark:text-textDark">
      <Select value={category} setValue={setCategory} name="Category" options={categories} />
      <div class="mt-4">
        <input id="name" placeholder="NFT Mark Name" class={`dark:border-textDark border-textLight border-2 border-solid
    dark:bg-primaryDark bg-primaryLight focus:bg-secondaryLight dark:focus:bg-secondaryDark p-2 mt-2 font-bold w-full rounded-md 
    hover:dark:bg-secondaryDark hover:bg-secondaryLight`} name="NFTmarkName" value={name()} onChange={setName}></input>
      </div>
      <div class="mt-4">
        <input id="nft-mark" placeholder="NFT Mark" class={`dark:border-textDark border-textLight border-2 border-solid
    dark:bg-primaryDark bg-primaryLight focus:bg-secondaryLight dark:focus:bg-secondaryDark p-2 mt-2 flex font-bold w-full rounded-md 
    hover:dark:bg-secondaryDark hover:bg-secondaryLight`} name="NFTmarkName" value={nftMark()} onChange={setNftMark}></input>
      </div>
      <div class="mt-4">
        <button id="nft-mark" class={`dark:border-textDark 
    dark:bg-cyan-700 bg-violet-200 p-2 mt-2 font-bold w-full items-center rounded-md text-center 
    hover:dark:bg-secondaryDark hover:bg-violet-300`} name="NFTmarkName" value={nftMark()} onChange={setNftMark}>Save</button>
      </div>
    </div>);
};

export default AddNftMark;