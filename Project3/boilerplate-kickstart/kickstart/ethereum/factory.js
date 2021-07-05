import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0x15A4215b47fe141FcACE6BB766842d36E2d1cf57'
);

export default instance;