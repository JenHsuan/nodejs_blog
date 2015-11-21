var TvController = require('./TvController.js');

TvController.openTv();

var NewTvController = new TvController(["new", "cartoons", "sports"]);

NewTvController.selectChanel(0);
