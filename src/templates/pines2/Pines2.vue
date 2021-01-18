<template>
  <div>
    <h2>PINES 2</h2>
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
        <li class="tab-item">프로그램 요청</li>
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
      <button type="button">검색</button>
      <button type="button">등록</button>
    </div>
    <div class="table_wrap">
      <table>
        <colgroup>
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
            <td><span>-</span></td>
            <td><span>-</span></td>
            <td><span>-</span></td>
            <td><span>-</span></td>
            <td><span>-</span></td>
            <td><span>-</span></td>
            <td><span>-</span></td>
            <td><span>-</span></td>
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
.header {
  .title {
    display: inline-block;
  }

  .menu {
    display: inline-block;

    .menu-item {
      display: inline-block;
      background-color: $primary;
    }
  }
}
</style>
