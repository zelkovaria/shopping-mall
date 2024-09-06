import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';

const TabStyle = () => {
  return (
    <Tabs
      defaultActiveKey="info"
      id="fill-tab-example"
      className="mb-3 mt-3"
      fill
    >
      <Tab eventKey="info" title="상품 설명">
        <Button variant="light">Light</Button>{' '}
      </Tab>
      <Tab eventKey="detail" title="상품 상세">
        Tab content for Profile
      </Tab>
      <Tab eventKey="review" title="리뷰">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
};

export default TabStyle;
