// rpce
// PureComponent: Is a class base component that impl shouldComponentUpdate with shallow props and state comparison
// If its ParentComponent rerenders, PureComponent will not
// rerender if ShallowComparison shows same results. (RegularComponent always rerenders)
// *** Performance Boost compare to regular comp.
import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    return <div>PureComp</div>;
  }
}

export default PureComp;
