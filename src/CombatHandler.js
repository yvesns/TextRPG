class CombatHandler{
  this.scene;
  this.campaignState;
  this.combatID;
  var ruleset;

  function handle(scene, campaignState, combatID){
    this.scene = scene;
    this.campaignState = campaignState;
    this.combatID = combatID;
    var response = "";
    var handler;
    ruleset = new DefaultRuleset();

    if(campaignState.element.id !== id){
      campaignState.element = {
        id: id,
        type: "combat",
        phase: "ongoing"
      };

      campaignState.combat = {};
      campaignState.combat.enemies = buildEnemiesArray(scene.combats[id].enemies);
      campaignState.combat.roundEnded = true;
      compaignState.combat.nextActor = 0;
    }

    response = handleRound();

    return response;
  }

  function handleRound(){
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
