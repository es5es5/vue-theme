<template>
  <div id="TSystem">
    <div class="header_wrap">
      <h2>Example2: Peoplelife Telemarketing System T System</h2>
    </div>
    <main>
      <div class="side_wrap">
        <ul class="side">
          <li class="side-item"><img src="@/assets/images/customer.svg" alt="customer" class="sideImg"></li>
          <li class="side-item"><img src="@/assets/images/customer.svg" alt="customer" class="sideImg"></li>
          <li class="side-item"><img src="@/assets/images/customer.svg" alt="customer" class="sideImg"></li>
          <li class="side-item"><img src="@/assets/images/customer.svg" alt="customer" class="sideImg"></li>
          <li class="side-item"><img src="@/assets/images/customer.svg" alt="customer" class="sideImg"></li>
          <li class="side-item"><img src="@/assets/images/customer.svg" alt="customer" class="sideImg"></li>
        </ul>
      </div>
      <div class="contents_wrap">
        contents_wrap
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TSystem'
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 0;
}

#TSystem {
  margin: 0 auto;
}

.header_wrap {
  text-align: center;
  height: 63px;
  line-height: 63px;
  background: rgb(0,210,50);
  background: -moz-linear-gradient(left, $primary 0%, rgba(0,200,200,1) 100%);
  background: -webkit-linear-gradient(left, $primary 0%,rgba(0,200,200,1) 100%);
  background: linear-gradient(to right, $primary 0%,rgba(0,200,200,1) 100%);
  color: #fff;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00d232', endColorstr='#00c8c8',GradientType=1 );
}

main {
  margin: 0 auto;
  width: 1440px;
}

.side_wrap {
  width: 60px;
  float: left;

  .side, .side-item {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .side-item {
    text-align: center;
    margin: 12px 0;
  }

  .sideImg {
    width: 30px;
  }
}

.contents_wrap {
  width: calc(100% - 60px);
  float: left;
}
</style>
