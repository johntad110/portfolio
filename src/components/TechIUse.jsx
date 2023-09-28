import Apache from '../assets/techiuse/apache.svg'
import Bootstrap from '../assets/techiuse/bootstrap.svg'
import Dart from '../assets/techiuse/dart.svg';
import Django from '../assets/techiuse/django.svg';
import Docker from '../assets/techiuse/docker.svg';
import Figma from '../assets/techiuse/figma.svg';
import Firebase from '../assets/techiuse/firebase.svg';
import Flutter from '../assets/techiuse/flutter.svg';
import Framer from '../assets/techiuse/framer.svg';
import Git from '../assets/techiuse/git.svg';
import GSAP from '../assets/techiuse/gsap.svg';
import HF from '../assets/techiuse/hf.svg';
import NextJs from '../assets/techiuse/nextjs.svg';
import Ngnix from '../assets/techiuse/ngnix.svg';
import Pytorch from '../assets/techiuse/pytorch.svg';
import Rapid from '../assets/techiuse/rapid.svg';
import ReactLogo from '../assets/techiuse/react.svg';
import Redux from '../assets/techiuse/redux.svg';
import Spline from '../assets/techiuse/spline.svg'
import Tailwind from '../assets/techiuse/tailwind.svg';
import TensorFlow from '../assets/techiuse/tensorflow.svg';
import ThreeJs from '../assets/techiuse/threejs.svg';
import Vite from '../assets/techiuse/vite.svg';
import Vue from '../assets/techiuse/vue.svg';

const TechIUse = () => {
    const techIUse = [
        Apache,
        Bootstrap,
        Dart,
        Django,
        Docker,
        Figma,
        Firebase,
        Flutter,
        Framer,
        Git,
        GSAP,
        HF,
        NextJs,
        Ngnix,
        Pytorch,
        Rapid,
        ReactLogo,
        Redux,
        Spline,
        Tailwind,
        TensorFlow,
        ThreeJs,
        Vite,
        Vue,
    ];

    return (
        <div className="flex flex-col items-center transition-all hover:cursor-none px-0">
            <h1 className="p-4 text-5xl font-extralight nav-link w-full text-center">Tech I Use</h1>
            <div className="wrapper py-4 w-full flex flex-wrap justify-center relative overflow-hidden">
                {techIUse.map((e, idx) => (
                    <img
                        key={idx}
                        src={e}
                        alt="tech"
                        className="image w-16 mx-8 my-2 hover:scale-[1.055] transition-all cursor-default"
                    />
                ))}
            </div>
        </div>
    );
};

export default TechIUse;