import React, { memo } from "react";
import { connect } from "react-redux";
import { State } from "../../model/model";
import { SingleItem } from "../../model/model";
import { Item } from "../../components/Item/Item.component";
import { ItemsStyled } from "./Items.styled";
import { deleteItem, updateItem } from "../../actions";

interface ItemsProps {
  items: SingleItem[];
  deleteItem: (itemId: number) => void;
  updateItem: (id: number, editedDescription: string) => void;
}

const Items = memo((props: ItemsProps) => (
  <ItemsStyled>
    {props.items.map((item) => (
      <Item
        onItemUpdate={props.updateItem}
        onItemDelete={props.deleteItem}
        key={item.id}
        {...item}
      />
    ))}
  </ItemsStyled>
));

const mapStateToProps = (state: State) => ({
  items: state.items,
});

const mapDispatchToProps = {
  deleteItem: deleteItem,
  updateItem: updateItem,
};

export const ItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
