import { useContext } from "react";
import { useAccount } from "wagmi";
import { AppContext } from ".";

export default function Web3ConnectButton() {
  const { isConnecting, isReconnecting } = useAccount();

  const ctx = useContext<any>(AppContext);
  const { address, setAddress, setOpen } = ctx;
  // const { disconnect } = useDisconnect();

  // const parent = this._reactInternalInstance._currentElement._owner._instance;

  console.log("address................. 1", address);

  const handleClick = () => {
    if (address) {
      localStorage.removeItem("@w3m-storage/SOCIAL_USERNAME");
      localStorage.removeItem("@w3m/connected_social");
      localStorage.removeItem("@w3m-storage/EMAIL");
      localStorage.removeItem("@w3m-storage/EMAIL_LOGIN_USED_KEY");
      localStorage.removeItem("@w3m-storage/LAST_USED_CHAIN_KEY");
      localStorage.removeItem("@w3m-storage/SMART_ACCOUNT_ENABLED_NETWORKS");
      localStorage.removeItem("wagmi.recentConnectorId");
      localStorage.removeItem("@w3m/connected_connector");
      localStorage.removeItem("wagmi.store");

      // disconnect()
      setAddress(undefined);
    } else {
      setOpen(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isConnecting || isReconnecting ? true : undefined}
    >
      {address
        ? `Disconnect 0x...${address.substring(address.length - 5)}`
        : isConnecting || isReconnecting
        ? "Try reconnecting..."
        : "Connect Web3 Wallet"}
    </button>
  );
}
