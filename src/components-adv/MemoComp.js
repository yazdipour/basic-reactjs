import React from "react";

function MemoComp() {
  return <div></div>;
}

//* PureComp in Function style
export default React.memo(MemoComp);
