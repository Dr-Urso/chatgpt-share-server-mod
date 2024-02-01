import { TabItem, Table, TableHead, TableHeadCell } from "flowbite-react";
import { useState } from "react";
import { Carbody } from "./Carbody";

export function Car() {
    return(
        <>
        <div className="cartable">
            <Carbody></Carbody>
        </div>
        </>
    )
}