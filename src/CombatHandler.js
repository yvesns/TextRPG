class CombatHandler{
  function handle(scene, campaignState, id){
    var response = "";
    var handler;
    var ruleset = new DefaultRuleset();

    if(campaignState.element.id !== id){
      campaignState.element = {
        id: id,
        type: "combat",
        phase: "ongoing"
      };

      campaignState.combat = {};
      campaignState.combat.enemies = buildEnemiesArray(scene.combats[id].enemies);
    }

    return response;
  }

  function buildEnemiesArray(sceneEnemies){
    var enemies = [];

    for(var i = 0; i < sceneEnemies.length; i++){
      while(sceneEnemies[i].quantity > 0){
        enemies.push(copyEnemy(sceneEnemies[i]));
      }
    }
  }

  function copyEnemy(original){
    var copy = {
      id: original.id,
    };

    return copy;
  }
}
