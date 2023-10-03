import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#78D6C6",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: "./threejs.png"

})

export default state