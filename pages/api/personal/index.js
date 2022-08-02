import {personal} from '../../../data/personal'
export default function handler(req, res){
    res.status(200).json(personal);
}