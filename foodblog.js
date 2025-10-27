// --- Vue Local Component: Navbar ---
Vue.component("navbar-component", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <a class="navbar-brand text-warning font-weight-bold" href="#">Food Blog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="item in menu" :key="item">
            <a class="nav-link" href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  data() {
    return {
      menu: ["Home", "Recipes", "Lifestyles", "Videos", "About"],
    };
  },
});

// --- Vue Component: Blog Post ---
Vue.component("blog-post", {
  props: ["post"],
  template: `
    <div class="post card">
      <img
        v-bind:src="'images/profile.png'"
        alt="Profile"
        class="profile-pic"
        @click="$emit('show-profile', post)"
      >
      <div class="post-body">
        <div class="post-meta">
          <span class="author">{{ post.author }}</span> —
          <span class="date">{{ post.date }}</span>
        </div>
        <p class="post-comment">{{ post.comment }}</p>
      </div>
    </div>
  `,
});

// --- Main Vue Instance ---
new Vue({
  el: "#app",
  data: {
    chiliImage: "images/chili.jpg",
    selectedProfile: {},
    posts: [
      {
        id: 1,
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        comment:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs.",
        level: "Novice",
        bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!",
      },
      {
        id: 2,
        author: "LINH",
        date: "February 15, 2021 @ 9:46 am",
        comment:
          "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.",
        level: "Newcomer",
        bio: "Love food! Grew up with meat and potatoes. Recently ventured outside my comfort zone.",
      },
      {
        id: 3,
        author: "CATHERINE LEONARDO",
        date: "February 13, 2021 @ 12:58 pm",
        comment:
          "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread.",
        level: "Intermediate",
        bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!",
      },
      {
        id: 4,
        author: "KALI",
        date: "February 13, 2021 @ 11:31 am",
        comment:
          "Delicious recipe. I added zucchini and carrots for extra vegetables. It turned out amazing!",
        level: "Enthusiast",
        bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
      },
    ],
  },
  methods: {
    showProfile(post) {
      this.selectedProfile = post;
      $("#profileModal").modal("show");
    },
    closeProfile() {
      $("#profileModal").modal("hide");
      this.selectedProfile = {};
    },
  },
});
