import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import Select from "../atoms/select";
import Input from '../atoms/input';
import useContent from "../../use/useContent/useContent";

const AddNftMark: Component<{}> = () => {
  let categories = ['Default', 'Kinky'];
  let navigate = useNavigate();
  let { setMarks, nftMarks } = useContent();
  let [name, setName] = createSignal('');
  let [nftMark, setNftMark] = createSignal('');

  const [category, setCategory] = createSignal('Category');

  const createNftMark = () => {
    setMarks([{ name: name(), url: nftMark(), id: '0' }, ...nftMarks()]);
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
    dark:bg-cyan-700 bg-violet-200 p-2 mt-2 font-bold w-full items-center rounded-md text-center 
    hover:dark:bg-secondaryDark hover:bg-violet-300`} name="NFTmarkName" onClick={createNftMark}>Save</button>
      </div>
    </div>);
};

export default AddNftMark;