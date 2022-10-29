<script>
  import { revokeVehicleAccess, grantVehicleAccess } from '../../stores/vehicles'

  export let vehicle

  const handleClick = () => {
    if (vehicle.access) {
      revokeVehicleAccess(vehicle.id)
    } else {
      grantVehicleAccess(vehicle.id)
    }
  }

  $: selectedClass = vehicle.access ? 'selected' : ''
</script>

<button class="container {selectedClass}" on:click={handleClick}>
  <div class="pre" />
  <h1 class="text">{vehicle.name}</h1>
  <div class="post">
    <div class="icon">
      <i class="fa-solid fa-key" />
    </div>
  </div>
</button>

<style>
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    width: 100%;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 1rem;
  }
  .pre {
    position: relative;
    flex-grow: 0;
    border: solid 2px #fff;
    border-top-left-radius: 180px;
    border-bottom-left-radius: 180px;
    border-right: none;
    padding: 1.5rem;
  }
  .text {
    position: relative;
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: normal;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    border-top: solid 2px #fff;
    border-bottom: solid 2px #fff;
  }
  .post {
    position: relative;
    flex-grow: 0;
    border: solid 2px #fff;
    border-top-right-radius: 180px;
    border-bottom-right-radius: 180px;
    border-left: none;
    padding: 1.5rem;
  }
  .post::before {
    background: none;
    border: 2px solid #fff;
    content: '';
    border-radius: 9999px;
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    pointer-events: none;
  }
  .post .icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
  }
  .post i {
    font-size: 1.5rem;
  }

  .selected .pre::after {
    content: ' ';
    display: block;
    position: absolute;
    border-top-left-radius: 180px;
    border-bottom-left-radius: 180px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: #fff;
  }
  .selected .text::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: #fff;
  }
  .selected .post::after {
    content: ' ';
    display: block;
    position: absolute;
    border-top-right-radius: 180px;
    border-bottom-right-radius: 180px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: #fff;
    z-index: -1;
  }
  .selected .icon {
    background-color: #4ba35a;
  }
</style>
