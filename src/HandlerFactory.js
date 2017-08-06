class HandlerFactory{
  function createHandler(type){
    if(type == ElementTypeEnum.SCENE){
      return new SceneHandler();
    }
  }
}
