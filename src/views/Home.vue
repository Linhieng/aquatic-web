<template>
  <div class="home">
    <keep-alive>
      <el-container>
        <el-header>
          <div class="header">
            <div class="left">
              <span>蓝色粮仓水产品冷藏运输</span>
            </div>
            <div>
              <div class="avatar">
                <el-button type="text" @click="dialogVisible = true">用户信息</el-button>
                <el-dialog
                  title="用户信息"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose"
                  style="height:70%">
                  <div>用户的姓名、账号</div>
                </el-dialog>
              </div>
              <div class="toHome">
                <a href="#/login" @click="returnLogin">退出登录</a>
              </div>
            </div>
          </div>
        </el-header>
        <el-container>
          <el-aside width="20rem">
            <div class="aside">
              <div class="items">
                <el-menu
                  :default-active="defaultLink"
                  class="el-menu-vertical-demo"
                  :router="true"
                  background-color="#7db6ff"
                  text-color="#fff"
                  active-text-color="#ffffff"
                >
                  <el-menu-item
                    :index="item.link"
                    v-for="item in items"
                    :key="item.link"
                  >
                    <span>{{ item.name }}</span>
                  </el-menu-item>
                </el-menu>
              </div>
            </div>
          </el-aside>
          <el-main>
            <el-card class="box-card">
              <div class="body">
                <router-view></router-view>
              </div>
            </el-card>
          </el-main>
        </el-container>
      </el-container>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      items: [
        {
          name: "录入信息",
          link: "/inMess",
        },
        {
          name: "查询信息",
          link: "/inquireMess",
        },
        {
          name: "统计信息",
          link: "/statisticsMess",
        },
        {
          name: "跟踪路线",
          link: "/map",
        }
      ],
      defaultLink: '',
      dialogVisible: false
    };
  },
  mounted() {
    this.defaultLink = this.$router.history.current.fullPath
  },
  methods: {
    returnLogin() {
      localStorage.removeItem("Flag");
      this.$router.push("/login");
    },
    handleClose(done) {
      done();
    }
  }
};
</script>
<style lang="stylus" scoped>
.home {
  .el-container {
    height: auto;
    width: 100%;

    .el-header {
      height: 5.5rem !important;
      width: 100%;
      padding: 0;
      box-sizing: border-box;
    }

    .el-container {
      height: calc(100vh - 5.5rem);
      width: 100%;

      .el-aside {
        min-height: 100%;
        display: flex;
        flex-direction: column;

        .aside {
          padding: 1rem 0;

          .items {
            .el-menu {
              .is-active {
                background-color: #4596ff !important;
                font-size: 1.6rem;
                font-weight: 600;
              }
            }
          }
        }
      }

      .el-main {
        min-height: 100%;
        overflow: hidden;
      }

      .box-card {
        height: 100%;
        width: auto;
        overflow-y: scroll;
      }
    }
  }

  .header {
    height: 100%;
    background-color: #4596ff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between
    .left {
      padding: 0 3rem;
      font-weight: 600;
      color: #fff;
      font-size: 2rem;
    }

    .avatar, .toHome {
      padding: 0 2rem
      height: 30px;
      width: 100px;
      
      a,
      .el-button{
        color: #fff;
        font-size:20px;
        text-decoration: none;
        text-align: center
      }

      .el-button {
        line-height: 5px
      }

    }
    

    div{
      display: flex
      flex-direction: row
    }
    
  }

  .aside {
    height: 100%;
    width: 100%;
    background-color: #F5F5F5;

    .items {
      display: flex;
      flex-direction: column;

      .item {
        height: 5rem;
        width: 100%;
      }
    }
  }
}
</style>
