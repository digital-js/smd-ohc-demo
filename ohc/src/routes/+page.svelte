<script>
	import Layout from './layout.svelte'
	import SidebarItem from '../components/sidebar-item.svelte'
	import User from '../components/user.svelte'
</script>

<Layout>
	<div slot="sidebar">
		<SidebarItem>
			<User name="John Doe" slot="content" />
			<a href="/vehicles" slot="action">
				<i class="fa-solid fa-plus" />
			</a>
		</SidebarItem>
	</div>
	<h1 slot="main">Home</h1>
</Layout>

<style>
	a {
		display: flex;
		padding: 0.3rem;
		border: solid 1px #fff;
		border-radius: 9999px;
		justify-content: center;
		align-items: center;
	}
</style>
