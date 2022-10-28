<script>
  import { onMount } from 'svelte'
  import { user } from '../stores/user'
  console.log($user)
  const handleClick = () => {
    console.log('click')
  }
</script>

<button class="container" on:click={handleClick}>
  <div class="pre">
    <div class="icon">
      <i class="fa-solid fa-user" />
    </div>
  </div>
  <div class="text">{$user.name}</div>
  <div class="post" />
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
    padding: 0.75rem;
  }
  .pre::before {
    content: '';
    display: block;
    position: absolute;
    border: solid 2px #fff;
    border-radius: 9999px;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
  }
  .text {
    flex-grow: 1;
    padding-left: 1rem;
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
    padding: 0.75rem;
  }
  .icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    border-radius: 9999px;
    background: #4ba35a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
