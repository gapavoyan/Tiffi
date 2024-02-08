import React from "react";
interface Props {
  activeSubMenuId: number | string | undefined;
}

function Category({ activeSubMenuId }: Props) {
  return <div>{activeSubMenuId && <p>{activeSubMenuId}</p>}</div>;
}

export default Category;
