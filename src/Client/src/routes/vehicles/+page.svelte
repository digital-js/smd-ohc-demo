<script>
  import Layout from '../layout.svelte'
  import VehicleMenu from '../../layouts/nav/vehicle-menu.svelte'
  import Heading from '../../components/heading.svelte'
  import Input from '../../components/input.svelte'
  import VehicleList from './vehicle-list.svelte'
	import { searchTerm } from '../../stores/vehicles'

	let searchValue

	$: searchTerm.set(searchValue)
</script>

<Layout>
  <div slot="sidebar">
    <VehicleMenu disabled={true} />
  </div>
  <div slot="main" class="main">
    <Heading text="Request vehicle access" />
    <Input bind:value={searchValue} />
    <VehicleList />
  </div>
  <span slot="footer" class="footer">
    <a href="/"><i class="fa-solid fa-chevron-left" /></a>
  </span>
</Layout>

<style>
  .main {
    margin: auto;
    width: 100%;
    padding: 1rem 10rem;
  }
  .footer {
    font-size: 1.5rem;
    border: solid 2px #fff;
    border-radius: 9999px;
    padding: 6px;
  }
  .footer i {
    padding: 8px;
  }
</style>
