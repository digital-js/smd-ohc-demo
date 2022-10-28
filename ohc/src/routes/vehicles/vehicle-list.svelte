<script>
  import VehicleListItem from './vehicle-list-item.svelte'
  import { vehicles } from '../../stores/vehicles'
</script>

{#each $vehicles as vehicle (vehicle.id)}
  <VehicleListItem {vehicle} />
{/each}
