<template>
    <div class="home-content">

      <div class="detail-header">
          
          <div @click="homePage" class="title cursor-pointer">
            <span><ios-arrow-back-icon h="30" w="30" /></span>
            <h2 style="margin-left : 20px; margin-top : 15px">Skill Details</h2>
          </div>


          <div class="tab">
            <div class="tab-item active">Skill detail</div>
            <div class="tab-item">Experience</div>
            <div class="tab-item">Other peoples with same skill</div>
          </div>
      </div>

      
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    homePage() {
      this.$emit('homePage', {component : "SkillDetail"})
    },
  },
};
</script>


<style scoped>
.detail-header{
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.detail-header .title{
  display: flex;
  align-items: center;
}

.detail-header .tab{
  display: flex;
  border-bottom: 1px solid #48615c;
  
}

.detail-header .tab .tab-item{
  padding: 10px;
  cursor: pointer;
}

.detail-header .tab .tab-item:hover,
.detail-header .tab .tab-item.active{
  border-bottom: 3px solid #48615c;
}

</style>
