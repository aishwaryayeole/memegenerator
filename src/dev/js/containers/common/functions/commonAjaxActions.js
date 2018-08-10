import axios from 'axios';
import NProgress from 'react-nprogress/nprogress.js';
// import * as types from './commonActionTypes';
import { hashHistory } from 'react-router';
var querystring = require('querystring');
//import * as config from '../config';

let counter = 0;
function incCounter() {
	counter++;
}
function decCounter() {
	counter--;
}

export function httpRequest(dispatch, getState, request) {

	axiosCall(dispatch, getState, request);
}

let unauthorizedToken = true;
let pendingHttpRequests = [];

function axiosCall(dispatch, getState, request, ignoreUserObject) {
	incCounter();
	if (!document.getElementById('nprogress')) {
		if (!request.hideNProgress)
			NProgress.start();
	}
	let requestData = request.data || {};

	var headers = sessionStorage.getItem("token") != null && sessionStorage.getItem("token") != '' ? { Authorization: sessionStorage.getItem("token") } : {};

	axios({
		method: request.method,
		url: request.url,
		params: request.params,
		data: requestData,
		headers: headers

	}).then((response) => {

		dispatch(request.successCallback(response));
		decCounter();
		if (counter == 0) {
			NProgress.done();
		}
	}).catch((error) => {
		if (error && error.response && error.response.status == 401) {
			var url, client_id, client_secret, realm_name;

			// messageResource.load('keycloak-config', () => {
			// 	// load each key, value from property file and return single JSON
			// 	url = messageResource.get('keycloak_url', 'keycloak-config');
			// 	client_id = messageResource.get('keycloak_client_id', 'keycloak-config');
			// 	client_secret = messageResource.get('keycloak_client_secret', 'keycloak-config');
			// 	realm_name = messageResource.get('keycloak_realm_name', 'keycloak-config');

			// });
			if (unauthorizedToken) {
				unauthorizedToken = false;
				NProgress.start();
				axios({
					method: 'POST',
					url: url + '/realms/' + realm_name + '/protocol/openid-connect/token',
					data: querystring.stringify({
						client_id: client_id,
						grant_type: "refresh_token",
						client_secret: client_secret,
						refresh_token: sessionStorage.getItem("refresh_token")
					})
				}).then((response) => {
					if (response.status == 200) {

						// sessionStorage.setItem("token", "Bearer " + response.data.access_token);
						// sessionStorage.setItem("refresh_token", response.data.refresh_token);
						axiosCall(dispatch, getState, request, ignoreUserObject);
						pendingHttpRequests.map((request) => {
							axiosCall(dispatch, getState, request, ignoreUserObject);
						})
						pendingHttpRequests = [];
					}
					else {
						pendingHttpRequests = [];
						clearSessionStorage();
					}
					NProgress.done();
					unauthorizedToken = true;
				}).catch((error) => {
					pendingHttpRequests = [];
					clearSessionStorage();
					unauthorizedToken = true;
					NProgress.done();
				})
			}
			else {
				pendingHttpRequests.push(request);
			}

		}

		dispatch(request.failureCallback(error.response));
		decCounter();
		if (counter == 0) {
			NProgress.done();
		}
	})
	if (!request.hideNProgress)
		NProgress.inc(0.2);
}

function clearSessionStorage() {
	// if (sessionStorage.getItem("token") && sessionStorage.getItem("token") != "") {
	// 	sessionStorage.removeItem('token');
	// 	sessionStorage.removeItem('refresh_token');
	// 	sessionStorage.removeItem('userId');
	// 	sessionStorage.removeItem('role');
	// 	sessionStorage.removeItem('username');
	// 	sessionStorage.removeItem('userFname');
	// 	sessionStorage.removeItem('userLname');
	// 	sessionStorage.removeItem('bdTrustId');
	// 	//sessionStorage.removeItem('firstLogginFlag');
	// 	NProgress.done();
	// 	hashHistory.push('/');
	// }
}