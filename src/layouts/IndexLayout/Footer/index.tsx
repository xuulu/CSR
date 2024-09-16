import {Layout} from "antd"
import styles from '../index.layout.module.scss'

const Footer: React.FC = () => {
    return (
        <Layout.Footer className={styles.footer}>
            ©{new Date().getFullYear()} Created by 简心API
        </Layout.Footer>
    )
}

export default Footer