import './style.scss';

const skills = ['JavaScript', 'TypeScript', 'HTML', 'S(CSS)', 'React', 'Redux', 'Git', 'Figma'];

const Skills = () => {

    return (
        <div id="skills-section">
            {
                skills.map((skill, index) => 
                    <div key={`skill-id-${index}`} className="skill-box">
                        <h4>{skill}</h4>
                    </div>
                    )
            }
        </div>
    )
}
export default Skills;