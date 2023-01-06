import { Typography } from 'antd'
import { BlockProps } from 'antd/es/typography/Base';

const { Text } = Typography;

function TextElement(props: BlockProps) {
    return (
        <Text {...props}>{props.children}</Text>
    )
}

export default TextElement