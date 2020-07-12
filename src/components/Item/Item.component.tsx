import React, { useState, ChangeEvent, memo, useCallback } from "react";
import { ItemStyled } from "./Item.styled";

interface ItemProps {
  id: number;
  name: string;
  description: string;
  onItemDelete: (id: number) => void;
  onItemUpdate: (id: number, editedDescription: string) => void;
}

export const Item = memo((props: ItemProps) => {
  const { onItemDelete, id, name, description, onItemUpdate } = props;

  const [editedDescription, updateEditedDescription] = useState("");

  const handeleDeleteItem = useCallback(() => onItemDelete(id), [
    onItemDelete,
    id,
  ]);

  const handleUpdateItem = useCallback(
    () => onItemUpdate(id, editedDescription),
    [onItemUpdate, id, editedDescription]
  );

  const handleUpdateDescription = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      updateEditedDescription(e.currentTarget.value),
    [updateEditedDescription]
  );

  return (
    <ItemStyled>
      <h1>{name}</h1>
      <h4>{description}</h4>
      <input
        type="text"
        value={editedDescription}
        onChange={handleUpdateDescription}
        placeholder={"Type new description"}
      />
      <button onClick={handleUpdateItem}>Update Description</button>
      <button onClick={handeleDeleteItem}>DeleteItem</button>
    </ItemStyled>
  );
});
