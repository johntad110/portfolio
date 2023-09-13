import Header from '../components/Header'
import { AnimatePresence, motion } from 'framer-motion'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useRef, useState } from 'react'

const Home = () => {
    const welcome = ['W', 'E', 'L', 'C', 'O', 'M', 'E']

    const worksRef = useRef(null)
    const [scrollToWroks, setScrollToWorks] = useState(false)

    const handleWorksClicked = () => {
        setScrollToWorks(true)
    }

    const handleScrollComplete = () => {
        setScrollToWorks(false)
    }

    return (
        <>
            <div className='w-full h-screen'>
                <Header
                    onWorksClicked={handleWorksClicked}
                />
                <AnimatePresence>
                    <motion.div
                        key="box"
                        initial={{
                            y: -50,
                            scaleY: 0.5,
                        }}
                        whileInView={{
                            y: 0,
                            scaleY: 1,
                            transition: {
                                duration: 3,
                                delay: .3,
                                type: 'spring',
                                damping: 3,
                            },
                        }}
                        className='relative inset-y-60 md:inset-y-44 text-[13vw] font-medium flex justify-center items-center hover:cursor-default'
                    >
                        {welcome.map((e, idx) =>
                            <div key={idx} className='hover:scale-y-[1.5] transition-all'>{e}</div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
            <Intro />
            <Skills />
            <Works
                scrollToWroks={scrollToWroks}
                worksRef={worksRef}
                handleScrollComplete={handleScrollComplete}
            />
            <Contact />
            <Footer />
        </>
    )
}

export default Home