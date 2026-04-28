"use strict";
export let analogueView = {
    init: function () {
        this.hoursHand = document.querySelector(".hand.hours");
        this.minutesHand = document.querySelector(".hand.minutes");
        this.secondsHand = document.querySelector(".hand.seconds");
    },
    update: function ({ hours, minutes, seconds }) {
        const SECDEG = seconds * 6;
        const MINDEG = minutes * 6 + seconds * 0.1;
        const HOURDEG = (hours % 12) * 30 + minutes * 0.5;

        this.secondsHand.style.transform = `rotate(${SECDEG}deg)`;
        this.minutesHand.style.transform = `rotate(${MINDEG}deg)`;
        this.hoursHand.style.transform = `rotate(${HOURDEG}deg)`;
    }
}
analogueView.init();