<template>
  <footer>
    <nav>
      <ul>
        <li>
          <RouterLink to="/about/Kontakt">Kontakt</RouterLink>
        </li>
        <li>
          <RouterLink to="/about/Polisstationer">Polisstationer</RouterLink>
        </li>
        <li>
          <RouterLink to="/about/Om">Om webbplatsen</RouterLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: end;
  align-items: end;
  justify-content: space-between;
  /* border: 1px solid black; */

  width: 100%;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: sans-serif;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  justify-content: space-evenly;
}

li {
  float: left;
  width: 100%;
  height: 70px;
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
  background-color: #315374;
  cursor: pointer;
}
footer {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  color: #eee;
  width: 100%;
  height: 70px;
  /* display: inline-block; */
  /* width: 300px; */
  background-color: rgba(12, 50, 86, 0.85);
  position: sticky;
  bottom: 10px;
}
</style>
