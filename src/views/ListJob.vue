<template>
  <div class="home">
    <header class="py-4">
        <div class="d-flex justify-content-center">
          <h1 class="ms-3">Job List</h1>
        </div>

        <div class="py-3 container mt-4">
          <div class="row">
            <div class="col-sm-6 mb-3">
              <div class="card bg-light">
                <div class="d-flex justify-content-between">
                  <div class="p-2 mt-1 text-success">Marketing Planer</div>
                  <div class="p-2">
                    <b-button v-b-toggle.collapse-1 variant="warning">See Job</b-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 mb-3">
              <div class="card bg-light">
                <div class="d-flex justify-content-between">
                  <div class="p-2 mt-1 text-success">Marketing Planer</div>
                  <div class="p-2">
                    <b-button v-b-toggle.collapse-1 variant="warning">See Job</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <b-collapse id="collapse-1" class="mt-2">
            <b-card class="bg-light">
              <div class="card-text">
                <h2 class="text-success mb-2">Marketing Planner</h2>
                <h5><strong>Job Description :</strong></h5>
                  <ul>
                    <li>Monitor competition to identify new industry trends and opportunities for innovation</li>
                    <li>Develop marketing strategies based on customer preferences, business objectives, and available resources</li>
                    <li>Conduct market research to identify potential customers and assess their needs, interests, and preferences</li>
                    <li>Work with design teams to develop marketing materials such as brochures, ads, and presentations</li>
                    <li>Create an advertising budget that reflects the company’s priorities while remaining within the parameters set by upper management</li>
                    <li>Develop an effective communications strategy for each campaign using several different channels, including social media, email, push notification, print ads</li><li>Create a detailed timeline of all marketing activities, including production schedules, deadlines for materials delivery, and event dates and locations</li>
                    <li>Provide feedback to superiors regarding the effectiveness of new campaigns and recommend adjustments</li>
                  </ul>
                <h5><strong>Skill :</strong></h5>
                  <ul>
                    <li>Minimum bachelor degree in Marketing Management;</li>
                    <li>Minimum 3-5 years experience as Marketing Manager/Director in any marketplace industry;</li>
                    <li>Good time management and project management skill;</li>
                    <li>Creative communication skill in both verbal and design</li>
                    <li>Multi-language abilities in verbal and non-verbal</li>
                  </ul>
              </div>
            </b-card>
          </b-collapse>
        </div>
        
        <div class="container">
          <div class="row">
            <div class="col-sm-6 mb-3">
              <div class="card bg-light">
                <div class="d-flex justify-content-between">
                  <div class="p-2 mt-1 text-success">Marketing Planer</div>
                  <div class="p-2">
                    <b-button v-b-toggle.collapse-2 variant="warning">See Job</b-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 mb-3">
              <div class="card bg-light">
                <div class="d-flex justify-content-between">
                  <div class="p-2 mt-1 text-success">Marketing Planer</div>
                  <div class="p-2">
                    <b-button v-b-toggle.collapse-2 variant="warning">See Job</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <b-collapse id="collapse-2" class="mt-2">
            <b-card class="bg-light">
              <div class="card-text">
                <h2 class="text-success">Marketing Planner</h2>
                <h5><strong>Job Description :</strong></h5>
                  <ul>
                    <li>Monitor competition to identify new industry trends and opportunities for innovation</li>
                    <li>Develop marketing strategies based on customer preferences, business objectives, and available resources</li>
                    <li>Conduct market research to identify potential customers and assess their needs, interests, and preferences</li>
                    <li>Work with design teams to develop marketing materials such as brochures, ads, and presentations</li>
                    <li>Create an advertising budget that reflects the company’s priorities while remaining within the parameters set by upper management</li>
                    <li>Develop an effective communications strategy for each campaign using several different channels, including social media, email, push notification, print ads</li><li>Create a detailed timeline of all marketing activities, including production schedules, deadlines for materials delivery, and event dates and locations</li>
                    <li>Provide feedback to superiors regarding the effectiveness of new campaigns and recommend adjustments</li>
                  </ul>
                <h5><strong>Skill :</strong></h5>
                  <ul>
                    <li>Minimum bachelor degree in Marketing Management;</li>
                    <li>Minimum 3-5 years experience as Marketing Manager/Director in any marketplace industry;</li>
                    <li>Good time management and project management skill;</li>
                    <li>Creative communication skill in both verbal and design</li>
                    <li>Multi-language abilities in verbal and non-verbal</li>
                  </ul>
              </div>
            </b-card>
          </b-collapse>
        </div>
      </header>
  </div>
</template>

<script>

//import axios from 'axios'

export default {
  name: 'ListJob',
  data() {
    return {
      visible: false,
      //answer: {},
    };
  },
  //methods: {
  //  async getAnswer() {
  //    const { data } = await axios.get("https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth");
  //    this.answer = data;
  //  },
  //},
  //beforeMount() {
  //  this.getAnswer();
  //},
}
</script>
