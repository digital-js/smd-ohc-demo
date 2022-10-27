<script>
  import { grantedVehicles } from '../../stores/vehicles'
  import SidebarItem from '../../components/sidebar-item.svelte'
  import Link from '../../components/link.svelte'

  export let disabled = false

  const disableClass = disabled ? 'disabled' : ''
</script>

<SidebarItem>
  <div slot="content" class={disableClass}>Select Vehicle</div>
  <a class="add {disableClass}" href="/vehicles" slot="action">
    <i class="fa-solid fa-plus" />
  </a>
</SidebarItem>

{#each $grantedVehicles as vehicle}
  <SidebarItem>
    <Link path={`/vehicles/${vehicle.id}`} text={vehicle.name} slot="content" {disabled} />
  </SidebarItem>
{/each}

<style>
  a.add {
    display: flex;
    padding: 0.3rem;
    border: solid 1px #fff;
    border-radius: 9999px;
    justify-content: center;
    align-items: center;
  }

  .disabled {
    opacity: 0.4;
  }

  a.disabled {
    pointer-events: none;
  }
</style>
