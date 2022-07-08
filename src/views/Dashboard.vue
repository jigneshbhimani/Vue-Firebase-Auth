<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="heading">Dashboard</h2>
        <p>This page is only visible to users that are currently logged in</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style>
.heading {
  color: chocolate;
  text-decoration: underline;
  cursor: pointer;
}
</style>
