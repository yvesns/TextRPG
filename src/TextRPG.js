var HandlerFactory = require('./HandlerFactory.js');

class TextRPG{
  processScene(sceneFile, campaignStateFile){
    var scene = JSON.parse(sceneFile);
    var campaignState = JSON.parse(campaignStateFile);

    return new HandlerFactory().createHandler(campaignState.element.type).handle(scene, campaignState, campaignState.element.id);
  }
}

module.exports = TextRPG;
