<template>
  <nav>
    <span><a href="#home">RUIZ</a></span>
    <ul>
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--nav-bg);
  width: 100vw;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  height: 4.125rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
}

a {
  text-decoration: none;
}

nav span {
  margin-left: 10rem;
}

nav span a {
  color: var(--text-logo-primary);
  font-size: 2rem;
}

nav ul {
  margin-right: 10rem;
  display: flex;
  gap: 2rem;
}

li {
  color: var(--text-primary);
  list-style-type: none;
}

li a {
  color: var(--text-primary);
  font-size: 1.5rem;
}
</style>
