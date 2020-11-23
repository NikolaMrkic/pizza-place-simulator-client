import { React, useState, PageHeader, Button, Modal } from "../../../global";
import LogIn from "../login/LogIn";

const PublicHeader = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const showModal = () => {
    setIsVisibleModal(true);
  };

  return (
    <div>
      <PageHeader
        className="publc-header"
        extra={[
          <Button type="primary" danger onClick={showModal}>
            Login
          </Button>,
        ]}
        title="Pizza"
      />
      <Modal
        visible={isVisibleModal}
        onOk={() => setIsVisibleModal(false)}
        onCancel={() => setIsVisibleModal(false)}
        width={400}
      >
        <LogIn />
      </Modal>
    </div>
  );
};

export default PublicHeader;
