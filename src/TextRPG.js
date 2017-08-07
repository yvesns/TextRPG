import 'SceneHandler';
import 'ElementTypeEnum';

class TextRPG{
  function processScene(sceneFile, campaignStateFile){
    var scene = JSON.parse(sceneFile);
    var campaignState = JSON.parse(campaignStateFile);

    return new HandlerFactory().createHandler(campaignState.element.type).handle(scene, campaignState, campaignState.element.id);
  }
}
