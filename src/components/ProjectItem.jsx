import PropTypes from 'prop-types';
import { useState } from "react"

const ProjectItem = ({ project }) => {
    const [showDetail, setShowDetail] = useState(false)

    return (
        <div
            className="mx-6  md:mx-14 w-[90%] px-4 py-8 border-l-2 border-black hover:shadow-2xl transition-all"
            onClick={() => setShowDetail(!showDetail)}
        >
            <h1
                className="text-2xl font-light underline underline-offset-4 mb-2 transition-all"
            >
                {project.title}
            </h1>
            <p className="font-extralight">{project.description}</p>
            <div className={`${!showDetail && "hidden"}`}>
                <p className="font-extralight pl-4 border-t-2 mt-2">{project.detailedDescription}</p>
                <div className="project-buttons flex gap-4 my-2">
                    {project.readMoreLink && <button onClick={() => window.open(project.readMoreLink, '_blank', 'noopener,noreferrer')}>Read More</button>}
                    {project.liveDemoLink && <button onClick={() => window.open(project.liveDemoLink, '_blank', 'noopener,noreferrer')}>Take a Look</button>}
                    {project.githubLink && <button onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}>⭐ Github</button>}
                </div>
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      detailedDescription: PropTypes.string.isRequired,
      readMoreLink: PropTypes.string,
      liveDemoLink: PropTypes.string,
      githubLink: PropTypes.string,
    }).isRequired,
  };

export default ProjectItem