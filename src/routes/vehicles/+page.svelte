<script>
  import Layout from '../layout.svelte'
  import VehicleMenu from '../../layouts/nav/vehicle-menu.svelte'
  import Heading from '../../components/heading.svelte'
  import VehicleList from './vehicle-list.svelte'
</script>

<Layout>
  <div slot="sidebar">
    <VehicleMenu disabled={true} />
  </div>
  <div slot="main" class="main">
    <Heading text="Request vehicle access" />
    <Heading text="Search vehicles..." />
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
