<script>
  import { onMount } from 'svelte'
  import SidebarItem from '../components/sidebar-item.svelte'
  import User from '../components/user.svelte'
  import AuthButton from '../components/auth-button.svelte'
  import { isAuthenticated } from '../stores/user'
</script>

<section class="sidebar">
  <div class="logo">
    <a href="/"><img src="/img/logo.svg" alt="logo" /></a>
  </div>
  {#if $isAuthenticated}
    <SidebarItem>
      <User slot="content" />
    </SidebarItem>
    <slot name="sidebar" />
  {/if}
  <SidebarItem>
    <AuthButton slot="content" />
  </SidebarItem>
</section>
<section class="main">
  <div class="content">
    <slot name="main" />
  </div>
  <slot name="footer" />
</section>

<style>
  :global(.app) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
  .sidebar {
    width: 23.75%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
  }
  .logo {
    height: 7.5vh;
    margin-top: 5vh;
    margin-bottom: 7.5vh;
  }
  .main {
    flex-grow: 1;
  }
  .content {
    margin-top: 7.5vh;
    display: flex;
    justify-content: center;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>
