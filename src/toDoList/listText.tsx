import React from "react";

type ListProps = {
  items: string []
  onClick: (value: string) => void
}
const ListText = ({items, onClick}: ListProps) => {
  return (
    <div>
      <h1>aaa</h1>
    </div>
  )
}

export default ListText