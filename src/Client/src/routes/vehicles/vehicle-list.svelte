<script>
  import VehicleListItem from './vehicle-list-item.svelte'
  import { filteredVehicles } from '../../stores/vehicles'
</script>

{#each $filteredVehicles as vehicle (vehicle.id)}
  <VehicleListItem {vehicle} />
{/each}
