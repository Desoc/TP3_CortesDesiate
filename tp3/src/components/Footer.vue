<template>
  <div>
    <footer>
      <a id="size" class="navbar-brand fixed-bottom">
        <img
          src="../assets/gmail.png"
          width="20"
          height="20"
          alt=""
          loading="lazy"
        />
        <div id="emails">
          <a>ulises.cortes@institutoamemt.edu.ar</a>
          <a>octaviodesiate@institutoamemt.edu.ar</a>
        </div>
      </a>
    </footer>
  </div>
</template>
<script>
export default {}
</script>
<style lang="css">
    #size {
        font-size: smaller;
        color: black;
        display: flex;
        flex-direction: row;
    }
    #emails {
      display: flex;
      flex-direction: column;
    }
    img {
      margin: 7px;
    }
</style>
