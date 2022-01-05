<template>
  <transition name="flip" mode="out-in">
    <div v-if="!isDetailShowing" class="home">
      <div class="home-content">
        <div class="profile">
          <img
            src="https://i.imgur.com/stD0Q19.jpg"
            width="150"
            class="img-profile"
          />
        </div>

        <h2 class="text-center">Alvin BAUMA</h2>
        <span
          class="text-center description-profile"
          >4 years Web developer with forward-thinking development professional
          bringing expertise in PHP, Java, SQL, HTML, CSS, JavaScript.</span
        >

        <div class="cotation-bloc">
          <div class="cotation-bloc-item">
            <ios-eye-icon h="30" w="30" />
            <span class="text-center">39</span>
            <span class="text-center">Views</span>
          </div>
          <div class="cotation-bloc-item">
            <ios-thumbs-up-icon h="30" w="30" />
            <span class="text-center">03</span>
            <span class="text-center">Signalers</span>
          </div>
          <div class="cotation-bloc-item">
            <ios-people-icon h="30" w="30" />
            <span class="text-center">45</span>
            <span class="text-center">Connections</span>
          </div>
        </div>

        <div class="experience-bloc">
          <h3>Skills and interests:</h3>
          <div @click="skillDetail" class="experience-bloc-item">
            Experience element dasda
          </div>
          <div class="experience-bloc-item">Experience element</div>
          <div class="experience-bloc-item">Experience element lsajdlsakj</div>
          <div class="experience-bloc-item">Experience</div>
          <div class="experience-bloc-item">Experience element</div>
          <div class="experience-bloc-item">Experience element</div>
          <div class="experience-bloc-item">Experience element lsajdlsakj</div>
          <div class="experience-bloc-item">Experience element dasda</div>
          <div class="experience-bloc-item">Experience element</div>
          <div class="experience-bloc-item">Experience element lsajdlsakj</div>
          <div class="experience-bloc-item">Experience element dasda</div>
        </div>
      </div>
    </div>

    <div v-else class="home">
      <SkillDetail @homePage="skillDetail" />
    </div>
  </transition>
</template>

<script>
import SkillDetail from "@/components/SkillDetail.vue";
import {getProfileByUsername} from "../apis/profile";

export default {
  name: "Home",
  components: {
    SkillDetail,
  },
  data() {
    return {
      isDetailShowing: false,
    };
  },
  mounted() {
    this.searchUserProfile("alvinbm");
  },
  methods: {
    skillDetail() {
      this.isDetailShowing = !this.isDetailShowing;
    },
    searchUserProfile(username){
      getProfileByUsername(username).then(res => {
        console.log("Resultat after", res)
      })
    }
  },
};
</script>


<style scoped>

</style>
