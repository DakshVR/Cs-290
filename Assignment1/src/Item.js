import React from "react";
import Counter from "./Icon";
// import Icon from "./Icon";


function Item({ item }) {
    return (
        < div >
            <td>{item.name}  </td>
            <td> {item.price} </td>
            <td><Counter /></td>
            
        </div >
    );
}

export default Item;