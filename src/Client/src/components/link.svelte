<script>
  export let path = '#'
  export let text = 'label'
  export let disabled = false
  export let selected = false

  let hovering = false

  const enter = () => {
    if (disabled) return
    hovering = true
  }
  const leave = () => {
    if (disabled) return
    hovering = false
  }

  const disableClass = disabled ? 'disabled' : ''
  const hoverClass = hovering ? 'hover' : ''
  const selectedClass = selected ? 'selected' : ''
</script>

<a
  href={path}
  class="container {disableClass} {hoverClass} {selectedClass}"
  on:mouseenter={enter}
  on:mouseleave={leave}
>
  <div class="pre" />
  <div class="text">{text}</div>
  <div class="post" />
</a>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 0.5rem;
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
    position: relative;
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

  a.disabled {
    pointer-events: none;
  }

  .hover .text::before,
  .hover .pre::after,
  .hover .post::before,
  .selected .text::before,
  .selected .pre::after,
  .selected .post::before {
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

  .disabled .text,
  .disabled .pre,
  .disabled .post {
    opacity: 0.4;
  }
</style>
