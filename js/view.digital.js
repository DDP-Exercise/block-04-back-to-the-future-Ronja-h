"use strict";
export let digitalView = {

    init: function () {
        this.div = document.getElementById("digital");
    },

    update: function (time) {
        const FORMAT = (n) => {
            if (n < 10) {
                return "0" + n;
            }
            return n;
        };
        this.div.textContent =
            FORMAT(time.hours) + ":" +
            FORMAT(time.minutes) + ":" +
            FORMAT(time.seconds);
    }
};
digitalView.init();
