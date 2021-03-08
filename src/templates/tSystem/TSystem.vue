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
          <li class="side-item">
            <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path :fill="mixinGetTheme.primary" d="M8.99997 8.52941C11.2091 8.52941 13 6.84389 13 4.7647C13 2.68552 11.2091 1 8.99997 1C6.79083 1 4.99997 2.68552 4.99997 4.7647C4.99997 6.84389 6.79083 8.52941 8.99997 8.52941Z" fill-opacity="0.7"/>
              <path :fill="mixinGetTheme.primary" d="M17 17V13.2353C17 12.6706 16.7 12.1059 16.2 11.7294C15.1 10.8823 13.7 10.3176 12.3 9.94117C11.3 9.65882 10.2 9.47058 9 9.47058C7.9 9.47058 6.8 9.65882 5.7 9.94117C4.3 10.3176 2.9 10.9765 1.8 11.7294C1.3 12.1059 1 12.6706 1 13.2353V17H17Z" fill-opacity="0.7"/>
            </svg>
          </li>
          <li class="side-item"><img src="@/assets/images/customer.svg" alt="customer" class="sideImg"></li>
        </ul>
      </div>
      <div class="contents_wrap">
        <ul class="menu_wrap">
          <li class="menu-item active">상담요청</li>
          <li class="menu-item">예약</li>
          <li class="menu-item">고객</li>
          <li class="menu-item">미승인DB</li>
          <li class="menu-item">콜백</li>
          <li class="menu-item">캠페인DB</li>
        </ul>
        <div class="table_wrap">
          <table>
            <colgroup>
              <col style="width: 50px;">
              <col style="width: 50px;">
              <col style="width: 50px;">
              <col style="width: 50px;">
              <col style="width: 50px;">
              <col style="width: 50px;">
              <col style="width: 50px;">
              <col style="width: 100px;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col"><span>No</span></th>
                <th scope="col"><span>상담번호</span></th>
                <th scope="col"><span>담당자</span></th>
                <th scope="col"><span>고객명</span></th>
                <th scope="col"><span>연락처</span></th>
                <th scope="col"><span>유입경로</span></th>
                <th scope="col"><span>상담일시</span></th>
                <th scope="col"><span>메모</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span>3</span></td>
                <td><span>515212</span></td>
                <td><span>빢끼훈</span></td>
                <td><span>김루이</span></td>
                <td><span>010-****-1111</span></td>
                <td><span>지나가다가</span></td>
                <td><span>2020-05-05</span></td>
                <td><span>아무튼해줘</span></td>
              </tr>
              <tr>
                <td><span>2</span></td>
                <td><span>124124</span></td>
                <td><span>양은찌</span></td>
                <td><span>김루이</span></td>
                <td><span>010-****-2222</span></td>
                <td><span>심심해서</span></td>
                <td><span>2020-10-15</span></td>
                <td><span>간단한CRUD</span></td>
              </tr>
              <tr>
                <td><span>1</span></td>
                <td><span>424124</span></td>
                <td><span>써씅원</span></td>
                <td><span>김루이</span></td>
                <td><span>010-****-3333</span></td>
                <td><span>졸려서</span></td>
                <td><span>2021-01-15</span></td>
                <td><span>2시간이면하지?</span></td>
              </tr>
            </tbody>
          </table>
        </div>
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

.menu_wrap {
  list-style-type: none;
  border: 1px solid rgba(#c3c8cd, .5);

  .menu-item {
    cursor: pointer;
    display: inline-block;
    margin: 0 10px;
    padding: 15px 10px;
    border-bottom: 2px solid #c3c8cd;

    &:hover {
      color: $primary;
      border-bottom: 2px solid $primary;
    }

    &.active {
      color: $primary;
      border-bottom: 2px solid $primary;
    }
  }
}

table {
  margin-top: 20px;
  border-top: 2px solid $secondary;
  border-bottom: 1px solid #dcdcdc;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  width: 100%;

  th {
    border-radius: 0;
    background: $primary;
    padding: 4px;
    height: 34px;
    text-align: center;
    color: $secondary;
  }

  td {
    padding: 4px;
    height: 34px;
    text-align: center;
    border-top: 1px solid rgba(34,36,38,.1);
    border-left: 1px solid rgba(34,36,38,.1);
  }
}
</style>
