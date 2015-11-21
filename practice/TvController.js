//模組的輸出分為static method及public instance method
function TvController(channelList) {
    this.channelList = channelList;
}
module.exports = TvController;

//static method
TvController.openTv = function() {
    console.log('open tv');
};


//public instance method
TvController.prototype.selectChanel = function(channelNumber) {
    console.log('change to channel: ' + this.channelList[channelNumber]);
};
