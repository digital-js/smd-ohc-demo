<script>
  /**
   * @typedef { import("../../lib/types").Vehicle } Vehicle
   */

  import Heading from '../../components/heading.svelte'
  import { vehicles, revokeVehicleAccess, grantVehicleAccess } from '../../stores/vehicles'

  const handleClick = (/** @type {Vehicle} */ vehicle) => {
    if (vehicle.access) {
      revokeVehicleAccess(vehicle.id)
    } else {
      grantVehicleAccess(vehicle.id)
    }
  }
  const clickText = (/** @type {Vehicle} */ vehicle) => {
    if (vehicle.access) {
      return 'Revoke access'
    } else {
      return 'Grant access'
    }
  }
</script>

{#each $vehicles as vehicle, index (vehicle.id)}
  <Heading text={vehicle.name} on:click={() => handleClick(vehicle)} />
  <button on:click={() => handleClick(vehicle)}>{clickText(vehicle)}</button>
{/each}
