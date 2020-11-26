import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = "109.244.192.76:7350";

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;