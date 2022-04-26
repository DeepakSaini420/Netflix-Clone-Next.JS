import { Magic } from "magic-sdk";

const create_magic = () =>{
    return (
        typeof window!=="undefined" && 
        new Magic("pk_live_F2BFB0110D7FACEE")
    );
} 

export const magic = create_magic();