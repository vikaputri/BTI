<template>

    <div class="container text-center">
      <div class="row align-items-start blue">
        <div>1</div>
      </div>
      <div class="row align-items-start">
        <div class="col-sm-6 blue">2</div>
        <div class="col-sm-6 blue">3</div>
      </div>
      <div class="row align-items-start">
        <div class="col-sm-9">
          <div class="row blue1">
            <div class="red1">4</div>
          </div>
          <div class="row">
            <div class="col-sm-4 blue">5</div>
            <div class="col-sm-4 blue">6</div>
            <div class="col-sm-4 blue">7</div>
          </div>
        </div>
        <div class="col-sm-3 blue2">
          <div class="row red2">8</div>
          <div class="row red2">9</div>
          <div class="row red2">10</div>
        </div>
      </div>
    </div>

</template>

<style lang="css">
.red {
  background: red;
  height: 50px;
  border: 5px solid black;
}
.red1 {
  background: red;
  height: 80px;
  border: 5px solid black;
  margin: auto;
  width: 97%;
}
.blue1 {
  height: 100px;
  background: blue;
  border: 5px solid black;
}
.blue {
  height: 50px;
  background: blue;
  border: 5px solid black;
}
.blue2 {
  height: 150px;
  background: blue;
  border: 5px solid black;
  padding-top: 10px;
}
.red2 {
  height: 40px;
  background: red;
  border: 5px solid black;
  margin: auto;
  width: 97%;
}
</style>

