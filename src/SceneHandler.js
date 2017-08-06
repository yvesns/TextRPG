<<<<<<< HEAD
class SceneHandler {
  function handle(sceneFile, campaignState) {
=======
class SceneHandler{
  function handle(scene, campaignState){
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
