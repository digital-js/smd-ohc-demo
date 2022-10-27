<div class="container">
	<div class="content">
		<slot name="content" />
	</div>
	<div class="action">
		<slot name="action" />
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		margin-bottom: 1rem;
	}
	.content {
		flex-grow: 1;
	}
	.action {
		flex-grow: 0;
		min-width: 2rem;
		padding-left: 1rem;
	}
</style>
