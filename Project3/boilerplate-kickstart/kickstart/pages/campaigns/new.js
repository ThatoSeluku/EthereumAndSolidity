import React, {Component} from 'react';
import { render } from 'react-dom';
import { Button, Form, Input } from 'semantic-ui-react';
import Layout from '../../components/layout';

class CampaignNew extends Component{
   state={
minimumContribution: ''
   };
    render(){
        return(
       <Layout>
        <h3> Create a Campaign</h3>
        <Form>
            <Form.Field>
                <label>Minimum Contribution</label>
                <Input label='Wei' labelPosition="right" value={this.state.minimumContribution}
onChange={event=>this.setState({minimumContribution: event.target.value})}></Input>
                </Form.Field>
            <Button primary>Create</Button>
            </Form>
        </Layout>
        );
    }
}
export default CampaignNew;