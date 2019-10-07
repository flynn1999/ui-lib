/**
 * @author aramsey
 *
 * A regular MUI Checkbox but using the theme's primary color
 */
import React from "react";
import { Checkbox } from "@material-ui/core";

function DECheckbox(props) {
    const { children } = props;

    return (
        <Checkbox color="primary" {...props}>
            {children}
        </Checkbox>
    );
}

export default DECheckbox;
