import {motion, AnimatePresence} from "framer-motion"
import { useSnapshot } from "valtio"

import state from "../store"

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion"
import { CustomButton } from "../components"

const Home = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img
                        src="./threejs.png"
                        alt="logo"
                        className="w-8 h-8 object-contain"
                    />
                </motion.header>

                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className="sm:text-7xl text-3xl font-black text-black">
                        Design Your Signature<br className="xl:block hidden" /> 3D Tee!
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                        <p className="max-w-md font-normal text-gray-600 text-base">
                        Craft a unique 3D logo for your T-shirt collection. Express your individuality and brand with striking, <strong>three-dimensional designs</strong> {""} that turn heads.
                        </p>

                        <p className="max-w-md font-normal text-red-500 text-base"><strong>Each users have a maximum 2 requests allowed per IP.</strong></p>


                        <CustomButton
                            type="filled"
                            title="Customize It"
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home