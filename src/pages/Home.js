import React from 'react';
import { ajaxGet } from '../utils/Ajax';
import { asset_url } from '../utils/Config';
// import { Avatar } from 'antd';
import { 
    Avatar, 
    Layout, 
    Row, 
    Col, 
    Button, 
    Typography,
    Timeline,
    Spin 
} from 'antd';
import {
    GithubOutlined,
    MailOutlined,
    PhoneOutlined
  } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;
import { Anchor } from 'antd';

const { Link } = Anchor;

class Home extends React.Component {

	constructor(props) {
        super(props);
	}

    render(){
        
		return (

            <main style={{backgroundColor: '#F0F2F5', minWidth: '100%'}}>
                <Layout>

                    <Header style={{height: 120, backgroundColor: '#F0F2F5'}}>
                        <Row justify='center' align='middle' style={{height: '100%'}}>
                            <Col span={24}>
                                <hr style={{height: 3.5, color: '#554DA0', backgroundColor: '#554DA0', border: 'none', borderRadius: 20}}/>
                            </Col>
                            <Avatar src='images/profil_picture.png' size={90} style={{textAlign: 'center', position: 'absolute', border: '3.5px #554DA0 solid'}}/>
                           
                        </Row>
                        
                        
                    </Header>
                    
                    <Content>
                        <Row justify='center'>
                            <Col span={24}>
                                <Title style={{textAlign: 'center'}}>Josselin Pennors</Title>
                            </Col>
                        </Row>
                        <Row justify='center'>
                            <Text>
                                
                                <MailOutlined style={{marginRight: 8}}/>josselin.pennors@hotmail.fr
                                <a target="_blank" href="https://github.com/jpennors">
                                    <GithubOutlined style={{marginLeft:16, marginRight: 8}} />jpennors
                                </a>
                                {/* <Link target="_blank" href="https://github.com/jpennors"><GithubOutlined style={{marginLeft:16, marginRight: 8}} />jpennors</Link> */}
                                <PhoneOutlined style={{marginLeft:16, marginRight: 8}}/> + 33 (0)6 10 25 64 72 
                                
                            </Text>
                        
                        </Row>

                        <Row justify='center' style={{marginTop: 50}}>
                            <Col span={24}>
                                <Title level={3} className="subtitle">Experiences</Title>
                            </Col>
                        </Row>

                        <Row justify='center'>
                            <Timeline mode="alternate" style={{width: '80%'}}>
                                <Timeline.Item>Software Engineering Intern - American Museum of Natural History, New York</Timeline.Item>
                                <Timeline.Item>Data Scientist Intern - Shift Technology, Paris</Timeline.Item>
                            </Timeline>,
                        </Row>    

                        <Row justify='center'>
                            <Col span={24}>
                                <Title level={3} style={{textAlign: 'center'}} className="subtitle">Projects</Title>
                            </Col>
                        </Row>   

                        <Row justify='center'>
                            <Timeline 
                                mode="alternate" 
                                pending="Waiting for new projects ..." 
                                style={{width: '80%'}}
                                pendingDot={<Spin style={{ color: '#554DA0'}}/>}
                            >
                                <Timeline.Item>Fablab UTC Webapp</Timeline.Item>
                                <Timeline.Item>Bobby Webapp</Timeline.Item>
                                <Timeline.Item>Picasso Webapp</Timeline.Item>
                                <Timeline.Item>Tips My Web</Timeline.Item>
                            </Timeline>,
                        </Row>    


                        <Row justify='center'>
                            <Col span={24}>
                                <Title level={3} style={{textAlign: 'center'}} className="subtitle">Knowledge</Title>
                            </Col>
                        </Row>   

                        <Row justify='center'>
                            <Col span={24}>
                                <Title level={3} style={{textAlign: 'center'}} className="subtitle">Resume</Title>
                            </Col>
                        </Row>   

                    </Content>
                    
                    <Footer>
                        
                    </Footer>
                
                </Layout>
            </main>     
		);
	}
}


export default (Home)

