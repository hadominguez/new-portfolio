import { useState } from "react";
import { Link } from "react-router-dom";
import { Languages } from '../../utils/Languages';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { i18n } = useTranslation()
    const { t } = useTranslation()

    const onChangeLang = (e) => {
        const lang_code = e.target.value
        i18n.changeLanguage(lang_code)
    }

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav className="flex items-center justify-between p-4 text-white grid-nav">
                <div className="menu-pc flex items-center space-x-4">
                    <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/">{t('menu.about')}</Link>
                    <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/education">{t('menu.education')}</Link>
                    <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/experience">{t('menu.experience')}</Link>
                    <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/skills">{t('menu.skills')}</Link>
                    <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/projects">{t('menu.projects')}</Link>
                    <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/contact">{t('menu.contact')}</Link>
                </div>

                <div className="menu-pc flex items-center space-x-4">
                    <img src="logo.png" alt="Logo" className="mx-auto" />
                </div>
                <div className="menu-pc flex items-center space-x-4">
                    <select defaultValue={i18n.language} onChange={onChangeLang} id="language-select" name="language-select" className="mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm">
                        {
                            Languages.map(({ code, label }) => (
                                <option
                                    key={code}
                                    value={code}
                                >{label}</option>
                            ))
                        }
                    </select>
                </div>


                <div className="menu-responsive md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col items-center space-y-4 mt-4">
                        <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/"  onClick={toggleMenu}>{t('menu.about')}</Link>
                        <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/education"  onClick={toggleMenu}>{t('menu.education')}</Link>
                        <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/experience"  onClick={toggleMenu}>{t('menu.experience')}</Link>
                        <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/skills"  onClick={toggleMenu}>{t('menu.skills')}</Link>
                        <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/projects"  onClick={toggleMenu}>{t('menu.projects')}</Link>
                        <Link className="text-lg mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm" to="/contact"  onClick={toggleMenu}>{t('menu.contact')}</Link>
                        <select defaultValue={i18n.language} onChange={onChangeLang} id="language-select" name="language-select" className="mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 sm:text-sm">
                            {
                                Languages.map(({ code, label }) => (
                                    <option
                                        key={code}
                                        value={code}
                                    >{label}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar