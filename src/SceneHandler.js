var HandlerFactory = require('./HandlerFactory.js');

class SceneHandler{
  handle(scene, campaignState, id){
    var response = "";
    var handler;

    if (scene.description !== "" && campaignState.nextSceneAction === 0) {
      response += scene.description + "\n\n";
    }

    handler = new HandlerFactory().createHandler(scene.defaultActionChain[campaignState.nextSceneAction].targetType);
    response += handler.handle(scene, campaignState, scene.defaultActionChain[campaignState.nextSceneAction].targetID);
    campaignState.nextSceneAction++;

    return response;
  }
}

module.exports = SceneHandler;
