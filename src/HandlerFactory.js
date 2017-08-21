var SceneHandler = require('./SceneHandler.js');

class HandlerFactory{
  createHandler(type){
    if(type == ElementTypeEnum.SCENE){
      return new SceneHandler();
    }
  }
}

module.exports = HandlerFactory;
