import axios from 'axios';
import Cookie from 'js-cookie';

var instance  = axios.create();

instance.new = function(url){
	this.default.baseURL = url;
};

instance.setTokenPath = function (path = '/token'){
	this.tokenPath = path;
}

instance.getTokenPath = function(){
	return this.tokenPath || '/token';
}
