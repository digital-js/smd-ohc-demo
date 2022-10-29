<script>
  import Layout from './layout.svelte'
  import VehicleMenu from '../layouts/nav/vehicle-menu.svelte'
</script>

<Layout>
  <div slot="sidebar">
    <VehicleMenu />
  </div>
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
