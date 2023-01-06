import { Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import SubMenu from 'antd/es/menu/SubMenu';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeLanguage } from '../../feature/language/languageSlice';
import { changeTheme } from '../../feature/theme/themeSlice';

const Navbar = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    return (
        <Menu mode='horizontal'>
            <MenuItem>
                <Link to="/">
                    {t("navbar.home-page")}
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/about">
                    {t("navbar.about-page")}
                </Link>
            </MenuItem>
            <SubMenu title={t("navbar.change-language")}>
                <MenuItem onClick={() => dispatch(changeLanguage(t("language.english.code")))}>
                    <span className={`flag-icon flag-icon-${t("language.english.code")} mx-2`}></span> {t("language.english.title")}
                </MenuItem>
                <MenuItem onClick={() => dispatch(changeLanguage(t("language.spanish.code")))}>
                    <span className={`flag-icon flag-icon-${t("language.spanish.code")} mx-2`}></span> {t("language.spanish.title")}
                </MenuItem>
                <MenuItem onClick={() => dispatch(changeLanguage(t("language.turkish.code")))}>
                    <span className={`flag-icon flag-icon-${t("language.turkish.code")} mx-2`}></span> {t("language.turkish.title")}
                </MenuItem>
            </SubMenu>
            <SubMenu title={t("navbar.change-theme")}>
                <MenuItem onClick={() => dispatch(changeTheme(t("theme.light.code")))}>
                    {t("theme.light.value")}
                </MenuItem>
                <MenuItem onClick={() => dispatch(changeTheme(t("theme.dark.code")))}>
                    {t("theme.dark.value")}
                </MenuItem>
            </SubMenu>
        </Menu>
    );
};

export default Navbar