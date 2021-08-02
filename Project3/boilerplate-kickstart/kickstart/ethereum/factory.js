import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    "0xe709A3248134FF371CA51328Cbfe4a1F2b8707E2"
);

export default instance;