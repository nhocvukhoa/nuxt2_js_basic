<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck {{ $route.params.id }}: Learn english</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary">Add more card</button>
        </div>
        <hr class="divide" />
        <div class="cards">
          <div class="r">
            <div class="c_3">
              <div class="card">
                <div class="front-card">
                  <img
                    src="https://gotrangtri.vn/wp-content/uploads/2020/07/thiet-ke-shop-quan-ao.jpg"
                    alt="Thumbnail card"
                  />
                </div>
                <div class="back-card">
                  <h6>Shop</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
}
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .divide {
    margin: 2rem 0;
  }
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
}
</style>
