import Header from '../component/header.js'
import Section from '../component/section.js'
import Content from '../component/content.js'

let App = Vue.createApp ({
	  data: () => {
	  	return schema
	  },
	  methods: {
	  	refresh (data) {
	  		console.log ("Updating data...");
	  		Object.assign (this, data);
	  	}
	  }
});

App.component ("app-header", Header);
App.component ("app-section", Section);
App.component ("app-content", Content);

const schema = {
	header: {
		title: "",
		subtitle: "",
		avatar: "",
		about: ""
	},
	content: []
}

let AppImpl;

window.addEventListener('load', () => {
  AppImpl = App.mount ("main");
  loadContentFile ("./content/en.json");
});

function loadContentFile (file) {
	console.log ("Loading content from file: "+file);
	getJSON (file, AppImpl.refresh);
}

function getJSON (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(xhr.response);
      } else {
        callback(null);
      }
    };
    xhr.send();
};
