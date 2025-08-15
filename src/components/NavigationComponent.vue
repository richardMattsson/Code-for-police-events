<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/search">Sök</RouterLink>
      </li>
      <li>
        <RouterLink to="/saved">Sparade händelser</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  position: fixed;
  width: 100%;
  top: 10px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

li {
  float: left;
  background-color: rgba(24, 98, 168, 0.85);
  width: 100%;
  height: 70px;
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #fff;
}
li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:hover {
  background-color: #4a89a0;
  cursor: pointer;
}
</style>
