import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation()
    const projects = t('projects', { returnObjects: true });

    return (
        <div className='grid-body'>
            <div className="p-4">
                <div className="p-8 bg-gray-800 bg-opacity-30 rounded-lg">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('menu.projects')}</span>
                    </h1>
                    <h3 className="text-xl text-gray-400 mb-4">{t('projects_description')}</h3>
                    <div className="grid-projects rounded-lg">
                        {projects.map((project, key) => (
                            <div className="p-4 max-w-xs rounded overflow-hidden bg-gray-600 bg-opacity-30" key={key}>
                                <div className="owl-carousel owl-theme" >
                                    {project.images.map((image, key) => (
                                        <div className="item" key={key}><img src={image}></img></div>
                                    ))}
                                </div>
                                <div className="bg-gray-300 bg-opacity-30 rounded-lg">
                                    <div className="px-4 py-2">
                                        <div className="font-bold text-xl mb-2">{project.name}</div>
                                    </div>
                                    <div className="">
                                        {project.links.map((link, key) => (
                                            <a key={key} href={link}><img src="/icons/github.svg" width={"15%"} style={{display: "inline-block"}}/></a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="p-8 bg-gray-800 bg-opacity-30 rounded-lg">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('menu.live_projects')}</span>
                    </h1>
                    <h3 className="text-xl text-gray-400 mb-4">{t('live_projects_description')}</h3>
                </div>
            </div>
        </div>
    );
}

export default Projects;