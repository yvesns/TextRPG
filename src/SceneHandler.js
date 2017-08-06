class SceneHandler {
  function handle(sceneFile, campaignState) {
    var response = "";
    var scene = JSON.parse(sceneFile);
    var handler;

    if (scene.description !== "" && campaignState.nextSceneAction === 0) {
      response += scene.description + "\n\n";
    }

    handler = new HandlerFactory().createHandler(scene.defaultActionChain[campaignState.nextSceneAction].targetType);
    response += handler.handle(sceneFile, campaignState, scene.defaultActionChain[campaignState.nextSceneAction].targetID);

    return response;
  }
}
