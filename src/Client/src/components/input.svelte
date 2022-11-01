<script>
  export let value = ''
  export let placeholder = '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _'
</script>

<div class="container">
  <div class="pre">
		<div class="icon">
			<i class="fa-solid fa-search" />
		</div>
	</div>
  <input type="text" {placeholder} bind:value={value} />
  <div class="post" />
</div>

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
    padding: 1.5rem;
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
  input {
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: normal;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
		border: none;
    border-top: solid 2px #fff;
    border-bottom: solid 2px #fff;
		outline: none;
	  background: transparent;
		color: #fff;
		padding-left: 0.5rem;
		padding-right: 2rem;
  }
	input::placeholder {
		color: #fff;
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
    display: flex;
    justify-content: center;
    align-items: center;
		font-size: 1.3rem;
  }
</style>
