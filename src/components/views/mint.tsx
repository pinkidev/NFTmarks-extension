import { Component, createSignal } from "solid-js";
import Input from '../atoms/input';
import Select from "../atoms/select";
import Categories from '../../util/categories';

const Mint: Component<{}> = (props) => {

  const [name, setName] = createSignal('');
  const [cost, setCost] = createSignal('');
  const [category, setCategory] = createSignal('');

  let options = Categories.sort();
  const selectOps = options.map(op => ({ label: op, value: op }));


  return (
    <div class="px-6 py-4 relative text-textLight dark:text-textDark">
      <Select value={category()} setValue={setCategory} name="Category" options={selectOps} />
      
      <div class="mt-2">
        <Input name="Name" value={name} setValue={setName} placeholder="Name of NFT" />
      </div>

      <div class="mt-2">
        <Input type="number" name="cost" value={cost} setValue={setCost} placeholder="$" />
      </div>
    </div>
  );
};

export default Mint;