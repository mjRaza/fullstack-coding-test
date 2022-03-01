import React, { useState } from "react";

type Props={
  childFunc: React.MutableRefObject<any>
}
const DynamicText:React.FC<Props> = ({childFunc}) => {

  React.useEffect(() => {
    childFunc.current = changeValue
  }, [childFunc])

  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return <h1>{value}</h1>;
};

export default DynamicText;
