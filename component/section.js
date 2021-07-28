const template = `
	<div>
		<h6 class="primary">{{ title }}</h6> 
		
		    <kbd v-for="tag in tags">
		    	{{ tag }}
		    </kbd>
		
	</div>
`

export default {
  template,
  props: ["title", "tags"]
}
