import React from 'react';
import { ajaxGet } from '../utils/Ajax';
import { asset_url } from '../utils/Config';


class Home extends React.Component {

	constructor(props) {
        super(props);
	}

    render(){
        

		return (
            
            <div>
                Hello
            </div>         
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
                </Layout>
            </main>     
		);
	}
}


export default (Home)

