<script>
  import { onMount } from 'svelte'
  import { msalInstance } from '../auth/config'
  import { user } from '../stores/user'

  onMount(async () => {
    await msalInstance.handleRedirectPromise()

    const accounts = msalInstance.getAllAccounts()

    if (accounts.length === 0) {
      await msalInstance.loginRedirect()
    } else {
      user.set(accounts[0])
    }
  })

  const handleRedirectLogout = () => {
    msalInstance.logoutRedirect()
  }

  console.log($user)
</script>

<div class="container">
  <div class="pre">
    <div class="icon">
      <i class="fa-solid fa-user" />
    </div>
  </div>
  <div class="text">{$user.name}</div>
  <div class="post" />
</div>

<button on:click={handleRedirectLogout}>Logout Redirect</button>

<style>
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
