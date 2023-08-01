import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox } from "@mui/material";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);

    return (
        <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id="{item.id}"
                    name="{item.id}"
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    );
};


export default Todo;