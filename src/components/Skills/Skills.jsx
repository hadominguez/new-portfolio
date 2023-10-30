import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation()

  const programming_languages = t('skills.programming_languages', { returnObjects: true });
  const libraries_frameworks = t('skills.libraries_frameworks', { returnObjects: true });
  const databases = t('skills.databases', { returnObjects: true });


  return (
    <div>
      <div className="p-4">
        <div className="p-8 bg-gray-800 bg-opacity-30 rounded-lg">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('menu.skills')}</span>
          </h1>
          <h3 className="text-xl text-gray-400 mb-4">{t('skills_description')}</h3>
          <div className="p-4 bg-gray-800 bg-opacity-30 rounded-lg">
            <h1 className="p-4 text-3xl font-extrabold text-white md:text-4xl lg:text-4xl">{t('page_skill.programming_languages')}</h1>
            <div className="grid-skills rounded-lg">
              {programming_languages.map((skill, key) => (
                <div className="cell text-center bg-gray-400 bg-opacity-30 rounded-lg" key={key} style={{ "max-height": "60px" }}>
                  <img src={skill.icon} height={"auto"} style={{ display: "inline-block", "max-height": "50%" }}></img>
                  <h3 className="text-x1 text-gray-400 mb-4">{skill.name} ({skill.level}%)</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-gray-800 bg-opacity-30 rounded-lg">
            <h1 className="p-4 text-3xl font-extrabold text-white md:text-4xl lg:text-4xl">{t('page_skill.libraries_frameworks')}</h1>
            <div className="grid-skills rounded-lg">
              {libraries_frameworks.map((skill, key) => (
                <div className="cell text-center bg-gray-400 bg-opacity-30 rounded-lg" key={key} style={{ "max-height": "60px" }}>
                  <img src={skill.icon} height={"auto"} style={{ display: "inline-block", "max-height": "50%" }}></img>
                  <h3 className="text-xl text-gray-400 mb-4">{skill.name} ({skill.level}%)</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-gray-800 bg-opacity-30 rounded-lg">
            <h1 className="p-4 text-3xl font-extrabold text-white md:text-4xl lg:text-4xl">{t('page_skill.databases')}</h1>
            <div className="grid-skills rounded-lg ">
              {databases.map((skill, key) => (
                <div className="cell text-center bg-gray-400 bg-opacity-30 rounded-lg" key={key} style={{ "max-height": "60px" }}>
                  <img src={skill.icon} height={"auto"} style={{ display: "inline-block", "max-height": "50%" }}></img>
                  <h3 className="text-x1 text-gray-400 mb-4">{skill.name} ({skill.level}%)</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;