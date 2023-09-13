import { motion } from "framer-motion"
import factmania from "../assets/factmania.png"
import TemehrteKalHomePage from "../assets/temhrtekal/homepage.png"
import AHRG from "../assets/ahrg.png"
import { useEffect } from "react"
import PropTypes from 'prop-types';

const openURL = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
}

const Factmania = () => {
    const factManiaTech = ['Django', 'Bootstrap', 'MySQL', 'HTML', 'CSS']

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                }
            }}
            className="w-full bg-black text-white flex flex-col lg:flex-row justify-center items-center md:justify-between md:items-start py-36 md:px-40">
            <div className="m-12 max-w-2xl">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: -100,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: .5,
                            ease: 'easeOut'
                        }
                    }}
                    className="font-bold text-5xl md:text-8xl items-start mb-8"
                >
                    FACTMANIA
                </motion.h1>
                <motion.p
                    initial={{
                        x: -300,
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            delay: .5,
                            type: "easeOut"
                        }
                    }}
                    className="text-sm font-extralight"
                >
                    A captiavting Django web app that offers a delightful exploration of fascinating facts. Perfeclty suited for knowledge enthusiasts, Factmania provides a seamless user experience with its engaging featuers. The website boasts robust authentication functionality, ensuring secure access to personalized profiles. Users can descover intriguing snippets of information daily. Factmania&apos;s sleek and mobile-resoibsive design follows modern design principles, offering an intuitive and visually appealing interface. The interactive features incorporated into the web app enhance user engagment, making the discovery of facts an immersive and enriching experience. Powered by Django and utilizing a MySQL backend, Factmania combines functionality and elegance t deliver a seamless and efficient platform for users to unravel the wonders of the world through facts
                </motion.p>
                <div className="flex my-8 items-center justify-center md:justify-between">
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                delay: 1,
                            }
                        }}
                        className="flex flex-col p-4 bg-slate-500"
                    >
                        <h3 className="my-4 font-extralight text-xl underline underline-offset-4">TECH USED</h3>
                        <ul className="flex flex-col gap-4">
                            {factManiaTech.map((e, idx) =>
                                <motion.li
                                    initial={{
                                        x: (-1) ** idx * 50,
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 2,
                                        }
                                    }}
                                    key={idx}
                                >
                                    {e}
                                </motion.li>
                            )}
                        </ul>
                    </motion.div>
                </div>
            </div>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 200,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: .5,
                        ease: 'easeOut'
                    }
                }}
                className="flex flex-col items-center md:top-16 relative "
            >
                <img className="w-10/12 md:w-[6000px] rounded-lg shadow-2xl shadow-pink-600 hover:shadow-white hover:scale-[1.025] transition-all" src={factmania} alt="factmania" />
                <div className="mt-12 md:mt-60 flex gap-4 md:gap-8">
                    <button
                        className="transition-all p-4 bg-white border-2 text-black hover:bg-black hover:text-white">LIVE DEMO</button>
                    <button
                        className="p-4 transition-all bg-black border-2 text-white hover:bg-white hover:text-black"
                    >⭐ GITHUB</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

const TemherteKal = () => {
    const temhrteKalTech = ['Flutter', 'Dart', 'Python', 'FFmpeg']

    return (
        <motion.div
            initial={{
                y: 50,
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: .5,
                }
            }}
            className="z-[2] temeherte-kal text-white bg-[#282828] p-12 flex flex-col lg:flex-row items-center md:items-center lg:items-start gap-12 w-full"
        >
            <motion.div
                initial={{
                    rotateY: 25,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    rotateY: 0,
                    transition: {
                        duration: .5,
                        delay: .5,
                        ease: 'easeOut'
                    }
                }}
                className="max-w-[300px] md:min-w-[350px] bg-transparent rounded-[30px] mt-24 shadow-2xl shadow-pink-600 hover:scale-[1.025] hover:shadow-white transition-all"
            >
                <img
                    src={TemehrteKalHomePage} alt=""
                />
            </motion.div>
            <div className="max-w-[900px]">
                <motion.h1
                    initial={{
                        opacity: 0,
                        scale: 1.5,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 1,
                            delay: .5,
                        }
                    }}
                >
                    Case Study: Temeherte Kal A Flutter App
                </motion.h1>

                <h2>Introduction</h2>
                <p className="paragraph">Temeherte Kal is a Flutter app developed to meet the unique requirements of my client, who sought a comprehensive app for accessing a collection of more than 600 audio files classified and structured in a specific manner. The primary challenge was to reduce the app size below 100MB while preserving the audio quality and adhering to the client&apos;s strict guidelines.</p>

                <h2>Challenges/Objectives</h2>
                <p>
                    <ol>
                        <li>
                            1. App Size Reduction: The initial prototype size of 700MB, primarily due to uncompressed audio files in .wav format, needed to be significantly reduced to meet the client&apos;s requirement of less than 100MB.
                        </li>
                        <li>
                            2. Automated Audio Conversion: Converting 600 audio files manually is time-consuming. The task involved developing a Python FFmpeg wrapper to automate the conversion process from .wav to .ogg format, saving the client valuable time.
                        </li>
                        <li>
                            3. Custom Compression Algorithm: Further reducing the app size to meet the target size of 100MB required compressing the audio files without compromising quality. Developing a custom compression algorithm was necessary to automate this process efficiently.
                        </li>
                    </ol>
                </p>

                <h2>Approach/Process</h2>
                <p>
                    <ol>
                        <li>
                            1. Understanding the Client&apos;s Requirements: Collaborating closely with my client, I gained a comprehensive understanding of their vision for the app, including the specific classification and structure of the audio files.
                        </li>
                        <li>
                            2. Automated Audio Conversion: Writing a Python FFmpeg wrapper allowed us to convert the 600 audio files from .wav to .ogg format swiftly and accurately, eliminating the need for manual conversion.
                        </li>
                        <li>
                            3. Custom Compression Algorithm: To compress the audio files effectively, I developed a custom algorithm that preserved audio quality while significantly reducing file sizes. This automation saved both time and effort.
                        </li>
                    </ol>
                </p>

                <h2>Solution</h2>
                <p>
                    <ol>
                        <li>
                            1. App Size Reduction: By automating the audio conversion process and utilizing the custom compression algorithm, I was able to successfully reduced the app size from 700MB to 90MB, surpassing the client&apos;s initial target of 100MB.
                        </li>
                        <li>
                            2. Preservation of Audio Quality: Despite the compression, the audio quality remained intact, ensuring a seamless user experience.
                        </li>
                        <li>
                            3. Adherence to Client&apos;s Guidelines: Every aspect of the app, including the audio names, letters, and images, adhered precisely to the client&apos;s specifications. This included maintaining the correct usage of Ge&apos;ez letters and ensuring pixel-perfect, uncropped images.
                        </li>
                    </ol>
                </p>

                <h2>Results/Outcomes</h2>
                <p>
                    <ol>
                        <li>
                            1. Achievement of Target Size: The final app size of 90MB met my client&apos;s requirement, allowing for easy installation and download for end-users.
                        </li>
                        <li>
                            2. Accurate Representation: The app accurately reflected my client&apos;s vision, ensuring that every detail, including audio names, Ge&apos;ez letter usage, and image quality, was meticulously implemented.
                        </li>
                        <li>
                            3. Client Satisfaction: My client expressed immense satisfaction and appreciation for the effort, attention to detail, and successful realization of their envisioned app. The project&apos;s three-year duration and multiple iterations resulted in a highly refined and tailored solution.
                        </li>
                    </ol></p>

                <h2>Lessons Learned</h2>
                <p>
                    <ol>
                        <li>
                            1. Effective Communication: Close collaboration and clear communication with the client were instrumental in meeting their unique requirements and ensuring their satisfaction.
                        </li>
                        <li>
                            2. Automation for Efficiency: Developing automated processes for audio conversion and compression significantly reduced manual labor and saved time for both the client and me.
                        </li>
                        <li>
                            3. Attention to Detail: The project emphasized the importance of meticulous attention to detail, especially in accurately representing language-specific nuances and adhering to the client&apos;s guidelines.
                        </li>
                    </ol>
                </p>

                <h2>Conclusion</h2>
                <p className="paragraph">
                    The Temeherte Kal Flutter app successfully addressed the complex challenges posed by client&apos;s requirements. Through innovative solutions, including automated audio conversion, custom compression algorithms, and meticulous attention to detail, we achieved a final app size of 90MB while preserving audio quality and accurately reflecting the client&apos;s vision. The project&apos;s success and my client&apos;s satisfaction are testaments to the expertise, unique approach, and dedication to delivering exceptional results that went into the app.</p>
            </div>
            <div>
                <div className="flex my-24 items-center justify-between">
                    <div className="flex flex-col p-4 bg-slate-500">
                        <h3 className="my-4 font-extralight text-xl underline underline-offset-4">TECH USED</h3>
                        <ul className="flex flex-col gap-4 list">
                            {temhrteKalTech.map((e, idx) =>
                                <motion.li
                                    initial={{
                                        x: (-1) ** idx * 50,
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: .5,
                                        }
                                    }}
                                    key={idx}
                                >
                                    {e}
                                </motion.li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const AddisHorizon = () => {
    const addisHorizonTech = ['Vuejs', 'Firebase', 'HTML', 'CSS']

    return (
        <motion.div
            initial={{
                y: 50,
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: .5,
                }
            }}
            className="ahrg bg-[#f5deb3] w-full px-10 py-32 "
        >
            <div className="md:flex">
                <div className="flex flex-col items-center">
                    <motion.h1
                        className="text-5xl font-semibold">Addis Horizon Realty Group
                    </motion.h1>
                    <motion.p
                        initial={{
                            x: -100,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                delay: 1,
                            }
                        }}
                        className="mb-8 md:max-w-[70%]">The Addis Horizon Website is a Vue.js-based project developed for the Addis Horizon Realty Group (AHRG). It features a modern and user-friendly web interface built using the efficient Vue.js framework. The website incorporates responsive design principles to ensure optimal user experience across various devices and screen sizes. It utilizes reusable components and follows a modular architecture, making it easy to maintain and extend. The project integrates external libraries, APIs, and services to enhance functionality and data integration. State management is implemented using Vuex for efficient data flow and synchronization. The project adheres to best practices for code organization, and version control using Git, The Addis Horizon Website is a testment to the developer&apos;s expertise in front-end web development and their commitment to delivering a high-quality web presence for the Addis Horizon Realty Group.</motion.p>
                </div>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                            delay: 1,
                        }
                    }}
                    className="md:min-w-[40%] h-fit rounded-2xl overflow-hidden shadow-2xl shadow-[#009d61] hover:shadow-pink-600 hover:scale-[1.025] transition-all"
                >
                    <img src={AHRG} alt="AHRG" />
                </motion.div>
            </div>

            <div
                className="flex flex-col sm:flex-row justify-around items-center mt-10">
                <div className="p-4 bg-slate-500">
                    <h3 className="my-4 font-extralight text-xl underline underline-offset-4 text-white">TECH USED</h3>
                    <ul className="flex flex-col gap-4 text-white">
                        {addisHorizonTech.map((e, idx) =>
                            <motion.li
                                initial={{
                                    x: (-1) ** idx * 50,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: .5,
                                        delay: 0,
                                    }
                                }}
                                key={idx}
                            >
                                {e}
                            </motion.li>
                        )}
                    </ul>
                </div>
                <div className="flex gap-8 pt-12">
                    <button onClick={() => openURL('https://azale-deploys.web.app')}>LIVE DEMO</button>
                    <button onClick={() => openURL('https://github.com/johntad110/AddisHorizonWeb')}>⭐ GITHUB</button>
                </div>
            </div>
        </motion.div>
    )
}

const Works = ({ scrollToWroks, worksRef, handleScrollComplete }) => {
    useEffect(() => {
        if (scrollToWroks) {
            worksRef.current.scrollIntoView({ behavior: 'smooth' });
            handleScrollComplete();
        }
    }, [scrollToWroks, worksRef, handleScrollComplete]);

    return (
        <div className="z-20 flex flex-col justify-center items-center overflow-hidden">
            <div
                ref={worksRef}
                className=" bg-gray-50 w-full text-center text-5xl underline underline-offset-4 py-12">
                WORKS
            </div>

            <Factmania />
            <TemherteKal />
            <AddisHorizon />
        </div>
    )
}

Works.propTypes = {
    scrollToWroks: PropTypes.bool.isRequired,
    worksRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    handleScrollComplete: PropTypes.func.isRequired,
  };
  

export default Works