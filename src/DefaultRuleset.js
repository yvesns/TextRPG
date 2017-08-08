class DefaultRuleset{
  function calculateInitiatives(scene, campaignState, combatID, enemies){
    var combat = scene.combats[combatID];
    var players = campaignState.players;
    var dice = new Dice();

    for(var i = 0; i < players.length; i++){
      players[i].initiative = dice.roll(10);

      for(var j = 0; j < players[i].modifiers.length; j++){
        if(players[i].modifiers[j].type === "initiative"){
          players[i].initiative += players[i].modifiers[j].value;
        }
      }

      for(var j = 0; j < combat.playerModifiers.length; j++){
        if(combat.playerModifiers[j].type === "initiative"){
          players[i].initiative += combat.playerModifiers[j].value;
        }
      }
    }

    for(var i = 0; i < enemies.length; i++){
      enemies[i].initiative = dice.roll(10);

      for(var j = 0; j < enemies[i].modifiers.length; j++){
        if(enemies[i].modifiers[j].type === "initiative"){
          enemies[i].initiative += enemies[i].modifiers[j].value;
        }
      }

      for(var j = 0; j < combat.enemyModifiers.length; j++){
        if(combat.enemyModifiers[j].type === "initiative"){
          enemies[i].initiative += combat.enemyModifiers[j].value;
        }
      }
    }
  }
}
