import { useState } from "react";

const Settings = () => {
  const [val, setValue] = useState(12);

  const handleClick = () => {
    setValue((prev) => (prev += 1));
  };

  return (
    <>
      <button style={{ width: "5rem" }} onClick={handleClick}>
        click me
      </button>
      <div>{val}</div>
    </>
  );
};

export default Settings;
