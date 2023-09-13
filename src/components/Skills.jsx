import { motion } from "framer-motion"

const skillss = [
    {
        title: "Threejs / React Three Fiber",
        level: 30,
    },
    {
        title: "React / React Native",
        level: 60,
    },
    {
        title: "HTML",
        level: 90,
    },
    {
        title: "CSS",
        level: 90,
    },
    {
        title: "Noje.js",
        level: 20,
    },
    {
        title: "Django",
        level: 90,
    },
]

const Skills = () => {
    return (
        <motion.section
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.5,
                }
            }}
            className="bg-gray-200 md:p-28 p-14"
        >
            <motion.div whileInView={"visible"}>
                <h2 className="text-5xl font-extralight nav-link hover:cursor-vertical-text">SKILLS</h2>
                <div className="mt-8 space-y-4">
                    {skillss.map((skill, idx) => (
                        <div className="w-64" key={idx}>
                            <motion.h3
                                initial={{
                                    opacity: 0,
                                    x: 50 * (-1) ** idx,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 1 + idx * 0.2,
                                        }
                                    }
                                }}
                                className="text-xl font-thin text-gray-700"
                            >{skill.title}</motion.h3>
                            <div className="h-1 w-full bg-white rounded-full mt-2">
                                <motion.div
                                    initial={{
                                        scaleX: 0,
                                        originX: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + idx * 0.2
                                            }
                                        }
                                    }}
                                    className="h-full bg-black rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Skills