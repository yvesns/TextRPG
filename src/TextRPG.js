import 'SceneHandler';
import 'ElementTypeEnum';

class TextRPG{
  function processScene(sceneFile, campaignStateFile){
    var scene = JSON.parse(sceneFile);
    var campaignState = JSON.parse(campaignStateFile);

    new HandlerFactory().createHandler(campaignState.elementType).handle(scene, campaignState);
  }
}
