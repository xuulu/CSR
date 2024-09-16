import React from 'react';
import {Typography, Watermark} from 'antd';

const Disclaimer: React.FC = React.memo(() => {
    return (
        <Watermark content={['简心API', 'api.qvqa.cn']}>
            <Typography>
                <Typography.Title level={2}>简心API使用条例与声明</Typography.Title>
                <Typography.Paragraph>
                    欢迎使用<Typography.Text mark>简心API</Typography.Text>（以下简称“平台”）。在访问和使用本平台之前，请仔细阅读以下声明。使用本平台即表示您同意并接受以下条款和条件。
                </Typography.Paragraph>

                <Typography.Title level={3}>一、服务概述</Typography.Title>
                <Typography.Paragraph>
                    <ul>
                        <li>
                            1.本平台提供的服务包括但不限于接口访问、数据交换等（具体服务内容以平台实际提供为准）。用户应自行负责判断服务是否满足其需求，并承担因使用服务而产生的所有风险和责任。
                        </li>
                    </ul>
                </Typography.Paragraph>

                <Typography.Title level={3}>二、免责条款</Typography.Title>
                <Typography.Paragraph>
                    <ul>
                        <li>
                            1.平台在尽可能保证服务的稳定性、安全性、及时性、准确性或完整性前提下，也不对服务中断、数据丢失、错误或延误承担任何责任。
                        </li>
                        <li>
                            2.用户应自行负责其在本平台上发布的信息和数据的真实性、合法性、准确性和完整性。平台不对用户发布的信息和数据承担任何法律责任。
                        </li>
                        <li>
                            3.平台不保证第三方服务或产品的质量和可靠性，也不对第三方服务或产品造成的任何损失或损害承担任何责任。
                        </li>
                        <li>
                            4.在法律法规允许的范围内，平台有权随时修改、中断或终止服务，且无需事先通知用户。
                        </li>
                    </ul>
                </Typography.Paragraph>

                <Typography.Title level={3}>三、知识产权</Typography.Title>
                <Typography.Paragraph>
                    <ul>
                        <li>
                            1.本站部份资料来自于网络，资源仅供参考，如有侵犯了您的权益请立即与我们联系！我们将及时撤除。
                        </li>
                        <li>
                            2.本平台上的所有内容（包括但不限于文字、图片、音频、视频等）的知识产权均归平台或相关权利人所有。未经许可，任何盈利单位和个人不得擅自使用、复制、传播或修改。
                        </li>
                    </ul>
                </Typography.Paragraph>

                <Typography.Title level={3}>四、适用法律和争议解决</Typography.Title>
                <Typography.Paragraph>
                    <ul>
                        <li>
                            1.平台的解释、效力及争议解决均适用中华人民共和国法律。因本免责声明引起的或与本免责声明有关的任何争议，双方应首先通过友好协商解决；协商不成时，任何一方均可向平台所在地人民法院提起诉讼。
                        </li>
                    </ul>
                </Typography.Paragraph>

                <Typography.Title level={3}>五、其他</Typography.Title>
                <Typography.Paragraph>
                    <ul>
                        <li>
                            2.平台保留随时修改本免责声明的权利，修改后的免责声明一经公布即具有法律效力。请用户定期查看本免责声明以获取最新版本。
                        </li>
                    </ul>
                </Typography.Paragraph>


            </Typography>

        </Watermark>


    )
})

export default Disclaimer;