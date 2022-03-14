<template>
<div>
    <div id="menu-card-pane" class="net-cards-outer">
        <div class="net-card-title">
            <h1>nft cards</h1>
        </div>
        <div class="net-card-slider">
            <div class="net-card-slider-items">
                <div class="net-card" v-for="image in images" :key="image.URL">
                    <img :src="`/images/${ image.URL}.png`">
                </div>
            </div>
            <div class="net-card-slider-items">
                <div class="net-card" v-for="img in item" :key="img.URL">
                    <img :src="`/images/${ img.URL}.png`">
                </div>
            </div>
        </div>

        <!--  <div class="net-card-slider">
            <div class="net-card-slider-items">
                <div class="net-card"><img src="@/assets/images/cards-1.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-2.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-3.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-4.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-5.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-6.png" alt=""></div>
            </div>
            <div class="net-card-slider-items">
                <div class="net-card"><img src="@/assets/images/cards-7.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-8.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-9.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-10.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-11.png" alt=""></div>
                <div class="net-card"><img src="@/assets/images/cards-12.png" alt=""></div>
            </div>
        </div> -->
    </div>

    <div class="fund-babies-outer">
        <div class="container">

            <img class="fund-baby-img-1" src="@/assets/images/trust-fund-babies-1.png" alt="" />
            <img class="fund-baby-img-2" src="@/assets/images/trust-fund-babies-2.png" alt="" />

            <div class="fund-babies-content">
                <h2>Trust Fund <span>Babies</span></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
        </div>

        <div class="baby-form-outer">
            <form class="fund-babies-form">
                <div class="fund-baby-ques">
                    <label>You can mint 20 moneys at a time</label>
                    <input type="text" placeholder="0 / 1000 Minted" value="0 / 1000 Minted">
                </div>
                <div class="fund-baby-quant">
                    <label>QUANTITY</label>
                    <input @click="count=count-1" type="text" placeholder="" value="">
                </div>
                <div class="fund-baby-val">
                    <label>&nbsp;</label>
                    <span>{{count}}</span>
                </div>
                <div class="fund-baby-opt">
                    <label>&nbsp;</label>
                    <input @click="count=count+1" type="text" placeholder="" value="">
                </div>
                <div class="fund-baby-mint">
                    <label>&nbsp;</label>
                    <input type="submit" value="mint a money" />
                </div>
            </form>
        </div>
    </div>

    <div class="enlighted-alpha">
        <div class="enlighted-alpha-left">

            <div class="color-expanded color-blue">
                <h3><img src="@/assets/images/alpha-data.png" alt=""></h3>
            </div>

            <h2>ENLIGHTENED ALpha</h2>
            <p>High level alpha group with some of the biggest market movers and influencers in the space.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>

        <div class="enlighted-alpha-right">
            <ul class="list-unstyled">
                <li><label class="alpha-1"><span></span>// FEUDALISTIC DAO</label></li>
                <li><label class="alpha-2"><span></span>// INCLUDED CONTRACTs</label></li>
                <li><label class="alpha-3"><span></span>// EXCLUSIVE COMMUNITY</label></li>
                <li><label class="alpha-4"><span></span>// WHITE LISt</label></li>
                <li><label class="alpha-5"><span></span>// FREE MINTS</label></li>
            </ul>
        </div>
    </div>

    <div class="project-reviews-outer">
        <div class="container">
            <ul class="nav nav-tabs" id="projectReviewsTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="daiko-tab" data-toggle="tab" href="#daiko" role="tab" aria-controls="daiko" aria-selected="true">daiko</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="shuHaRi-tab" data-toggle="tab" href="#shuHaRi" role="tab" aria-controls="shuHaRi" aria-selected="false">ShuHaRi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="sohei-tab" data-toggle="tab" href="#sohei" role="tab" aria-controls="sohei" aria-selected="false">Sohei</a>
                </li>
            </ul>
        </div>
        <div class="tab-content" id="projectReviewsTabContent">
            <div class="tab-pane fade show active" id="daiko" role="tabpanel" aria-labelledby="daiko-tab">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col-12 col-md-7 revTab-left">
                            <h4>DESCRIPTION</h4>
                            <p>Daiko is short for Daikokuten; the Japanese deity of fortune and wealth, the legacy of Daiko is
                                embraced by the members of the faction.</p>
                            <p>The Daiko are a spiritual class of warriors who are empowered by the belief that fortune favors the
                                prepared and eludes the unprepared.</p>
                            <p>The Daiko warriors have learned to never embrace defeat and to find a way to bring the pleasures of
                                the mind into existence.</p>
                        </div>

                        <div class="col-12 col-md-5 revTab-right pt-revTab-right">
                            <hr>
                            <img src="@/assets/images/mission-statment.png" alt="" class="d-none d-lg-block img-fluid" />
                            <h4>MISSION STATEMENT</h4>
                            <p>Perception is 9/10th of everything. How you are perceived is how you are judged. Old keys won’t open
                                new doors. Break free from the resistance and embrace the future.</p>
                        </div>

                        <div class="w-100">
                            <hr>
                        </div>

                        <div class="col-12 col-md-7 revTab-left pl-0">
                            <h4>SKILLS</h4>
                            <p>Branding, Marketing, Business, Sales, Vision, Sponsorships, Collaborations, Merchandising, Training,
                                Motivation</p>
                        </div>

                        <div class="col-12 col-md-5 revTab-right pl-0 mobile-img">
                            <h4>CORPORATIONS</h4>
                            <p>Branding, Merchants</p>
                            <img src="@/assets/images/mission-statment.png" alt="" class="d-inline-block d-lg-none img-fluid" />
                        </div>

                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="shuHaRi" role="tabpanel" aria-labelledby="shuHaRi-tab">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col-12 col-md-7 revTab-left">
                            <h4>DESCRIPTION</h4>
                            <p>Daiko is short for Daikokuten; the Japanese deity of fortune and wealth, the legacy of Daiko is
                                embraced by the members of the faction.</p>
                            <p>The Daiko are a spiritual class of warriors who are empowered by the belief that fortune favors the
                                prepared and eludes the unprepared.</p>
                            <p>The Daiko warriors have learned to never embrace defeat and to find a way to bring the pleasures of
                                the mind into existence.</p>
                        </div>

                        <div class="col-12 col-md-5 revTab-right pt-revTab-right">
                            <hr>
                            <img src="@/assets/images/mission-statment.png" alt="" class="d-none d-lg-block img-fluid" />
                            <h4>MISSION STATEMENT</h4>
                            <p>Perception is 9/10th of everything. How you are perceived is how you are judged. Old keys won’t open
                                new doors. Break free from the resistance and embrace the future.</p>
                        </div>

                        <div class="w-100">
                            <hr>
                        </div>

                        <div class="col-12 col-md-7 revTab-left pl-0">
                            <h4>SKILLS</h4>
                            <p>Branding, Marketing, Business, Sales, Vision, Sponsorships, Collaborations, Merchandising, Training,
                                Motivation</p>
                        </div>

                        <div class="col-12 col-md-5 revTab-right pl-0 mobile-img">
                            <h4>CORPORATIONS</h4>
                            <p>Branding, Merchants</p>
                            <img src="@/assets/images/mission-statment.png" alt="" class="d-inline-block d-lg-none img-fluid" />
                        </div>

                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="sohei" role="tabpanel" aria-labelledby="sohei-tab">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col-12 col-md-7 revTab-left">
                            <h4>DESCRIPTION</h4>
                            <p>Daiko is short for Daikokuten; the Japanese deity of fortune and wealth, the legacy of Daiko is
                                embraced by the members of the faction.</p>
                            <p>The Daiko are a spiritual class of warriors who are empowered by the belief that fortune favors the
                                prepared and eludes the unprepared.</p>
                            <p>The Daiko warriors have learned to never embrace defeat and to find a way to bring the pleasures of
                                the mind into existence.</p>
                        </div>

                        <div class="col-12 col-md-5 revTab-right pt-revTab-right">
                            <hr>
                            <img src="@/assets/images/mission-statment.png" alt="" class="d-none d-lg-block img-fluid" />
                            <h4>MISSION STATEMENT</h4>
                            <p>Perception is 9/10th of everything. How you are perceived is how you are judged. Old keys won’t open
                                new doors. Break free from the resistance and embrace the future.</p>
                        </div>

                        <div class="w-100">
                            <hr>
                        </div>

                        <div class="col-12 col-md-7 revTab-left pl-0">
                            <h4>SKILLS</h4>
                            <p>Branding, Marketing, Business, Sales, Vision, Sponsorships, Collaborations, Merchandising, Training,
                                Motivation</p>
                        </div>

                        <div class="col-12 col-md-5 revTab-right pl-0 mobile-img">
                            <h4>CORPORATIONS</h4>
                            <p>Branding, Merchants</p>
                            <img src="@/assets/images/mission-statment.png" alt="" class="d-inline-block d-lg-none img-fluid" />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <hr>
    </div>

    <div class="playable-outer">
        <div class="container">
            <div class="row">
                <div class="playable-left">
                    <div class="text-white">
                        <h1>playable <span>character selection</span></h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. </p>
                    </div>

                    <div class="text-black mt-80">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. </p>
                        <img src="@/assets/images/playable.png" alt="" class="mb-sm-4 img-fluid" />
                    </div>
                </div>
                <div class="playable-right text-black">
                    <img src="@/assets/images/playable-baby.png" alt="playable-baby" class="img-fluid mb-50" />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            count: 2,
            images: [{
                    URL: 'cards-1'
                },
                {
                    URL: 'cards-2'
                },
                {
                    URL: 'cards-3'
                },
                {
                    URL: 'cards-4'
                },
                {
                    URL: 'cards-5'
                },
                {
                    URL: 'cards-6'
                },
            ],
            item: [{
                    URL: 'cards-7'
                },
                {
                    URL: 'cards-8'
                },
                {
                    URL: 'cards-9'
                },
                {
                    URL: 'cards-10'
                },
                {
                    URL: 'cards-11'
                },
                {
                    URL: 'cards-12'
                },
            ],
            heading: [{
                    name: '// FEUDALISTIC DAO'
                },
                {
                    name: '// INCLUDED CONTRACTs'
                },
                {
                    name: '// EXCLUSIVE COMMUNITY'
                },
                {
                    name: '// WHITE LISt'
                },
                {
                    name: '// FREE MINTS'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
