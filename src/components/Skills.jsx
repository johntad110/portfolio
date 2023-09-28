import { motion } from "framer-motion"

const skillss = [
    {
        title: "Responsive Web Design",
        level: 85,
    },
    {
        title: "Back-end Development",
        level: 80,
    },

    {
        title: "Programming Languages",
        level: 90,
    },
    {
        title: "Full-Stack Development",
        level: 75,
    },
    {
        title: "Mobile App Development",
        level: "70",
    },
    {
        title: "VCS / Git",
        level: 95,
    },
    {
        title: "UI / UX Design",
        level: 80,
    },
]

const skillss2 = [
    {
        title: "Testing And Debugging",
        level: 85,
    },
    {
        title: "Agile / Scrum Methodology",
        level: 80,
    },
    {
        title: "DevOps",
        level: 85,
    },
    {
        title: "Data Analyst",
        level: 65,
    },
    {
        title: "Project Managment",
        level: 90,
    },
    {
        title: "Communication and Collaboration",
        level: 95,
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
                        <div className="w-64 group" key={idx}>
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
                                className="text-lg font-thin text-gray-700"
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
                                    className="h-full bg-black group-hover:bg-purple-700 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 lg:mr-16 space-y-4 flex flex-col items-end">
                    {skillss2.map((skill, idx) => (
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
                                className="text-lg font-thin text-gray-700 hover:text-red-600 cursor-default transition-all"
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
                                    className="h-full bg-red-600 rounded-full"
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