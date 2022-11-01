<script>
  import { page } from '$app/stores'
  import { onMount, onDestroy } from 'svelte'
  import Layout from '../../layout.svelte'
  import VehicleMenu from '../../../layouts/nav/vehicle-menu.svelte'
  import Heading from '../../../components/heading.svelte'
  import {
    selectedVehicleId,
    vehicles,
    joinVehicleBroadcast,
    leaveVehicleBroadcast
  } from '../../../stores/vehicles'

  const id = $page.params.id
  let name
  let temperature

	$: vehicle = $vehicles.find(v => v.id === id)
  $: name = vehicle.name
  $: temperature = vehicle.temperature
  $: temperatureText = temperature ? `${temperature}°C` : 'Waiting for telemetry data...'

  selectedVehicleId.set(id)

  onMount(async () => {
    await joinVehicleBroadcast(id)
  })

  onDestroy(async () => {
    selectedVehicleId.set('')
    await leaveVehicleBroadcast(id)
  })
</script>

<Layout>
  <div slot="sidebar">
    <VehicleMenu disabled={true} />
  </div>
  <div slot="main" class="main">
    <Heading text={name} />
    	<Heading text={temperatureText} />
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
