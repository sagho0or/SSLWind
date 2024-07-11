'use client'
import React from "react";

import Footer from "../Footer";
import { DefaultLayerInterface } from "@/app/components/defaultLayer/defaultLayer.interface";

export default function DefaultLayer(props: DefaultLayerInterface) {

    return (
        <div>
            {props.children}
            <Footer />
        </div>


    )
}