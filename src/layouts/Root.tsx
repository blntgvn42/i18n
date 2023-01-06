import { ConfigProvider, Layout, theme } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import TextElement from '../components/typography/TextElement'
import { RootState } from '../store'

function Root() {
    const { selectedTheme } = useSelector((state: RootState) => state.theme)
    const { defaultAlgorithm, darkAlgorithm } = theme
    const getTheme = () => {
        switch (selectedTheme) {
            case 'light': return defaultAlgorithm;
            case 'dark': return darkAlgorithm;
            default: return defaultAlgorithm;
        }
    }
    return (
        <ConfigProvider theme={{ algorithm: getTheme() }}>
            <Layout style={{ minHeight: '100vh' }}>
                <Header>
                    <Navbar />
                </Header>
                <Content>
                    <Outlet />
                </Content>
                <Footer>
                    <Navbar />
                </Footer>
            </Layout>
        </ConfigProvider>
    )
}

export default Root