import React from "react";
import DataProvider from "./DataProvider";

const DataState = (props) => {

    const drawerWidth = 240;


    return (
        <DataProvider.Provider value={{ }}>
            {props.children}
        </DataProvider.Provider>
    )
}
export default DataState