import GithubIcon from "../assets/contact-icons/github-icon.png"
import MailIcon from "../assets/contact-icons/mail-icon.png"

const Footer = () => {
    return (
        <div className="p-2 flex justify-center items-center gap-8">
            <div>
                <p className="text-[12px] text-gray-400 font-mono">&#169; 2023 Yohannes Tadiwos. All rights reserved.</p>
            </div>
            <div className="flex h-[20px] gap-4 pr-2">
                <img src={GithubIcon} alt="Github" onClick={() => window.open('https://github.com/johntad110', '_blank', 'noopener,noreferrer')}/>
                <img src={MailIcon} alt="Email" onClick={() => window.open('mailto://johntad110@gmail.com')}/>
            </div>
        </div>
    )
}

export default Footer