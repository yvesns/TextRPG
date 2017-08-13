var SceneHandler = require('./SceneHandler.js');

class HandlerFactory{
  function createHandler(type){
    if(type == ElementTypeEnum.SCENE){
      return new SceneHandler();
    }
  }
}

module.exports = HandlerFactory;
