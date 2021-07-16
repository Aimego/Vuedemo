<template>
	<div>
		    <baidu-map 
		        class="map"
		        :scroll-wheel-zoom="true"
		        :center="center"
		        :zoom="zoom"
		        @moving="syncCenterAndZoom"
		        @moveend="syncCenterAndZoom"
		        @zoomend="syncCenterAndZoom">
				<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
				<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
				<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
		    </baidu-map>
			
	</div>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 115.849633,
        lat: 28.611406,
      },
      zoom: 15
    }
  },
  methods: {
     syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    }
  }
}
</script>

<style>
	.map {
	    height: 750px;
	}
	.BMap_geolocationContainer{
		position: absolute;
		right: 0px;
		bottom: 60px;
	}
</style>
