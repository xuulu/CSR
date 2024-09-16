import {useState} from 'react';
import {Button, Modal} from 'antd';
import SubmitFriendLink from "./SubmitFriendLink.tsx";

function ModalS() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                申请友链
            </Button>
            <Modal
                title="提交友链"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="关闭"
                cancelText="取消"
            >

                <div>
                    <SubmitFriendLink/>
                </div>


            </Modal>

        </>
    )
}


export default ModalS