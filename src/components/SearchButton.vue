<template>
  <div id="searchbtn">
    <form  action="#">
        <label :data-state="state" for="search">
        <input type="text" placeholder="Search" @click="state = 'open'" @blur="state='close'"/>
            <i class="fa fa-search" @click="" aria-hidden="true"></i>
        </label>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'searchbtn',
  data () {
    return {
      state: 'close'
    }
  }
}
</script>

<style scoped>
body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 100vh;
  background-color: #F0AD4E;
}

label {
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 12px;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  border-radius: 0;
  -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}
label::after {
  content: '';
  display: block;
  height: 2px;
  width: 80%;
  background-color: #F0AD4E;
  -webkit-transition: all 1s ease 0.5s;
  transition: all 1s ease 0.5s;
}
label input {
  -webkit-transition: width 1s ease, opacity 0.5s ease 0.5s;
  transition: width 1s ease, opacity 0.5s ease 0.5s;
  opacity: 1;
  width: 180px;
  height: 25px;
  border: 0;
  outline: none;
  color: #b06d0f;
}
label i {
  position: absolute;
  top: 11px;
  right: 11px;
  color: #333;
  cursor: pointer;
}
label[data-state="close"] {
  border-radius: 30px;
  padding: 5px 5px;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}
label[data-state="close"]::after {
  width: 0%;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
label[data-state="close"] i {
  pointer-events: none;
}
label[data-state="close"] input {
  width: 28px;
  height: 25px;
  opacity: 0;
  cursor: pointer;
  -webkit-transition: opacity 0.5s ease, width 1s ease;
  transition: opacity 0.5s ease, width 1s ease;
  -webkit-appearance: none;
}

</style>
