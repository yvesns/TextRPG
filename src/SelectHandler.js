class SelectHandler{
  function handle(scene, campaignState, targetID){
    var response = "";
    var select_options = scene.selects;
    var handler;
    var select = select_options.filter(function(opt){
      return opt.id === targetID;
    });
    response += select.description + "\n\n";
    response += select.options.forEach(function(obj, index){
      	response += index + ": " + obj.description + "\n\n"
    });
    var target = chooseOptions(id_option);

    function chooseOptions(id_option){
      return select.options.filter(function(opt){
        if(opt.id === id_option){
          return opt.targetID;
        }
      });
    }

    if(target.result === undefined){
      //do nothing
    }

    handler = new HandlerFactory().createHandler(scene.defaultActionChain[campaignState.nextSceneAction].targetType);
    response += handler.handle(scene, campaignState, target);
  }
}
