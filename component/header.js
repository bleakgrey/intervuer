const template = `
	<nav>
		<div>
			<img class="avatar primary" v-bind:src="avatar" style="display:inline" />
			<hgroup>
				<h2>{{ title }}</h2>
				<h3>{{ subtitle }}</h3>
			</hgroup>
		</div>
		
		<ul style="display:none">
			<li><a href="#" role="button" class="outline">English</a></li>
		</ul>
	</nav>

	<h4 style="font-weight: normal;">{{ about }}</h4>

`

export default {
  template,
  props: ["avatar", "title", "subtitle", "about"],
  watch: {
  	title: {
  		handler () {
  			document.title = this.title;
  		}
  	}
  }
}
