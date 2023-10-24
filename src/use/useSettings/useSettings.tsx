import { useSelector } from "../../store";

const useSettings = () => {
  const { app } = useSelector();
  const setBlockchain = app.setBlockchain
  const connected = () => app.state.blockchain.connected
  const setConnected = app.setConnected

  return {
    setConnected,
    setBlockchain,
    connected
  };
};

export default useSettings;
