<script>
  import Auth from '../stores/auth'
  import { isAuthenticated } from '../stores/user'

  let hovering = false

  const enter = () => {
    hovering = true
  }
  const leave = () => {
    hovering = false
  }

  const handleClick = () => {
    $isAuthenticated ? Auth.logout() : Auth.login()
  }

  const hoverClass = hovering ? 'hover' : ''
</script>

<button
  class="container {hoverClass}"
  on:mouseenter={enter}
  on:mouseleave={leave}
  on:click={handleClick}
>
  <div class="pre" />
  <div class="text">{$isAuthenticated ? 'Logout' : 'Login'}</div>
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
    margin-top: 5rem;
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
  .hover .text::before,
  .hover .pre::after,
  .hover .post::before {
    content: '';
    display: block;
    opacity: 0.4;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
