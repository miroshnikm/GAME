gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595DirtObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595DirtObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595Dirt2Objects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595Dirt2Objects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595Stone2Objects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595Stone2Objects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects2= [];
gdjs.Game_32SceneCode.GDCoinObjects1= [];
gdjs.Game_32SceneCode.GDCoinObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDBoundaryObjects1= [];
gdjs.Game_32SceneCode.GDBoundaryObjects2= [];
gdjs.Game_32SceneCode.GDJump_9595Up_9595HereObjects1= [];
gdjs.Game_32SceneCode.GDJump_9595Up_9595HereObjects2= [];
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1= [];
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects2= [];
gdjs.Game_32SceneCode.GDBackground1Objects1= [];
gdjs.Game_32SceneCode.GDBackground1Objects2= [];
gdjs.Game_32SceneCode.GDBackground2Objects1= [];
gdjs.Game_32SceneCode.GDBackground2Objects2= [];
gdjs.Game_32SceneCode.GDBackground3Objects1= [];
gdjs.Game_32SceneCode.GDBackground3Objects2= [];
gdjs.Game_32SceneCode.GDBackground4Objects1= [];
gdjs.Game_32SceneCode.GDBackground4Objects2= [];
gdjs.Game_32SceneCode.GDBackground5Objects1= [];
gdjs.Game_32SceneCode.GDBackground5Objects2= [];
gdjs.Game_32SceneCode.GDBackground6Objects1= [];
gdjs.Game_32SceneCode.GDBackground6Objects2= [];
gdjs.Game_32SceneCode.GDBackground7Objects1= [];
gdjs.Game_32SceneCode.GDBackground7Objects2= [];
gdjs.Game_32SceneCode.GDEnemy_9595textObjects1= [];
gdjs.Game_32SceneCode.GDEnemy_9595textObjects2= [];
gdjs.Game_32SceneCode.GDheartObjects1= [];
gdjs.Game_32SceneCode.GDheartObjects2= [];
gdjs.Game_32SceneCode.GDheart2Objects1= [];
gdjs.Game_32SceneCode.GDheart2Objects2= [];
gdjs.Game_32SceneCode.GDheart3Objects1= [];
gdjs.Game_32SceneCode.GDheart3Objects2= [];
gdjs.Game_32SceneCode.GDSpeed_9595boostObjects1= [];
gdjs.Game_32SceneCode.GDSpeed_9595boostObjects2= [];
gdjs.Game_32SceneCode.GDclosed_9595doorObjects1= [];
gdjs.Game_32SceneCode.GDclosed_9595doorObjects2= [];
gdjs.Game_32SceneCode.GDcollect_9595coinsObjects1= [];
gdjs.Game_32SceneCode.GDcollect_9595coinsObjects2= [];
gdjs.Game_32SceneCode.GDtotal_9595coinsObjects1= [];
gdjs.Game_32SceneCode.GDtotal_9595coinsObjects2= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32SceneCode.GDclosed_9595door_95952Objects1= [];
gdjs.Game_32SceneCode.GDclosed_9595door_95952Objects2= [];
gdjs.Game_32SceneCode.GDhmmObjects1= [];
gdjs.Game_32SceneCode.GDhmmObjects2= [];
gdjs.Game_32SceneCode.GDopened_9595doorObjects1= [];
gdjs.Game_32SceneCode.GDopened_9595doorObjects2= [];
gdjs.Game_32SceneCode.GDalso_9595closedObjects1= [];
gdjs.Game_32SceneCode.GDalso_9595closedObjects2= [];
gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects1= [];
gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects2= [];
gdjs.Game_32SceneCode.GDarrowObjects1= [];
gdjs.Game_32SceneCode.GDarrowObjects2= [];
gdjs.Game_32SceneCode.GDlook_9595upObjects1= [];
gdjs.Game_32SceneCode.GDlook_9595upObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects2= [];


gdjs.Game_32SceneCode.mapOfEmptyGDCoinObjects = Hashtable.newFrom({"Coin": []});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Game_32SceneCode.GDCoinObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Platform_Stone"), gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1[i].isCollidingWithPoint((( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointX("Checker")), (( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1[k] = gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Platform_Stone"), gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1[i].isCollidingWithPoint((( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointX("Checker")), (( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1[k] = gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.asyncCallback12516964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12516964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSpeed_95959595boostObjects1Objects = Hashtable.newFrom({"Speed_boost": gdjs.Game_32SceneCode.GDSpeed_9595boostObjects1});
gdjs.Game_32SceneCode.asyncCallback12520612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(100);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(150);
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12520612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDclosed_95959595door_959595952Objects1Objects = Hashtable.newFrom({"closed_door_2": gdjs.Game_32SceneCode.GDclosed_9595door_95952Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDopened_95959595doorObjects1Objects = Hashtable.newFrom({"opened_door": gdjs.Game_32SceneCode.GDopened_9595doorObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDsuper_95959595Speed_95959595boost2Objects1Objects = Hashtable.newFrom({"super_Speed_boost2": gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects1});
gdjs.Game_32SceneCode.asyncCallback12526484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(100);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(150);
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12526484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595FakeObjects1Objects = Hashtable.newFrom({"Platform_Fake": gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects1});
gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("also_closed"), gdjs.Game_32SceneCode.GDalso_9595closedObjects1);
gdjs.copyArray(runtimeScene.getObjects("heart"), gdjs.Game_32SceneCode.GDheartObjects1);
gdjs.copyArray(runtimeScene.getObjects("heart2"), gdjs.Game_32SceneCode.GDheart2Objects1);
gdjs.copyArray(runtimeScene.getObjects("heart3"), gdjs.Game_32SceneCode.GDheart3Objects1);
gdjs.copyArray(runtimeScene.getObjects("opened_door"), gdjs.Game_32SceneCode.GDopened_9595doorObjects1);
gdjs.copyArray(runtimeScene.getObjects("total_coins"), gdjs.Game_32SceneCode.GDtotal_9595coinsObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "brackeys_platformer_assets\\brackeys_platformer_assets\\music\\time_for_adventure.mp3", 0, true, 40, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheartObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDtotal_9595coinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDtotal_9595coinsObjects1[i].getBehavior("Text").setText("/" + gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfEmptyGDCoinObjects)));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDalso_9595closedObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDalso_9595closedObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDopened_9595doorObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDopened_9595doorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Game_32SceneCode.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("")) - 1000, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointY("")) - 1000, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("")) + 1000, (( gdjs.Game_32SceneCode.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundaryObjects1[0].getPointY("")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Game_32SceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("UI_Score"), gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "1\\amm_Ihe5wuCN.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects1[k] = gdjs.Game_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects1[k] = gdjs.Game_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("heart"), gdjs.Game_32SceneCode.GDheartObjects1);
gdjs.copyArray(runtimeScene.getObjects("heart2"), gdjs.Game_32SceneCode.GDheart2Objects1);
gdjs.copyArray(runtimeScene.getObjects("heart3"), gdjs.Game_32SceneCode.GDheart3Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDheartObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart3Objects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("heart"), gdjs.Game_32SceneCode.GDheartObjects1);
gdjs.copyArray(runtimeScene.getObjects("heart2"), gdjs.Game_32SceneCode.GDheart2Objects1);
gdjs.copyArray(runtimeScene.getObjects("heart3"), gdjs.Game_32SceneCode.GDheart3Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDheartObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart3Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("heart"), gdjs.Game_32SceneCode.GDheartObjects1);
gdjs.copyArray(runtimeScene.getObjects("heart2"), gdjs.Game_32SceneCode.GDheart2Objects1);
gdjs.copyArray(runtimeScene.getObjects("heart3"), gdjs.Game_32SceneCode.GDheart3Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDheartObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart3Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("heart"), gdjs.Game_32SceneCode.GDheartObjects1);
gdjs.copyArray(runtimeScene.getObjects("heart2"), gdjs.Game_32SceneCode.GDheart2Objects1);
gdjs.copyArray(runtimeScene.getObjects("heart3"), gdjs.Game_32SceneCode.GDheart3Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDheartObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDheart3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDheart3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12514788);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12516500);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12517964);
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12518156);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "brackeys_platformer_assets\\brackeys_platformer_assets\\sounds\\explosion.wav", 1, false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Game_32SceneCode.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getY() > (( gdjs.Game_32SceneCode.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundaryObjects1[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed_boost"), gdjs.Game_32SceneCode.GDSpeed_9595boostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSpeed_95959595boostObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDSpeed_9595boostObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSpeed_9595boostObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSpeed_9595boostObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "1\\boost-sound_OnbR5Y4W.mp3", 1, false, 30, 1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(200);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(230);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("collect_coins"), gdjs.Game_32SceneCode.GDcollect_9595coinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("opened_door"), gdjs.Game_32SceneCode.GDopened_9595doorObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcollect_9595coinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcollect_9595coinsObjects1[i].getBehavior("Text").setText("HAHAAHAHAHA ITS CLOSED");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDopened_9595doorObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDopened_9595doorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("closed_door_2"), gdjs.Game_32SceneCode.GDclosed_9595door_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDclosed_95959595door_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("also_closed"), gdjs.Game_32SceneCode.GDalso_9595closedObjects1);
gdjs.copyArray(runtimeScene.getObjects("hmm"), gdjs.Game_32SceneCode.GDhmmObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDalso_9595closedObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDalso_9595closedObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDhmmObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDhmmObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "1\\ураа.mp3", 1, false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("opened_door"), gdjs.Game_32SceneCode.GDopened_9595doorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDopened_95959595doorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "winner", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("super_Speed_boost2"), gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDsuper_95959595Speed_95959595boost2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "1\\cinaaa_fUpxSKlm.mp3", 1, false, 50, 1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(300);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(400);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_Fake"), gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595FakeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595DirtObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595DirtObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Dirt2Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Dirt2Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Stone2Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Stone2Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDJump_9595Up_9595HereObjects1.length = 0;
gdjs.Game_32SceneCode.GDJump_9595Up_9595HereObjects2.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackground1Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground1Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground2Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground2Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground3Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground3Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground4Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground4Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground5Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground5Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground6Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground6Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground7Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground7Objects2.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595textObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595textObjects2.length = 0;
gdjs.Game_32SceneCode.GDheartObjects1.length = 0;
gdjs.Game_32SceneCode.GDheartObjects2.length = 0;
gdjs.Game_32SceneCode.GDheart2Objects1.length = 0;
gdjs.Game_32SceneCode.GDheart2Objects2.length = 0;
gdjs.Game_32SceneCode.GDheart3Objects1.length = 0;
gdjs.Game_32SceneCode.GDheart3Objects2.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595boostObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595boostObjects2.length = 0;
gdjs.Game_32SceneCode.GDclosed_9595doorObjects1.length = 0;
gdjs.Game_32SceneCode.GDclosed_9595doorObjects2.length = 0;
gdjs.Game_32SceneCode.GDcollect_9595coinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDcollect_9595coinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDtotal_9595coinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDtotal_9595coinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDclosed_9595door_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDclosed_9595door_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDhmmObjects1.length = 0;
gdjs.Game_32SceneCode.GDhmmObjects2.length = 0;
gdjs.Game_32SceneCode.GDopened_9595doorObjects1.length = 0;
gdjs.Game_32SceneCode.GDopened_9595doorObjects2.length = 0;
gdjs.Game_32SceneCode.GDalso_9595closedObjects1.length = 0;
gdjs.Game_32SceneCode.GDalso_9595closedObjects2.length = 0;
gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects1.length = 0;
gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects2.length = 0;
gdjs.Game_32SceneCode.GDarrowObjects1.length = 0;
gdjs.Game_32SceneCode.GDarrowObjects2.length = 0;
gdjs.Game_32SceneCode.GDlook_9595upObjects1.length = 0;
gdjs.Game_32SceneCode.GDlook_9595upObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList5(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595DirtObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595DirtObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Dirt2Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Dirt2Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595StoneObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Stone2Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Stone2Objects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDJump_9595Up_9595HereObjects1.length = 0;
gdjs.Game_32SceneCode.GDJump_9595Up_9595HereObjects2.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackground1Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground1Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground2Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground2Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground3Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground3Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground4Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground4Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground5Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground5Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground6Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground6Objects2.length = 0;
gdjs.Game_32SceneCode.GDBackground7Objects1.length = 0;
gdjs.Game_32SceneCode.GDBackground7Objects2.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595textObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemy_9595textObjects2.length = 0;
gdjs.Game_32SceneCode.GDheartObjects1.length = 0;
gdjs.Game_32SceneCode.GDheartObjects2.length = 0;
gdjs.Game_32SceneCode.GDheart2Objects1.length = 0;
gdjs.Game_32SceneCode.GDheart2Objects2.length = 0;
gdjs.Game_32SceneCode.GDheart3Objects1.length = 0;
gdjs.Game_32SceneCode.GDheart3Objects2.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595boostObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595boostObjects2.length = 0;
gdjs.Game_32SceneCode.GDclosed_9595doorObjects1.length = 0;
gdjs.Game_32SceneCode.GDclosed_9595doorObjects2.length = 0;
gdjs.Game_32SceneCode.GDcollect_9595coinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDcollect_9595coinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDtotal_9595coinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDtotal_9595coinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDclosed_9595door_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDclosed_9595door_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDhmmObjects1.length = 0;
gdjs.Game_32SceneCode.GDhmmObjects2.length = 0;
gdjs.Game_32SceneCode.GDopened_9595doorObjects1.length = 0;
gdjs.Game_32SceneCode.GDopened_9595doorObjects2.length = 0;
gdjs.Game_32SceneCode.GDalso_9595closedObjects1.length = 0;
gdjs.Game_32SceneCode.GDalso_9595closedObjects2.length = 0;
gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects1.length = 0;
gdjs.Game_32SceneCode.GDsuper_9595Speed_9595boost2Objects2.length = 0;
gdjs.Game_32SceneCode.GDarrowObjects1.length = 0;
gdjs.Game_32SceneCode.GDarrowObjects2.length = 0;
gdjs.Game_32SceneCode.GDlook_9595upObjects1.length = 0;
gdjs.Game_32SceneCode.GDlook_9595upObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FakeObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
