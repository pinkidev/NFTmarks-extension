import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import Select from "../atoms/select";
import Input from '../atoms/input';
import useContent from "../../use/useContent/useContent";

const AddNftMark: Component<{}> = () => {
  const categories = [{label: 'Kinky', value: 'kinky'}, {label: 'Default', value: 'default'}];
  const navigate = useNavigate();
  const { addMark } = useContent();
  const [name, setName] = createSignal('');
  const [nftMark, setNftMark] = createSignal('');
  const [category, setCategory] = createSignal('Category');

  const createNftMark = () => {
    addMark({ NAME: name(),URL: nftMark(), CATEGORY: category() === 'Category' ? 'Default' : category(), USERID: '652d5eb3d7e492b02c050f70' });
    navigate('/')
  }

  return (
    <div class="px-6 text-textLight dark:text-textDark">
      <Select value={category} setValue={setCategory} name="Category" options={categories} />
      <div class="mt-4">
        <Input value={name} name="NFTmarkName" placeholder="NFT Mark Name" setValue={setName} />
      </div>
      <div class="mt-4">
        <Input value={nftMark} name="NFTmarkName" placeholder="NFT Mark" setValue={setNftMark} />
      </div>
      <div class="mt-4">
        <button id="nft-mark" class={`dark:border-textDark 
    dark:bg-primaryButtonDark bg-primaryButtonLight p-2 mt-2 font-bold w-full items-center rounded-md text-center 
    hover:dark:bg-secondaryButtonDark hover:bg-secondaryButtonLight`} name="NFTmarkName" onClick={createNftMark}>Save</button>
      </div>
    </div>);
};

export default AddNftMark;