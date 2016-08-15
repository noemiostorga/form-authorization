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


if(Cookie.get('token')){
	var token = Cookie.get('token');
	instance.interceptors.request.use(function(config){
		config.headers['Authorization'] = "Token " + token;
		return config;
	});
}

instance.login = function (user, pass){
	return this.post(this.getTokenPath(),{username: user, password:pass})
		.then(function(reso){
			var token = resp.data.token;
			Cookie.set('token', token);
			this.interceptors.request.use(function(config){
				config.headers['Authorization'] = 'Token ' + token;
				return config;
			})
		}.bind(this))
};

instance.logout =function (){
	Cookie.remove('token');
}

export default instance;