import 'SceneHandler';
import 'ElementTypeEnum';

class TextRPG{
  function processScene(sceneFile, campaignStateFile){
    var campaignState = JSON.parse(campaignStateFile);

    new HandlerFactory().createHandler(campaignState.elementType).handle(sceneFile, campaignState);
  }
}
