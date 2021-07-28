const template = `
	<article>
		<div class="grid">
		
		    <app-section
		      v-for="item in sections"
		      v-bind="item"
		      v-bind:key="item.title"
		    ></app-section>
 
		</div>
	</article>
`

export default {
  template,
  props: ["sections"]
}
