import { useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import ProjectItem from "../components/ProjectItem";

const projects = [
  {
    title: 'Love Calculator',
    description: 'You remember that game we played when we were children? The one where we assign numbers to the alphbet letters in our name and calculate the love-change of two people? Well, try it now, ut in this website.',
    detailedDescription: 'It works by filling giving it two names. It sees how many letters are repeated in the sentense "Your Name" + loves + "His Name". Takes that number and adds the first place to the last until you are left with two digit number. Then that is your love score. Try it bellow.',
    githubLink: 'https://github.com/johntad110/love-calculator',
    liveDemoLink: 'https://johntad110.github.io/love-calculator/',
    readMoreLink: '',
  },
  {
    title: 'Custom X',
    description: "Custom X is an innovative 3D t-shirt customization tool that lets you bring your designs to life.",
    detailedDescription: "With Custom X, you can unleash your creativity and design personalized t-shirts with stunning 3D effects. Choose from a variety of colors, patterns, and textures to create a truly unique t-shirt that stands out. Whether you're a fashion enthusiast, an artist, or want to showcase your brand, Custom X provides an immersive and engaging experience for designing your dream t-shirts.",
    githubLink: 'https://github.com/johntad110/customx',
    liveDemoLink: 'https://64ec2d5d7acdd65b907b9a6b--shimmering-frangipane-5d22b6.netlify.app/',
    readMoreLink: 'https://johntad110.github.io/lhttps://64ec2d5d7acdd65b907b9a6b--shimmering-frangipane-5d22b6.netlify.app/e-calculator/blog',
  },
  {
    title: 'File Alchemy',
    description: 'Effortlessly Transform Files with Elegance and Intrigue. Simplify, Organize, and Unleash the Magic of Digital Metamorphosis for Seamless File Management.',
    detailedDescription: "With File Alchemy, you can simplify and organize your files, unleashing the magic of digital metamorphosis for seamless file management. Whether you need to convert file formats, merge or split documents, extract data, or perform other file transformations, File Alchemy provides a user-friendly interface and a comprehensive set of features to streamline your workflow. Say goodbye to tedious file management tasks and experience the enchantment of File Alchemy's transformative capabilities.",
    githubLink: 'https://github.com/johntad110/file-alchemy',
    liveDemoLink: '',
    readMoreLink: '',
  },
  {
    title: 'DeliveryXpress',
    description: 'DeliveryXpress: A Comprehensive Database for Efficient Delivery Service to optimize and streamline delivery services.',
    detailedDescription: "DeliveryXpress is a complete solution for managing and improving delivery services. There is a repo that includes a PDF document providing insights into the database project, an ER (Entity-Relationship) diagram illustrating the database structure, relational tables that define the data organization, and SQL code for implementing the database. With DeliveryXpress, businesses in the delivery industry can efficiently store and manage critical information such as customer details, orders, inventory, drivers, and routes. By leveraging this comprehensive database, organizations can enhance operational efficiency, track deliveries in real-time, optimize resource allocation, and ensure seamless coordination between different aspects of their delivery service. Experience the power of DeliveryXpress to transform your delivery operations and elevate customer satisfaction.",
    githubLink: 'https://github.com/yohannes812/DeliveryXpress',
    liveDemoLink: '',
    readMoreLink: '',
  },
  {
    title: 'Amharic News NLP',
    description: 'This is a natural language processing (NLP) project focused on analyzing Amharic news articles.',
    detailedDescription: "Amharic-News-NLP is a comprehensive NLP project specifically designed for Amharic news analysis. Leveraging advanced NLP techniques, this project enables the extraction of valuable insights from a vast collection of Amharic news data. With features such as sentiment analysis, classification, summarization, and trend identification, Amharic-News-NLP offers a deeper understanding of Amharic news articles. Determine the sentiment expressed, categorize articles into various topics, generate concise summaries, and identify trending themes for a comprehensive analysis of the Amharic news landscape. The project encourages contributions and provides a user-friendly installation process, allowing researchers and developers to explore Amharic news data with ease.",
    githubLink: 'https://github.com/johntad110/Amharic-News-NLP',
    liveDemoLink: 'https://johntad110.github.io/',
    readMoreLink: 'https://github.com/johntad110/Amharic-News-NLP/wiki',
  },
  {
    title: 'Gazette',
    description: 'A digital Gazeta.',
    detailedDescription: "Gazette is a groundbreaking Flutter app designed to bridge the gap between traditional journalism and the digital era. With Gazette, users can seamlessly access a vast collection of old and new gazettes from around the world. Whether you're a history enthusiast, a researcher, or simply curious about past publications, Gazette brings the rich heritage of gazettes to your fingertips. The app offers a user-friendly interface, advanced search capabilities, and intuitive navigation, making it effortless to explore and discover gazettes of interest. Experience the power of Gazette to unlock a treasure trove of information and immerse yourself in the captivating world of journalism, all from the convenience of your mobile device.",
    githubLink: 'https://github.com/johntad110/Gazette',
    liveDemoLink: 'https://johntad110.github.io/',
    readMoreLink: 'https://github.com/johntad110/',
  },
]

const Lab = () => {
  const [showContactEmail, setShowContactEmail] = useState(true)
  const [showCopiedMsg, setShowCopiedMsg] = useState(false)

  const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopiedMsg(true);
      setTimeout(() => {
        setShowCopiedMsg(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  return (
    <div>
      <Header />
      <div className="pt-20">
        <div className="px-5 pt-10 pb-5 bg-gray-100 flex flex-col items-center transition-all">
          <h1 className="text-5xl font-extralight mb-4">
            My Lab
          </h1>
          <p className="text-center font-light text-lg">
            If any of the projects here catches your eye, don&apos;t hesitate to <span onClick={() => setShowContactEmail(!showContactEmail)} className="hover:underline hover:underline-offset-4 hover:cursor-pointer hover:text-purple-700 transition-all bg-gray-200 px-1 hover:bg-white rounded-md">reach out</span> to me. I would love to <span onClick={() => setShowContactEmail(!showContactEmail)} className="hover:underline hover:underline-offset-4 hover:cursor-pointer hover:text-purple-700 transition-all bg-gray-200 px-1 hover:bg-white rounded-md">hear</span> from you.
          </p>
          {
            showContactEmail && (
              <>
                <div className="contact-card flex items-center m-4 p -2 rounded-lg bg-gray-200 relative">
                  <h1 className="my-2 px-2">
                    Email Me: <span
                      className="bg-gray-50 px-2 py-1 rounded-md hover:text-purple-700 hover:cursor-pointer hover:bg-white" onClick={() => copyContent("johntad110@gmail.com")}
                    >
                      johntad110@gmail.com
                    </span>
                  </h1>
                </div>
                <div className={`aboslute top-0 right-0 translate-x-24 -translate-y-20 bg-gray-300 text-[12px] font-semibold px-2 rounded-md ${!showCopiedMsg && "hidden"
                  }`}>
                  Copied!
                </div>
              </>
            )
          }
        </div>
        <div className="projects flex flex-col justify-center my-10 sm:pl-0 sm:items-center">
          <h1 className="pl-20 text-5xl font-extralight mb-8 underline underline-offset-8">Projects</h1>
          {projects.map((project, idx) =>
            <ProjectItem key={idx} project={project}/>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Lab