<template>
  <div id="pines2">
    <h2>Example1: <span class="secondary">Peoplelife Next Generation ERP</span> <span class="primary">Pines 2</span></h2>
    <header class="header">
      <h3 class="title">프로그램 개발요청</h3>
      <ul class="menu">
        <li class="menu-item">게시판</li>
        <li class="menu-item">영업인사</li>
        <li class="menu-item">계약/마감관리</li>
        <li class="menu-item">고객관리</li>
        <li class="menu-item">활동지원</li>
        <li class="menu-item">설정관리</li>
      </ul>
    </header>
    <div class="tab_wrap">
      <ul class="tab">
        <li class="tab-item active">프로그램 요청</li>
        <li class="tab-item">진행점검</li>
        <li class="tab-item">장애신고</li>
      </ul>
    </div>
    <div class="search_wrap">
      <label for="">프로젝트명</label>
      <input type="text">
      <label for="">제안자</label>
      <input type="text">
      <label for="">담당자</label>
      <input type="text">
      <button type="button" class="btn search">검색</button>
      <button type="button" class="btn create">등록</button>
    </div>
    <div class="table_wrap">
      <table>
        <colgroup>
          <col style="width: 50px;">
          <col style="width: 50px;">
          <col style="width: 50px;">
          <col style="width: 50px;">
          <col style="width: 50px;">
          <col style="width: 50px;">
          <col style="width: 100px;">
          <col style="width: 50px;">
        </colgroup>
        <thead>
          <tr>
            <th scope="col"><span>No</span></th>
            <th scope="col"><span>카테고리</span></th>
            <th scope="col"><span>프로젝트명</span></th>
            <th scope="col"><span>제안자</span></th>
            <th scope="col"><span>제안일</span></th>
            <th scope="col"><span>요청부서장</span></th>
            <th scope="col"><span>부서장승인</span></th>
            <th scope="col"><span>IT담당자</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>3</span></td>
            <td><span>T-SYSTEM</span></td>
            <td><span>일단해주세요</span></td>
            <td><span>박떙떙</span></td>
            <td><span>2020-06-05</span></td>
            <td><span>뚱뚱이</span></td>
            <td><span>완료</span></td>
            <td><span>쩡끼쭈</span></td>
          </tr>
          <tr>
            <td><span>2</span></td>
            <td><span>수수료</span></td>
            <td><span>수수료 많이주세요</span></td>
            <td><span>김땡땡</span></td>
            <td><span>2020-05-05</span></td>
            <td><span>떙땡이</span></td>
            <td><span>완료</span></td>
            <td><span>쏜일씅</span></td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td><span>T-SYSTEM</span></td>
            <td><span>아무튼 해주세요</span></td>
            <td><span>김땡땡</span></td>
            <td><span>2020-05-08</span></td>
            <td><span>낑낑이</span></td>
            <td><span>반려</span></td>
            <td><span>꿘쑨용</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pines2'
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}

#pines2 {
  margin: 0 auto;
  width: 1440px;
}

.header {
  border-bottom: 1px solid $border;
  margin-bottom: 80px;

  .title {
    font-size: 20px;
    margin-right: 100px;
    color: $primary;
    display: inline-block;
  }

  .menu {
    display: inline-block;

    .menu-item {
      display: inline-block;
      margin: 0 20px;
      font-weight: bold;
    }
  }
}

.search_wrap {
  label {
    color: $primary;
    padding-right: 10px;
  }

  input {
    border-color: $secondary;
    margin-right: 10px;
    padding: 10px 20px;
  }
}

.tab_wrap {
  border-bottom: 1px solid $secondary;
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;

  .tab-item {
    display: inline-block;
    cursor: pointer;
    padding: 10px 20px;
    margin: 0 1px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: lightgray;

    &.active {
      background-color: $primary;
      color: #fff;
    }
  }
}

.btn {
  padding: 10px 20px;
  background-color: lightgray;
  border: none;
  margin: 0 2px;
  vertical-align: middle;

  &.create {
    background-color: $primary;
    color: #fff;
  }

  &.search {
    background-color: $secondary;
    color: #fff;
  }
}

table {
  margin-top: 20px;
  border-top: 2px solid $secondary;
  border-bottom: 1px solid $border;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  width: 100%;

  th {
    border-radius: 0;
    background: #f0f0f0;
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
