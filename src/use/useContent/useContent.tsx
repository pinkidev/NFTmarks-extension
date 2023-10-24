import { useSelector } from "../../store";

const useContent = () => {
  const { app } = useSelector();
  const appState = () => app.state;
  const nftMarks = () => app.state.nftMarks;
  const category = () => app.state.category
  const setMarks = app.setMarks;
  const setCategory = app.setCategory
  const setConnected = app.setConnected
  const setBlockchain = app.setBlockchain
  const connected = () => app.state.blockchain.connected
  return {
    category,
    setCategory,
    appState,
    nftMarks,
    setMarks,
    setConnected,
    setBlockchain,
    connected
  };
};

export default useContent;
