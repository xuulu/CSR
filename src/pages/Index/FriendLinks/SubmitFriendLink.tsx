import type {typeFriendLink} from '@/types/typeApiList';
import type {FormProps} from 'antd';
import {Button, Form, Input, message} from 'antd';
import postSubmitFriendLink from "@/apis/postSubmitFriendLink.ts";


function SubmitFriendLink() {
    const [form] = Form.useForm();

    // 提交表单的函数
    const onFinish = async (values: typeFriendLink) => {

        const result = await postSubmitFriendLink(values);

        if (result.success) {
            message.success('提交成功，请等待管理员审核且注意邮箱！');
        } else {
            message.error('提交失败，请勿重复提交或联系管理员！');
            const {errors} = result;
            // 解析错误信息并设置表单字段错误
            const formattedErrors = Object.keys(errors).map((field) => ({
                name: field,
                errors: errors[field],
            }));

            form.setFields(formattedErrors);
        }

        // if (await postSubmitFriendLink(values)) {
        //     message.success('提交成功，请等待管理员审核且注意邮箱！');
        // } else {
        //     message.error('提交失败,请勿重复提交或联系管理员！');
        // }
    };

    // 表单验证
    const onFinishFailed: FormProps['onFinishFailed'] = ({values, errorFields, outOfDate}) => {
        console.log('表单提交失败:', values);
        console.log('表单提交失败:', errorFields);
        console.log('表单提交失败:', outOfDate);
    };


    return (
        <Form
            form={form}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {/*名称*/}
            <Form.Item<typeFriendLink>
                label="网站名称"
                name="name"
                rules={[{required: true, message: '请输入您的网站名称!'}]}
            >
                <Input/>
            </Form.Item>
            {/*地址*/}
            <Form.Item<typeFriendLink>
                label="网站地址"
                name="url"
                rules={[{type: 'url', required: true, message: '请输入有效的URL!'}]}
            >
                <Input/>
            </Form.Item>
            {/*图标*/}
            <Form.Item<typeFriendLink>
                label="网站图标"
                name="image"
                rules={[{type: 'url', required: true, message: '请输入有效的URL!'}]}
            >
                <Input/>
            </Form.Item>
            {/*描述*/}
            <Form.Item<typeFriendLink>
                label="网站简介"
                name="description"
                rules={[{required: true, message: '请用一句话描述您的网站！'}]}
            >
                <Input/>
            </Form.Item>
            {/*邮箱*/}
            <Form.Item<typeFriendLink>
                label="邮箱地址"
                name="email"
                rules={[
                    {
                        required: true,
                        message: '请输入您的邮箱！',
                    },
                    {
                        type: 'email',
                        message: '请输入有效的邮箱地址！',
                    },
                ]}
            >
                <Input/>
            </Form.Item>


            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    提交申请
                </Button>
            </Form.Item>
        </Form>

    );

}

export default SubmitFriendLink;