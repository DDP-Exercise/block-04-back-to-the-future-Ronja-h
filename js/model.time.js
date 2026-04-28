"use strict";
export const timeModel = {
    time: new Date(),
    update: function(){
        this.time = new Date();
    },
    getHours: function(){
        return this.time.getHours();
    },
    getMinutes: function(){
        return this.time.getMinutes();
    },
    getSeconds: function(){
        return this.time.getSeconds();
    }
};